import React from 'react';
import FormRender, { useForm } from '@henryong/form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;
