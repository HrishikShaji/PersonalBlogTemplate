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
  const swiperRef = useRef(null)

  useEffect(() => {
    const swiperContainer = swiperRef.current
    const params = {
      navigation: true,
      pagination: true,
    }

    Object.assign(swiperContainer, params)
    swiperContainer.initialize()
  }, [])
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      ref={swiperRef}
      init={true}
      className='mySwiper w-[90vw] h-[60vh]'
    >
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
