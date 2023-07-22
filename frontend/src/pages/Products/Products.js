import React from 'react'
import { userData } from '../../helpers'

export default function Products() {
    const displayusername = userData().username
  return (
    <div className="outter-container">
        <div>Products</div>
        <div className="greeting">Hello: {displayusername}</div>
    </div>
  )
}
