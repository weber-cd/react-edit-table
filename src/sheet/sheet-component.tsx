import React from 'react'

function Sheet ({ className, children}) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Sheet
