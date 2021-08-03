import React from 'react';
import { Modal, Input, Button, message } from 'antd';
import copyTOClipboard from 'copy-text-to-clipboard';
import FR from './core';
import { looseJsonParse, isObject, schemaToState } from '../../utils';
import { useSet, useGlobal, useStore } from '../../utils/hooks';

const { TextArea } = Input;

const Canvas = () => {
  const setGlobal = useGlobal();
  const { userProps, displaySchema, displaySchemaString } = useStore();
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
    setGlobal({
      schema: {
        type: 'object',
        properties: {},
      },
      formData: {},
      selected: undefined,
    });
  };

  const _extraButtons = Array.isArray(extraButtons) ? extraButtons : [];
  const _showDefaultBtns = _extraButtons.filter(
    item => item === true || item === false
  );
  const _extraBtns = _extraButtons.filter(item => isObject(item) && item.text);

  return (
    <div className="mid-layout pr2">
      <div className="mv2 mh1">
        {_showDefaultBtns[0] !== false && (
          <Button
            className="mr2 mb1"
            onClick={() => {
              setState({ preview: !preview });
              setGlobal({ selected: '#' });
            }}
          >
            {preview ? 'Edit' : 'Preview'}
          </Button>
        )}
        {_showDefaultBtns[1] !== false && (
          <Button className="mr2" onClick={clearSchema}>
            Clear
          </Button>
        )}
        {_showDefaultBtns[2] !== false && (
          <Button className="mr2" onClick={toggleModal2}>
            Import Schema
          </Button>
        )}
        {_showDefaultBtns[3] !== false && (
          <Button type="primary" className="mr2" onClick={toggleModal}>
            Export Schema
          </Button>
        )}
        {_extraBtns.map((item, idx) => {
          return (
            <Button key={idx.toString()} className="mr2" {...item}>
              {item.text || item.children}
            </Button>
          );
        })}
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
