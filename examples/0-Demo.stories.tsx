// @ts-nocheck
import React from 'react';
import ReactEditableTable from './../src/index';

import {dataSource, columns} from './dataSource'

export default {
  title: 'Demo',
  component: ReactEditableTable,
};

const handleDelete = ({rowIndex}) => {
  console.log(rowIndex);
}

export const ToStorybook = () => <ReactEditableTable onDelete={handleDelete} dataSource = {dataSource} columns = {columns} />;

ToStorybook.story = {
  name: 'ReactEditableTable',
};
