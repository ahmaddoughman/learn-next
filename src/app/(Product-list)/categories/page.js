"use client";
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

const Page = () => {

  const router = useRouter();
  const [num,setNum] = useState(0);


  // 1st way
  // useEffect(()=> {
  //   fetch("http://localhost:4000/products").
  //   then((res) => res.json()).
  //   then((data) => console.log(data))
  // },[])

  const [category, setCategory] = useState([])

  // 2nd way
  useEffect(()=> {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/category")
        .then((res) => res.json())
        setCategory(data)
    }
    fetchData()
  },[])

  return (
    <div>
      <h1 className='text-center my-3'> Category page {num}</h1>

      <button 
        onClick={() => { setNum((prev) => prev +1);}}
        className='flex mx-auto py-2 px-5 bg-red-500 text-white rounded-md  my-3'>
          Increament
      </button>

      <button 
        onClick={() => {router.refresh()}}
        className='flex mx-auto py-2 px-5 bg-red-500 text-white rounded-md  my-3'>
          refresh
      </button>
      <button 
        onClick={() => { router.push("/products/pro")}}
        className='flex mx-auto py-2 px-5 bg-red-500 text-white rounded-md  my-3'>
          Navigate To Product
      </button>
      

      {category.map((category) => <h1 className='bg-blue-200' key={category.id}>{category.title}</h1>)}

    </div>
  )
}

export default Page
