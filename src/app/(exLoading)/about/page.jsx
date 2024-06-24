'use client'
import React, { Suspense, useEffect, useState } from 'react'


// using react

export default function About() {
    const [data, setData] = useState("")

    const fetchData = () => new Promise(resolve => {
        setTimeout(() => {
            resolve('data Successfully Fetched !')
        }, 5000)
    })

    useEffect(() => {
        try{
            const x = fetchData()
            setData(x)
        }catch(error){
            console.log(error);
        }
    },[])

  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-16 p-24'>
        <h1 className='text-3xl font-extrabold text-red-600'>About Page</h1>
        <Suspense fallback={<h3>loading...</h3>}>
           {data && <h3 className='text-lg'>{data}</h3>}
        </Suspense>
       
    </div>
  )
}
