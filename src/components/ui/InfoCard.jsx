import React from 'react'

const InfoCard = ({imgSrc , heading, subtext}) => {
  return (
    <div className=' '>
            <div className=''>
                <img className='rounded-xl' src={imgSrc.replace('/public/', '/')} alt="" />
            </div>
            <div className=' my-15 space-y-4 '>
                <h1 className='font-bold text-3xl'>
                    {heading}
                </h1>
                <p className=''>
                    {subtext}
                </p>
                <button className='bg-white text-1xl font-bold rounded-sm mb-3 py-2 px-4 text-black hover:border-solid hover:border-white hover:text-white hover:bg-black'>
                    Book now
                </button>
            </div>
        </div>
  )
}

export default InfoCard