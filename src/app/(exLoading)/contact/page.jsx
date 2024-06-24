
import React, { Suspense } from 'react'

// using next js

export default function Contact() {
   

    const fetchData = () => new Promise(resolve => {
        setTimeout(() => {
            resolve('data Successfully Fetched !')
        }, 5000)
    })

    let data = fetchData()

  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-16 p-24'>
        <h1 className='text-3xl font-extrabold text-red-600'>Contact Page</h1>
        <Suspense fallback={<h2>loding...</h2>}>
        {data && <h3>{data}</h3>}
        </Suspense>
    </div>
  )
}
