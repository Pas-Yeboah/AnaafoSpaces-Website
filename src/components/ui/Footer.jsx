import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className='bg-black flex justify-between p-50 items-start  text-white min-h-screen'>
        <img className='w-60  h-60' src="/Aspace_remove_bg.png" alt="ASpace" />
        <div className='flex flex-col'>
            <h1 className='font-bold mb-6 '>
                Navigation
            </h1>
            <a className='text-neutral-300' href="#">Home</a>
            <a className='text-neutral-300'href="#">About</a>
            <a className='text-neutral-300'href="#">Spaces</a>
            <a className='text-neutral-300'href="#">Programmes</a>
            <a className='text-neutral-300'href="#">Cta</a>
            <a className='text-neutral-300'href="#">Testimonial</a>
        </div>
        <div className='flex flex-col'>
            <h1 className=' mb-6 font-bold'>
                Socials
            </h1>
            <a className='text-neutral-300' href="#">Instagram</a>
            <a className='text-neutral-300'href="#">Facebook</a>
            <a className='text-neutral-300' href="#">X</a>
        </div>
        <div className='flex flex-col'>
            <h1 className=' mb-6 font-bold'>
                Contact
            </h1>
            <a className='text-neutral-300' href="#">Apsaces@gmail.com</a>
            <a className='text-neutral-300'href="#">Tel.0249280808</a>
            <a className='text-neutral-300'href="#">9 Adebeto close Labone</a>
            <a className='text-neutral-300'href="#">Accra</a>
        </div>
        
    </div>
    <hr className="border-t-2 border-white w-full my-4"/>
    </div>
    
  )
}
