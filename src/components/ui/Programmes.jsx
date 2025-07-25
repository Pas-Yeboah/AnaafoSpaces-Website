import React from 'react'

const Programmes = () => {
  return (
    
    <div className='grid grid-cols-4'>
        <img src=" /summit.jpg" alt="" className='w-full h-full object-cover' />
        <div className=' space-y-10 p-6'>
            <h1 className='font-bold text-4xl '>
                FACT FWD Summit at Anaafo Spaces
            </h1>
            <p className='text-1xl'>
                A powerful one-day gathering of journalists, lecturers, media minds, 
                and AI experts—exploring the fight against mis/disinformation.
                 Hosted at Anaafo Spaces.
            </p>
            <button className='bg-black px-4 mt-18 rounded-sm py-2  text-white'>
                Learn More
            </button>
        </div>
        <img className='w-full h-full object-cover'  src="/public/confernce2.jpg" alt="" />
        <div className='space-y-10 p-6'>
            <h1 className='font-bold text-4xl'>
                The Education Innovation Conference
            </h1>
            <p>
                Reimagining learning for a digital world.
                Educators, edtech startups, and policymakers come together to explore the 
                future of education. From digital classrooms to inclusive learning strategies,
                EduCon at Anaafo Spaces sparks dialogue and action on transforming education 
                across Africa.
            </p>
            <button className='bg-black px-4  rounded-sm py-2  text-white'>
                Learn More
            </button>
            
        </div>
        <img src="/public/businessmeeting.jpg" alt=""className=' w-full h-full object-cover order-6' />
        <div className=' space-y-10 p-6 order-5'>
            <h1 className='font-bold text-4xl'>
                FACT FWD Summit at Anaafo Spaces
            </h1>
            <p>
                A powerful one-day gathering of journalists, lecturers, media minds, 
                and AI experts—exploring the fight against mis/disinformation.
                 Hosted at Anaafo Spaces, this summit dives into ethical 
                storytelling and the future of credible information in a fast-moving digital world.
            </p>
            <button className='bg-black px-4  rounded-sm py-2  text-white'>
                Learn More
            </button>
        </div>
        <img src="/public/partpeople.jpg" alt="" className=' w-full h-full object-cover order-8'/>
        <div className=' space-y-10 p-6 order-7'>
            <h1 className='font-bold text-4xl'>
                FACT FWD Summit at Anaafo Spaces
            </h1>
            <p>
                A powerful one-day gathering of journalists, lecturers, media minds, 
                and AI experts—exploring the fight against mis/disinformation.
                 Hosted at Anaafo Spaces, this summit dives into ethical 
                storytelling and the future of credible information in a fast-moving digital world.
            </p>
            <button className='bg-black px-4  rounded-sm py-2  text-white'>
                Learn More
            </button>
        </div>
    </div>
    
    
    
  )
}

export default Programmes