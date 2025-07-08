import React from 'react'

const HeroSection = () => {
  return (
    <section className='hero flex flex-col justify-center items-center px-10 '>
        <div className='flex flex-col justify-center items-center gap-4 px-20'>
            <h1 className='text-white font-bold text-6xl text-center'>
                Work. Record. Create. All in One Space.
            </h1>
            <div className='flex justify-center items-center gap-4'>
                <button className='text-white bg-black px-3 font-bold py-2 rounded-sm hover:text-black hover:bg-white'>
                Get Started
                </button>
                <button className='text-white border border-white font-bold px-3 py-2 rounded-sm hover:bg-black hover:text-white hover:border-black'>
                Schedule a Tour
                </button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection