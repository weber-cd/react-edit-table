import React from 'react'
// import './index.css'
import {ExtendFiledSubmit} from './../../types'
import './index.scss';

interface CheckboxEditorProps {
  value: boolean;
  onSubmit: ExtendFiledSubmit
}

export class CheckboxEditor extends React.Component<CheckboxEditorProps> {
  componentDidMount(){
    const { value, onSubmit } = this.props;
    onSubmit(!value)
  }
  render(){
    return (
      <div className='data-editor-container'>
        <input
          type={'checkbox'}
          className='checkbox-editor'
          onChange={()=>{console.log('onChange')}}
          />
      </div>
    )
  }
}
