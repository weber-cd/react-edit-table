import React from 'react'

function Cell (props) {
  const {
        className, style, onMouseDown, onMouseOver, onDoubleClick, onContextMenu
      } = props

  return (
    <div
      className={className}
      onMouseDown={onMouseDown}
      onMouseOver={onMouseOver}
      onDoubleClick={onDoubleClick}
      onTouchEnd={onDoubleClick}
      onContextMenu={onContextMenu}
      style={style}
    >
      {props.children}
    </div>
  )
}

export default Cell;
