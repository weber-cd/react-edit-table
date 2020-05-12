import React from 'react'

function Row ({ children }) {
  return (
    <div className="row-container">
      {children}
    </div>
  )
}

export default React.memo(Row)
