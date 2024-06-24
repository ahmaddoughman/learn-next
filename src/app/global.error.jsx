'use client'
import React from 'react'

export default function GlobalError({error, reset}) {

  return (
    <html>
        <body>
            <h2>Something went wrong!{error.message}</h2>
            <button className='bg-red-200 py-2 px-5' onClick={()=>reset()}>Try again</button>
        </body>
    </html>
  )
}
// work on server not on client