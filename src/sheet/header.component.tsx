import React from 'react'
import Row from './row.component'
import Cell from './cell.component'
import { IColumnsItem } from './../types'

interface IColumnsProps {
  columns: IColumnsItem[];
}

// 表头
function Header ({ columns }: IColumnsProps) {
  return (
    <Row>
      {columns.map(({title, key})=>(
        <Cell key= {key} className={'cell header-cell'}>
          <span className="value-viewer">
            <span className="value-viewer-content">{title}</span>
          </span>
        </Cell>)
      )}
      <Cell className={'cell header-cell'}>
        <span className="value-viewer">
          <span className="value-viewer-content">{'删除'}</span>
        </span>
      </Cell>
    </Row>)
}

export default Header
