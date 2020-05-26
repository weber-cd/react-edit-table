import React, { MouseEvent } from 'react'
import Cell from './cell.component'
import { TypeEditorRender, TypeValueRender, TypeCellData, TPath } from './../types'

interface IDataCellProps {
  editorRender?: TypeEditorRender;
  valueRender?: TypeValueRender;
  cellData: TypeCellData;
  onCellSubmit: (params: TPath, value: string | number ) => void;
  className: string;
  path: TPath;
  editable: boolean;
  suffixInfo?: React.ComponentType;
}

export default class DataCell extends React.Component<IDataCellProps> {
  currentTarget: null | EventTarget = null
  state = {
    isEditing: false
  }

  changeEditStatus = (e: MouseEvent<HTMLDivElement>) => {
    // 不可编辑
    if(this.props.editable === false) return;
    this.currentTarget = e.currentTarget;
    // console.log('e:', Object.entries(e.currentTarget))
    this.setState({isEditing: true})
  }
  onCellValueChange = (value: string | number) => {
    this.setState({isEditing: false})
    this.props.onCellSubmit(this.props.path, value)
  }
  cellDataIsNull = (cellData: TypeCellData) => {
    if(cellData !== null && typeof cellData === 'object'){
      return cellData.value === null
    }
    return cellData === null
  }
  isCellEditable = () => {
    const { cellData, editable } = this.props;
    if(cellData !== null && typeof cellData === 'object' && cellData.editable !== undefined ){
      return !(cellData.editable === false)
    }
    return !(editable === false)
  }
  render () {
    const { editorRender: DataEditor, cellData, valueRender, suffixInfo: SuffixInfo, path } = this.props;
    let { className } = this.props;
    if(!this.isCellEditable()) {
      className = `${className} read-only`
    }
    return (
      <Cell
        {...this.props}
        onMouseDown = {this.changeEditStatus}
        className = {className}
        >
        {
          this.state.isEditing && DataEditor &&  this.isCellEditable()
          ?
          DataEditor({cellData, currentTarget: this.currentTarget, onSubmit: this.onCellValueChange, path})
          :
          <span className="value-viewer">
            <span className="value-viewer-content">
              {valueRender ?  valueRender({cellData, path}) : cellData}
            </span>
          </span>
        }
        <span className={`suffix-info ${this.state.isEditing || this.cellDataIsNull(cellData)  ? 'suffix-info-active' : ''}`}>
          {SuffixInfo}
        </span>
      </Cell>
    )
  }
}
