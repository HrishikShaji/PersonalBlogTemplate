'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import img1 from '@/public/assets/vader2.jpg'
import img2 from '@/public/assets/vader3.jpg'
import img3 from '@/public/assets/vader4.jpg'

export const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: '.my-swiper-button-prev',
        nextEl: '.my-swiper-button-next',
      }}
      loop
      className='mySwiper w-[90vw] h-[60vh] relative flex items-center'
    >
      <div className='my-swiper-button-prev h-10 w-10 absolute z-10 top-[50%] translate-y-[-50%] cursor-pointer left-0  bg-white' />
      <div className='my-swiper-button-next h-10 w-10 absolute z-10 top-[50%] translate-y-[-50%] cursor-pointer right-0  bg-white' />
      <SwiperSlide>
        <Image
          src={img1}
          alt='image'
          height={1000}
          width={1000}
          className='w-full h-full object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={img2}
          alt='image'
          height={1000}
          width={1000}
          className='w-full h-full object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={img3}
          alt='image'
          height={1000}
          width={1000}
          className='w-full h-full object-cover'
        />
      </SwiperSlide>
    </Swiper>
  )
}
