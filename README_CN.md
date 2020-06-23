# react-edit-table 
---
## 一个可编辑的react表单组件
## [online examples](https://weber-cd.github.io/react-edit-table)
## How to use

```
npm install react-edit-table
```

```jsx
import ReactEditeTable { InputEditor, SelectEditor, CheckboxEditor, CheckboxRender } from 'react-edit-table'

const columns = [
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade',
    editor: {
      type: 'select',
      component: SelectEditor,
      props: {
        options: [
          {
            value: 1,
            text: 'grade 1'
          }, 
          {
            value: 2,
            text: 'grade 2'
          }
        ]
      }
    },
  suffixInfo: <SuffixCaretDown />
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    editor: {
      type: 'input',
      component: InputEditor
    }
  }
];

const dataSource = [
  {
    key: '1',
    name: 'James',
    age: 32,
    grade: 1,
    start: false
  },
  {
    key: '2',
    name: 'Tom',
    age: 42,
    grade: 2,
    start: true
  },
];


<ReactEditeTable dataSource={dataSource} columns={columns} onChange={(newDataSource=>{}}/>;
```


## API

### Table

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---| ---| --- |
| dataSource | 数据数组	 | `object[]` | - |
| columns | 数组，见`Column` | [ColumnProps](#ColumnProps)[] | - |
| onChange | 编辑表格完成后触发 | function() | -|
| scrollBodyOptions | maxHeight,设置表体的最大高度，超出后将滚动;locateRow设置新增行操作之后，表单自动定位到的行位置 | `{maxHeight: 100,  locateRow: 0}` | -|


### <span id="ColumnProps">Columns</span>

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 列头显示文字 | `string || ReactNode` | - |
| dataIndex | 列数据在数据项中对应的路径 | `string` | - | 
| editor | 编辑器 | 见[Editor](#EditorConfig) | - |
| valueRender | 单元格内容的渲染函数 | `function(value)` | - | 
| suffixInfo | 单元格内容后缀提示信息 | `reactNode` | - | 

### <span id="EditorConfig">Editor</span>
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 编辑器类型 | `input || select || checkbox`  | - |
| componet | 编辑器的renderer: 可使用内置的编辑器组件，也可以自定义编辑器组件。自定义组件时，type为'cumstom' | `reactComponent`| - |
| props | 传给component使用的自定义props | `object` | - | 

## 已内置的编辑器 Build-in editor component
```js
import {
  InputEditor,
  SelectEditor,
  CheckboxEditor } from 'react-edit-table'
```







