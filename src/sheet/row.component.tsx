import React, { ReactElement, ReactNode } from 'react'

interface IRowProps{
  children: ReactNode | ReactNode[]
}
function Row ({ children }: IRowProps) {
  return (
    <div className="row-container">
      {children}
    </div>
  )
}

export default Row
