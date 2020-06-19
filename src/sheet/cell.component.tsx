import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react'

interface ICellProps{
  className: string
  style?: CSSProperties
  onMouseDown?: MouseEventHandler<HTMLDivElement>
  children: ReactNode | ReactNode[]
}

// function Cell (props: ICellProps): React.SFC<ICellProps> {
// const App: React.SFC<Props> = (props: Props) => 
const Cell:  React.SFC<ICellProps> = (props: ICellProps) =>  {
  const {
        className, style, onMouseDown: onMouseDownControl, children
      } = props
      
  return (
    <div
      className={className}
      onMouseDown={onMouseDownControl}
      style={style}
    >
      {children}
    </div>
  )
}

export default Cell;
