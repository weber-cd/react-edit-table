import React from 'react'
import './index.scss';

export function CheckboxRender(props) {
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
