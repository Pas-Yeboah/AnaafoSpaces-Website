import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
  return (
    <>
   <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      ><SwiperSlide>
        <div className='w-full h-[72vh] bg-gray-300 rounded-lg'>
            <img className="object-fit w-full rounded-lg   h-full"src="/public/PeopleInaPodcast.jpg" alt="" />
        </div>
        
      </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[72vh] bg-gray-300   rounded-lg'>
            <img className="object-fit w-full  rounded-lg   h-full"src="/public/image1.jpg" alt="" />
        </div>
         
        </SwiperSlide>
        <SwiperSlide>
           <div className='w-full h-[72vh] bg-gray-300 rounded-lg'>
            <img className="object-fit w-full rounded-lg h-full"src="/public/image2.jpg" alt="" />
        </div>
          
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-full h-[72vh] bg-gray-300 rounded-lg'>
            <img className="object-fit w-full rounded-lg h-full"src="/public/image3.jpg" alt="" />
        </div>
          
        </SwiperSlide>
        <SwiperSlide>
           <div className='w-full h-[72vh] bg-gray-300 rounded-lg'>
            <img className="object-fit w-full rounded-lg h-full"src="/public/image4.jpg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[72vh] bg-gray-300 rounded-lg'>
            <img className="object-fit w-full rounded-lg h-full"src="/public/image6.jpg" alt="" />
        </div>
        </SwiperSlide>
        
      </Swiper>
        </>
  )
}

export default Slider