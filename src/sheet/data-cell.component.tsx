import React, { MouseEvent } from 'react'
import Cell from './cell.component'
import { TypeEditorRender, TypeValueRender, TCellValue, TPath, IEditorOption } from './../types'
import {CheckboxRender} from './../plugin/checkbox/render'

// options value-text map cache
const optionsValueTextMap = {}


interface IDataCellProps {
  editorRender?: TypeEditorRender;
  valueRender?: TypeValueRender;
  value: TCellValue;
  onCellSubmit: (params: TPath, value: string | number ) => void;
  className: string;
  path: TPath;
  editor: IEditorOption
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
  cellDataIsNull = (value: TCellValue) => {
    return value === null
  }
  defaultValueRender (value){
    const { editable, editor, path: [, dataIndex] } = this.props;
    if(editable === false) return value;
    if(editor?.type === 'select'){
      if(!optionsValueTextMap[dataIndex]){
        const _tempObj = {}
        editor?.props?.options?.forEach(({value, text}) => {
          _tempObj[value] = text;
        });
        optionsValueTextMap[dataIndex] = _tempObj
      };
      return optionsValueTextMap[dataIndex][value]
    }
    if(editor?.type === 'checkbox'){
      return <CheckboxRender value={value} />
    }
    return value
  }
  render () {
    const { value, valueRender, suffixInfo: SuffixInfo, path, editor } = this.props;
    const Editor = editor?.component;
    const editorCoustomProps = editor?.props
    const editorDefaultProps = {value, currentTarget: this.currentTarget, onSubmit: this.onCellValueChange, path}
    let { className } = this.props;
    return (
      <Cell
        {...this.props}
        onMouseDown = {this.changeEditStatus}
        className = {className}
        >
        {
          this.state.isEditing && editor
          ?
          <Editor {...editorDefaultProps} {...editorCoustomProps}/>
          :
          <span className="value-viewer">
            <span className="value-viewer-content">
              {valueRender ?  valueRender({value, path}) : this.defaultValueRender(value)}
            </span>
          </span>
        }
        <span className={`suffix-info ${this.state.isEditing || this.cellDataIsNull(value)  ? 'suffix-info-active' : ''}`}>
          {SuffixInfo}
        </span>
      </Cell>
    )
  }
}
