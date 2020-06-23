# react-edit-table 
---
## a react table component that supports editing
[中文文档](./README_CN.md)

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

| Property | Description | Type | Default | 版本 |
| --- | --- | ---| ---| --- |
| dataSource | Data record array to be displayed | `object[]` |  |  |
| columns | Columns of table | [ColumnProps](#ColumnProps)[][] | - |  |
| onChange | Callback executed when editing | function() | -| |
| scrollBodyOptions | maxHeight: the max height of body;locateRow: the row locate when add a new row  | `{maxHeight: 100,  locateRow: 0}` | -| |


### <span id="ColumnProps">Columns</span>

| Property | Description | Type | Default |
| --- | --- | --- | --- | --- |
| title | Title of this column | `string || ReactNode` |  |
| dataIndex |  Display field of the data record | `string` |  | 
| editor | the cell editor config | object: [Editor](#EditorConfig) |  |  |
| valueRender | renderer of table cell | `function(value)` |  | 
| suffixInfo | suffix of table cell | `reactNode` |  | 

### <span id="EditorConfig">Editor</span>
| Property | Description | Type | Default |
| --- | --- | --- | --- | --- |
| type | type of editor | `input || select || checkbox`  ||
| componet | editor renderer; use build-in editor component or custom one，type为'cumstom' | `reactComponent`| |
| props | the props  that will passed to editor| `object` |

##  Build-in editor component
```js
import {
  InputEditor,
  SelectEditor,
  CheckboxEditor } from 'react-edit-table'
```


