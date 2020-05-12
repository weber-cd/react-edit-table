import React from 'react'
import Cell from './cell.component'
import { TypeEditorRender, TypeValueRender } from '../types'

type TPath = [number, string]

interface IDataCellProps {
  editorRender: TypeEditorRender;
  valueRender: TypeValueRender;
  value: string;
  onCellSubmit: (params: TPath, value: string ) => void;
  className: string;
  path: TPath;
  editable: boolean;
  suffixInfo?: React.ComponentType;
}

export default class DataCell extends React.Component<IDataCellProps> {
  currentTarget = null
  state = {
    isEditing: false
  }
  constructor (props) {
    super(props)
  }
  changeEditStatus = (e) => {
    // 不可编辑
    if(this.props.editable === false) return false
    this.currentTarget = e.currentTarget;
    this.setState({isEditing: true})
  }
  onCellValueChange = (value) => {
    this.setState({isEditing: false})
    this.props.onCellSubmit(this.props.path, value)
  }
  render () {
    const { editorRender: DataEditor, value, valueRender, editable, suffixInfo: SuffixInfo } = this.props;
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
          DataEditor(value, this.currentTarget, this.onCellValueChange)
          :
          <span className="value-viewer">
            <span className="value-viewer-content">
              {valueRender ?  valueRender(value) : value}
            </span>
          </span>
        }
        <span className={`suffix-info ${this.state.isEditing ? 'suffix-info-active' : ''}`}>
          {SuffixInfo}
        </span>
      </Cell>
    )
  }
}
