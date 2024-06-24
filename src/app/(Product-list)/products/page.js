import React from 'react'

export default async function Products(){

  const data = await fetch("http://localhost:4000/products",{
    cache: "force-cache",
    next:{
      revalidate: 10, //10s
    }  
  }
  ).
    then((res) => res.json()
  );

  return (
    <main >
      <h1 className='my-4 text-center'>Products Page</h1>
      
      {data.map((product) => (
          <h2 className='bg-blue-200' key={product.id}>{product.title} - {product.price}$</h2>
        ))}
    </main>
  )
}
