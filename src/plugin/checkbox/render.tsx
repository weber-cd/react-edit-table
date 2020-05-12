import React from 'react'
// import './index.css'

export default function CheckboxEditor(props) {
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
