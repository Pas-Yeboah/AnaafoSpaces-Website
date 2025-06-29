import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero flex flex-col justify-center items-center px-10 '>
        <div className='flex flex-col justify-center items-center gap-4 px-20'>
            <h1 className='text-white font-bold text-6xl text-center'>
                Work. Record. Create. All in One Space.
            </h1>
            <div className='flex justify-center items-center gap-4'>
                <button className='text-amber-800 bg-amber-200 px-3 font-bold py-2 rounded-sm hover:text-white hover:bg-amber-800'>
                Get Started
                </button>
                <button className='text-amber-200 border border-amber-200  font-bold px-3 py-2 rounded-sm hover:bg-amber-200 hover:text-amber-800'>
                Schedule a Tour
                </button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection