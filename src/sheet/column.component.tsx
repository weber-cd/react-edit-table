import React from 'react'
import Row from './row.component'
import DataCell from './data-cell.component'
import DeleteCell from './delete-cell/delete.component'

import { IDataSourceItem, IColumnsItem, } from './../types'

type TPath = [number, string]

interface IColumnProps {
  columns: IColumnsItem[];
  dataSourceItem: IDataSourceItem;
  onDataSourceUpdate: (params:TPath, value: string | number) => void;
  onDataRowDelete: (rowNumber:number) => void;
  rowIndex: number;
}
// 表体行
export default class Column extends React.Component<IColumnProps> {
  onCellSubmit = (path:TPath, value: string | number) => {
    this.props.onDataSourceUpdate(path, value)
  }
  render(){
    const { columns, dataSourceItem, rowIndex } = this.props;
    return (
      <Row>
       { columns.map(({dataIndex, editorRender, valueRender, editable, suffixInfo})=>(
          <DataCell
            key={dataIndex}
            onCellSubmit = {this.onCellSubmit}
            cellData={dataSourceItem[dataIndex]}
            editorRender = { editorRender }
            className = {'cell'}
            path={[rowIndex, dataIndex]}
            valueRender = { valueRender }
            editable = {editable}
            suffixInfo = {suffixInfo}
            />
          ))
        }
        <DeleteCell
          onClick = {this.props.onDataRowDelete}/>
      </Row>)
  }
}
