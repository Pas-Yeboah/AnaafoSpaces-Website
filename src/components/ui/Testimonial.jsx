import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Mousewheel, Pagination } from 'swiper/modules';
import TestSlider from '../core/TestSlider';



const Testimonial = () => {
  return (
    <div className='bg-neutral-300  pt-24 w-full min-h-screen'>
        <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Mousewheel, Pagination ]}
        className="mySwiper bg-neutral-900 rounded-xl h-[450px] w-[1000px] "
      >
        <SwiperSlide className='  h-full'>
            <TestSlider maintext=" I booked Anaafo Space for a client meeting, and it was flawless. 
            The environment is quiet, well-equipped, 
            and impressively designed. My clients left feeling impressed and valued." name="Adjoa M., Business Consultant"/>
        </SwiperSlide>
        <SwiperSlide >
          <TestSlider maintext=" Anaafo Space has become my productivity sanctuary.
           Whether I’m brainstorming, meeting clients, or attending a workshop, 
          the energy here keeps me motivated. It’s more than a space—it’s a community." name="Kofi N., Startup Founder"/>
        </SwiperSlide>
        <SwiperSlide>
            <TestSlider maintext=" As a first-time podcaster, I was nervous about the tech side of things.
             Anaafo Space made it so easy! The studio is well-equipped,
             and the team guided me through every step. I left with high-quality recordings and a huge smile." name="Araba Y., Creative Entrepreneur"/>
        </SwiperSlide>
        <SwiperSlide>
            <TestSlider maintext=" We used Anaafo Space for our annual summit,
             and it exceeded expectations. From the seating arrangement to the tech support, 
            everything was handled with care. It truly elevated the entire experience." name="Michael T., Event Organizer"/>
        </SwiperSlide>
        <SwiperSlide>
              <TestSlider maintext=" Anaafo Space is the perfect blend of professionalism and creativity. 
              I hosted my podcast recording here, and the sound quality was incredible. The atmosphere kept me inspired, 
              and the staff were so attentive. Definitely my go-to spot!" name="Kwame A., Podcaster"/>
        </SwiperSlide>
        
      </Swiper>
    </div>
    
  )
}

export default Testimonial