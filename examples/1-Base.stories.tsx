// @ts-nocheck
import React, { useState } from 'react';
import ReactEditeTable, { InputEditor, SelectEditor, CheckboxEditor, SuffixCaretDown } from '../src/index';

import './index.scss'

const columns = [
  {
    title: '年级',
    dataIndex: 'grade',
    key: 'grade',
    editor: {
      type: 'select',
      component: SelectEditor,
      props: {
        options: [
          {
            value: 1,
            text: '1年级'
          }, 
          {
            value: 2,
            text: '2年级'
          },
          {
            value: 3,
            text: '3年级'
          }
        ]
      }
    },
  suffixInfo: <SuffixCaretDown />
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    editor: {
      type: 'input',
      component: InputEditor
    }
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    editable: false
  },
  {
    title: '激活',
    dataIndex: 'start',
    key: 'start',
    editor: {
      type: 'checkbox',
      component: CheckboxEditor
    }
  }
];

const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    grade: 1,
    start: false
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    grade: 2,
    start: true
  },
];

export const ToStorybook = () => {
  const [dataSourceState, setDataSourceState] = useState(dataSource)
  const handleDelete = ({rowIndex}) => {
    dataSourceState.splice(rowIndex, 1)
    setDataSourceState([...dataSourceState])
  }
  const onDataChange = ({newValue, preValue, rowIndex, key}) => {
    dataSourceState[rowIndex][key] = newValue;
    setDataSourceState(dataSourceState)
  }

  const addANewLine = () => {
    setDataSourceState(
      [...dataSourceState,
      {
        key: + new Date(),
        name: '',
        age: '',
        grade: '',
        start: false
      }
    ])
  }

  return <React.Fragment>
            <ReactEditeTable
                onDelete={ handleDelete }
                dataSource = {dataSourceState}
                onChange = { onDataChange }
                scrollBodyOptions = {{
                  maxHeight: 100,
                  locateRow: dataSourceState.length
                }}
                columns = {columns} />
            <button className='add-new' onClick={addANewLine}>
              add a new Line
            </button>
          </React.Fragment> ;
}



ToStorybook.story = {
  name: 'ReactEditeTable',
};

export default {
  title: 'ReactEditeTable',
  component: ReactEditeTable,
};
