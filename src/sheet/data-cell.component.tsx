import React, {MouseEvent} from 'react'
import Cell from './cell.component'
import { TypeEditorRender, TypeValueRender, TypeCellData } from '../types'

type TPath = [number, string]

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
  currentTarget: (EventTarget & Element) | null = null
  state = {
    isEditing: false
  }
  changeEditStatus = (e: MouseEvent) => {
    // 不可编辑
    if(this.props.editable === false) return false
    this.currentTarget = e.currentTarget;
    this.setState({isEditing: true})
  }
  onCellValueChange = (value: string | number) => {
    this.setState({isEditing: false})
    this.props.onCellSubmit(this.props.path, value)
  }
  cellDataIsNull = (cellData: TypeCellData) => {
    if(typeof cellData === 'object'){
      return cellData.value === null
    }
    return cellData === null
  }
  render () {
    const { editorRender: DataEditor, cellData, valueRender, editable, suffixInfo: SuffixInfo } = this.props;
    let { className } = this.props;
    if(editable === false) {
      // console.log('className:', className)
      className = `${className} read-only`
    }
    return (
      <Cell
        {...this.props}
        onMouseDown = {this.changeEditStatus}
        className = {className}
        >
        {
          this.state.isEditing && DataEditor  ?
          DataEditor({cellData, currentTarget: this.currentTarget, onSubmit: this.onCellValueChange})
          :
          <span className="value-viewer">
            <span className="value-viewer-content">
              {valueRender ?  valueRender(cellData) : cellData}
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

