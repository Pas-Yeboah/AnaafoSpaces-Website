import React from 'react';

import { Quote } from 'lucide-react';

const TestSlider = ({maintext,name}) => {
  return (
    <>
     <div className='flex flex-col p-10 justify-center items-center'>
      <Quote color="green" size={40} className="mb-4"/>
       <p className='text-2xl font-bold mt-6 text-center text-white '>
          {maintext}
       </p>
       <p className='text-neutral-200 mt-8'>
        {name}
       </p>
     </div>
    </>
  )
}

export default TestSlider