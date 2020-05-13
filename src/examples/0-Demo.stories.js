import React from 'react';
import ReactEditableTable from './../index.ts';

import {dataSource, columns} from './dataSource'

export default {
  title: 'Demo',
  component: ReactEditableTable,
};

export const ToStorybook = () => <ReactEditableTable dataSource = {dataSource} columns = {columns} />;

ToStorybook.story = {
  name: 'ReactEditableTable',
};
