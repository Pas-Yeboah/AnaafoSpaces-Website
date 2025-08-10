import React from 'react'

const CTA = () => {
  return (
    <div  className='flex justify-center items-center bg-black text-white w-full  h-screen '>
        <div className='  m-3 p-5 space-y-8 w-1/2'>
            <h1 className='text-5xl font-bold'>
            Make Anaafo Spaces your Space for life
        </h1>
        <p className='text-1xl '>
            Book affordable, flexible spaces for work, events, or living—tailored <br /> to your needs.
        </p>
        <button className='bg-white text-black px-4 py-2 rounded-sm hover:bg-black hover:border hover:border-white hover:text-white'>
            Book now
        </button>
        </div>
        <div className='flex justify-center items-center w-1/2'>
            <img className='w-1/3 rounded-sm' src="/public/empty_A_space.jpg" alt="AnaafoSpace_WorkSpace" />
            <div>
                <img className='w-2/3 rounded-sm m-8' src="/public/guy_working.jpg" alt="Space In use" />
                <img className='w-1/2 rounded-sm m-8 ' src="/public/man_working.jpg" alt="Space In use" />
            </div>
        </div>
        

    </div>
  )
}

export default CTA