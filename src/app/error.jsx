'use client'
import React from 'react'

export default function ErrorBoundary({error, reset}) {

  return (
    <section className='min-h-screen flex justify-center items-center flex-col'>

      <h1 className='text-2xl text-red-950 font-semibold'>{error.message}</h1>

      <p className='text-red-600'>Something went wrong </p>
      
      <button className='bg-red-200 py-2 px-5' onClick={()=>reset()}>Reload</button>
    </section>
  )
}
// work on server not on client