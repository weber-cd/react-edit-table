import React from 'react'
import './index.css'
import { ExtendFiledSubmit } from '../../types'
interface IInputEditorProps{
  onSubmit: ExtendFiledSubmit;
  value: any;
}

export default class InputEditor extends React.Component<IInputEditorProps> {
  inputEl = null;
  componentDidMount(){
    setTimeout(()=>{this.inputEl.focus()}, 0)
  }
  render (){
    const { onSubmit, value } = this.props;
    return (
      <div className='data-editor-container'>
        <input
          ref={node => this.inputEl = node}
          defaultValue={value}
          className='data-editor'
          onBlur={(e)=>{onSubmit(e.currentTarget.value)}}
          />
      </div>
    )
  }
}
