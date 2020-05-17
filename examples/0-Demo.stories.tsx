// @ts-nocheck
import React from 'react';
import ReactEditableTable from './../src/index';

import {dataSource, columns} from './dataSource'

export default {
  title: 'Demo',
  component: ReactEditableTable,
};

export const ToStorybook = () => <ReactEditableTable dataSource = {dataSource} columns = {columns} />;

ToStorybook.story = {
  name: 'ReactEditableTable',
};
