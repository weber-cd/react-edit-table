import React from 'react'
import './index.css';

interface CheckboxEditorProps {
  checked: boolean;
}

export default function CheckboxEditor(props:CheckboxEditorProps) {
  const { checked } = props;
  return (
    <div className='checkbox-render-container'>
      <input
        type={'checkbox'}
        className='checkbox-render'
        checked={checked}
        onChange={()=>{}}
        />
    </div>
  )
}
