import React from 'react';
import './index.css'

function Delete(props) {
  return <div className='cell' onClick = {props.onClick} >
    <div className='delete-container'>
      <span className='table-context-delete'></span>
    </div>
  </div>
}
export default Delete

