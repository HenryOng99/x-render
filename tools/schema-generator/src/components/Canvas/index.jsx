import React, { useEffect } from 'react';
import { Modal, Input, Button, message, Row, Col } from 'antd';
import copyTOClipboard from 'copy-text-to-clipboard';
import FR from './core';
import { looseJsonParse, isObject, schemaToState, idToSchema } from '../../utils';
import { useSet, useGlobal, useStore } from '../../utils/hooks';

const { TextArea } = Input;

const Canvas = ({ onSelect }) => {
  const setGlobal = useGlobal();
  const { userProps, displaySchema, displaySchemaString, selected, flatten, onChange, onSchemaChange } = useStore();
  const [local, setState] = useSet({
    preview: false,
    showModal: false,
    showModal2: false,
    schemaForImport: '',
  });
  const { preview } = local;

  const { transformer, extraButtons = [] } = userProps;

  const toggleModal = () => setState({ showModal: !local.showModal });
  const toggleModal2 = () => setState({ showModal2: !local.showModal2 });

  const onTextareaChange = e => {
    setState({ schemaForImport: e.target.value });
  };

  const importSchema = () => {
    try {
      const value = transformer.from(looseJsonParse(local.schemaForImport));
      setGlobal(() => ({
        selected: undefined,
        ...schemaToState(value),
      }));
      onChange(value.formData || {});
      onSchemaChange(value);
    } catch (error) {
      console.log('catch', error)
      message.info('Incorrect Format, please try again.'); // 可以加个格式哪里不对的提示
    }
    toggleModal2();
  };

  const copySchema = () => {
    copyTOClipboard(displaySchemaString);
    message.info('Copied');
    toggleModal();
  };

  const clearSchema = () => {
    const schema = {
      type: 'object',
      properties: {},
    };
    setGlobal({
      schema,
      formData: {},
      selected: undefined,
    });
    onChange({});
    onSchemaChange(schema);
  };

  useEffect(() => {
    if (!onSelect) return;
    onSelect(idToSchema(flatten, selected));
  }, [selected])

  const _extraButtons = Array.isArray(extraButtons) ? extraButtons : [];
  const _showDefaultBtns = _extraButtons.filter(item => !isObject(item));
  const _extraBtns = _extraButtons.filter(item => isObject(item));

  const getDefaultBtnText = (text, defaultText, index) => {
    if (typeof index === 'number') {
      if (Array.isArray(text)) return text[index];
      return defaultText[index];
    }
    if (typeof text === 'string') return text;
    return defaultText;
  }

  return (
    <div className="mid-layout pr2">
      <div className="mv2 mh1">
        <Row>
          {_showDefaultBtns[0] !== false && (
            <Col>
              <Button
                className="mr2 mb1"
                onClick={() => {
                  setState({ preview: !preview });
                  setGlobal({ selected: '#' });
                }}
              >
                {preview ? 'Edit' : 'Preview'}
              </Button>
            </Col>
          )}
          {_showDefaultBtns[1] !== false && (
            <Col>
              <Button className="mr2 mb1" onClick={clearSchema}>
                Clear
              </Button>
            </Col>
          )}
          {_showDefaultBtns[2] !== false && (
            <Col>
              <Button className="mr2 mb1" onClick={toggleModal2}>
                Import Schema
              </Button>
            </Col>
          )}
          {_showDefaultBtns[3] !== false && (
            <Col>
              <Button type="primary" className="mr2 mb1" onClick={toggleModal}>
                Export Schema
              </Button>
            </Col>
          )}
          {_extraBtns.map((item, idx) => {
            if (item.component) {
              return (
                <Col className="mr2 mb1" key={idx.toString()}>
                  <item.component />
                </Col>
              )
            }
            return (
              <Col key={idx.toString()} className="mr2 mb1">
                <Button {...item}>
                  {item.text || item.children}
                </Button>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className={`dnd-container ${preview ? 'preview' : 'edit'}`}>
        <div style={{ height: preview ? 33 : 0 }}></div>
        <FR preview={preview} displaySchema={displaySchema} />
      </div>
      <Modal
        visible={local.showModal}
        onOk={copySchema}
        onCancel={toggleModal}
        okText="Copy"
        cancelText="Cancel"
      >
        <div className="mt3">
          <TextArea
            style={{ fontSize: 12 }}
            value={displaySchemaString}
            autoSize={{ minRows: 10, maxRows: 30 }}
          />
        </div>
      </Modal>
      <Modal
        visible={local.showModal2}
        okText="Import"
        cancelText="Cancel"
        onOk={importSchema}
        onCancel={toggleModal2}
      >
        <div className="mt3">
          <TextArea
            style={{ fontSize: 12 }}
            value={local.schemaForImport}
            placeholder="Paste in the schema that needs to import."
            onChange={onTextareaChange}
            autoSize={{ minRows: 10, maxRows: 30 }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Canvas;
