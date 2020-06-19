import React from 'react'
import './index.scss';

export function CheckboxRender(props) {
  const { value } = props;
  return (
    <div className='checkbox-render-container'>
      <input
        type={'checkbox'}
        className='checkbox-render'
        checked={value}
        onChange={()=>{}}
        />
    </div>
  )
}
