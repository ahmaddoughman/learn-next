'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const links =[
        {title: "home", ref:'/'},
        {title: "products", ref:'/products'},
        {title: "categories", ref:'/categories'},
        {title: "feedback", ref:'/feedback'}
    ]

  return (
      <header className="m-20 w-screen ml-0 bg-yellow-400 ">
        This for component
          <nav className="flex justify-center gap-3 items-center h-16">
            {links.map((link, index) =>
             <Link key={index} className={`${pathname === link.ref && "bg-white text-red-600 px-5 py-2 rounded-lg"}`} href={link.ref}>{link.title}</Link>
             )}
          </nav>
        </header>
  
  )
}

export default Navbar
