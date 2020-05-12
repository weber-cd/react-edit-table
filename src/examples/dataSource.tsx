// dataSource example
// import { InputEditor, SelectEditor, CheckboxEditor, CheckboxRender } from './../../lib'
import { InputEditor, SelectEditor, CheckboxEditor, CheckboxRender } from '../index'
import SuffixCaretDown from '../plugin/suffixInfo/caretDown' 

const stageOptions = [
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
    title: '班级',
    dataIndex: 'stage',
    key: 'stage',
    editorRender: (value, currentTarget, onSubmit) => <SelectEditor value={value} currentTarget={currentTarget} options={stageOptions} onSubmit={onSubmit}/>,
    valueRender: (value) => `${value}年级`,
    suffixInfo: <SuffixCaretDown/>
  },
  {
    title: '姓名',
    dataIndex: 'name',
    editable: false,
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    editorRender: (value, currentTarget, onSubmit) =>  <InputEditor value={value} onSubmit={onSubmit} />
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    editorRender: (value, currentTarget, onSubmit) =>  <InputEditor  value={value} onSubmit={onSubmit} />
  },
  {
    title: '激活',
    dataIndex: 'start',
    key: 'start',
    editorRender: (value, currentTarget, onSubmit) => <CheckboxEditor checked={value} onSubmit={onSubmit}/>,
    valueRender: (value) => <CheckboxRender checked={value} />
  }
];

export const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '高新区233',
    stage: '1',
    start: false
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '天府新区233',
    stage: '2',
    start: true
  },
];
