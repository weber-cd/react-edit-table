// @ts-nocheck
import React, { useState } from 'react';
import ReactEditableTable from './../lib/index';

import {dataSource, columns} from './dataSource'


export default {
  title: 'Demo',
  component: ReactEditableTable,
};


export const ToStorybook = () => {
  const [dataSourceState, setDataSourceState] = useState(dataSource)
  const handleDelete = ({rowIndex}) => {
    dataSourceState.splice(rowIndex, 1)
    setDataSourceState([...dataSourceState])
  }
  const onDataChange = ({newValue, preValue, rowIndex, key}) => {
    console.log(rowIndex, key, newValue, preValue)
    dataSourceState[rowIndex][key] = newValue;
    setDataSourceState(dataSourceState)
  }
  return <ReactEditableTable
            onDelete={ handleDelete }
            dataSource = {dataSourceState}
            onChange = { onDataChange }
            columns = {columns} />;
}

ToStorybook.story = {
  name: 'ReactEditableTable',
};
