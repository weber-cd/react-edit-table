# input-table
---

可编辑的表单组件



### 何时使用

- 需要表单数据支持编辑时

### 如何使用

指定表格的数据源 `dataSource` 为一个数组。

```jsx
// 列信息
import { InputEditor, SelectEditor, CheckboxEditor, CheckboxRender } from 'input-table'
export const columns = [
  {
    title: '班级',
    dataIndex: 'stage',
    key: 'stage',
    editorRender: (value, currentTarget, index, onSubmit) => <SelectEditor value={value} currentTarget={currentTarget} options={stageOptions} onSubmit={onSubmit}/>,
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
    editorRender: (defaultValue, record, index, onSubmit) =>  <InputEditor defaultValue={defaultValue} onSubmit={onSubmit} />
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    editorRender: (defaultValue, record, index, onSubmit) =>  <InputEditor  defaultValue={defaultValue} onSubmit={onSubmit} />
  },
  {
    title: '激活',
    dataIndex: 'start',
    key: 'start',
    editorRender: (value, currentTarget, index, onSubmit) => <CheckboxEditor checked={value} onSubmit={onSubmit}/>,
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


<Table dataSource={dataSource} columns={columns} onChange={(newDataSource=>{}}/>;
```


### API

### Table

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | ---| ---| --- |
| dataSource | 数据数组 | `any[]` |  |  |
| columns | 数组，见Column | `ColumnProps[]` | - |  |
| onChange | 编辑完成后的回调，返回修改后的数据dataSource | function | -| |

## Columns

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | 列头显示文字 | `string 或 ReactNode` |  ||
| dataIndex | 列数据在数据项中对应的 key,支持path | `string 或 [key1, key2]` |  | |
| editorRender | 表格编辑器生成函数； | `function(value, currentTarget, index, onSubmit)` |  | |  |
| valueRender | 单元格内容生成函数； | `function(value)` |  | |  |
| valueRender | 单元格内容生成函数； | `function(value)` |  | |  |
| suffixInfo | 单元格内容后缀提示信息； | `reactNode` |  | |  |
