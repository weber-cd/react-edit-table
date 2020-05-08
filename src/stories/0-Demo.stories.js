import React from 'react';
import ReactEditableTable from './../index';

export default {
  title: 'Demo',
  component: ReactEditableTable,
};

export const ToStorybook = () => <ReactEditableTable />;

ToStorybook.story = {
  name: 'ReactEditableTable',
};
