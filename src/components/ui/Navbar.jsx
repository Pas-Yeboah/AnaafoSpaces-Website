import React from 'react'
import Button from '../core/Button'

const Navbar = () => {
    const menuItems = [
    {
        id:1,
        tag:"Home",
        href:"#"
    },
    {
        id:2,
        tag:"About",
        href:"#"
    },
    {
        id:3,
        tag:"Spaces",
        href:"#"
    },
    {
        id:4,
        tag:"Contact",
        href:"#"
    },
    ]
  return (
    <nav className='flex items-center justify-between bg-white h-[10vh] w-full px-10 py-1 shadow-sm'>
        <div className='w-1/4 flex flex-col justify-center '>
           <img className='w-28 mt-2 h-24 ' src="/AnaafoSL.png" alt=" AnaafoSpaces Logo" />
        </div>
        <div className='w-3/4 flex justify-end items-center gap-10'>
        <div className='flex justify-center items-center gap-3 hover: '>
         {
            menuItems.map((menuItem)=>(
               <p className='hover:text-amber-700' key={menuItem.id}>{menuItem.tag}</p> 
            ))
        }

        </div>
        <div>
        <Button/>
        </div>
        
        </div>
    
    </nav>
    
  )
}

export default Navbar


