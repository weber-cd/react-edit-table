import React from 'react';
import ReactEditableTable from './../index.ts';

export default {
  title: 'Demo',
  component: ReactEditableTable,
};

export const ToStorybook = () => <ReactEditableTable />;

ToStorybook.story = {
  name: 'ReactEditableTable',
};
