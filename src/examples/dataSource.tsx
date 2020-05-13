// dataSource example
// import { InputEditor, SelectEditor, CheckboxEditor, CheckboxRender } from './../../lib'
import React from 'react';
import { InputEditor, SelectEditor, CheckboxEditor, CheckboxRender } from '../index'
import SuffixCaretDown from '../plugin/suffixInfo/caretDown' 


const gradeOptions = [
  {
    value: 1,
    text: '1年级',
    isActive:false,
    isChecked:false
    
  }, 
  {
    value: 2,
    text: '2年级',
    isActive:false,
    isChecked:false
  },
  {
    value: 3,
    text: '3年级',
    isActive:false,
    isChecked:false
  }
]

export const columns = [
  {
    title: '年级',
    dataIndex: 'grade',
    key: 'grade',
    editorRender: ({cellData, currentTarget, onSubmit}) => <SelectEditor cellData={cellData} currentTarget={currentTarget} options={gradeOptions} onSubmit={onSubmit}/>,
    valueRender: (cellData) => `${cellData}年级`,
    suffixInfo: <SuffixCaretDown />
  },
  {
    title: '班级',
    dataIndex: 'classTh',
    key: 'classTh',
    editorRender: ({cellData, currentTarget, onSubmit}) => <SelectEditor cellData={cellData} currentTarget={currentTarget} options={cellData.options} onSubmit={onSubmit}/>,
    valueRender: (cellData) => {
      return cellData && `${cellData.value !== null ? cellData.value+'班': '请选择'}`
    },
    suffixInfo: <SuffixCaretDown />
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    editorRender: ({cellData, currentTarget, onSubmit}) =>  <InputEditor value={cellData} onSubmit={onSubmit} />
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    editable: false
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    editorRender: ({cellData, currentTarget, onSubmit}) =>  <InputEditor  value={cellData} onSubmit={onSubmit} />
  },
  {
    title: '激活',
    dataIndex: 'start',
    key: 'start',
    editorRender: ({cellData, currentTarget, onSubmit}) => <CheckboxEditor checked={cellData} onSubmit={onSubmit}/>,
    valueRender: (value) => <CheckboxRender checked={value} />
  }
];

export const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '高新区233',
    grade: '1',
    classTh: {
      value: 1,
      options: [
        {
          value: 1,
          text: '1班'
        }, 
        {
          value: 2,
          text: '2班'
        },
        {
          value: 3,
          text: '3班'
        }
      ]
    },
    start: false
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '天府新区233',
    grade: '2',
    classTh: {
      value: 1,
      options: [
        {
          value: 1,
          text: '1班'
        }, 
        {
          value: 2,
          text: '2班'
        }
      ]
    },
    start: true
  },
];
