import React from 'react'
import Slider from '../core/Slider'

const Section1 = () => {
  return (
    <div >
        <div className='flex flex-col justify-center items-center py-3 m-17 '>
            <h1 className='text-5xl text-center font-bold w-3/5'>
                When Visionaries Connect, 
                Innovation Happens
            </h1>
            <p className='text-center text-1xl p-3'>
                Anaafo Spaces is where Africa’s boldest minds come to work, record, and connect.
                <br />From podcast studios to coworking zones and curated resources, we provide everything you need to turn 
               <br /> creative energy into real impact.Our mission is simple empower
               <br /> African youth to turn ideas into opportunity
                
            </p>
            <button className=' bg-black text-white px-3 py-1.5 font-bold rounded-sm hover:bg-white hover:text-black hover:border hover:border-black'>
                Learn more
            </button>

            
        </div>
        <div>
<Slider/>
        </div>

    </div>
  )
}

export default Section1