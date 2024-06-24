import React from 'react'

const ProductId = ({params, searchParams}) => {

  return (
    <div className='ms-10'>
      <h2>product id : {params.productID}</h2>
      <h1>product name : iphone15</h1>
    </div>
  )
}

export default ProductId
