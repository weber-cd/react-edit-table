import React from 'react' 
import {ExtendFiledSubmit} from '../../types'
import './index.css'

interface CheckboxEditorProps {
  checked: boolean;
  onSubmit: ExtendFiledSubmit
}

export default class CheckboxEditor extends React.PureComponent<CheckboxEditorProps> {
  componentDidMount(){
    const { checked, onSubmit } = this.props;
    onSubmit(!checked)
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
