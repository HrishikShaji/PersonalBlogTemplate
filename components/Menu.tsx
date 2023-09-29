'use client'
import Image from 'next/image'
import img1 from '@/public/assets/vader2.jpg'
import img2 from '@/public/assets/vader3.jpg'
import img3 from '@/public/assets/vader4.jpg'

export const Menu = () => {
  return (
    <div className='w-full h-full p-10 bg-neutral-900 flex justify-around'>
      <Image
        className='h-[300px] w-[300px] object-cover rounded-md'
        src={img1}
        height={1000}
        width={1000}
        alt='image'
      />
      <Image
        className='h-[300px] w-[300px] object-cover rounded-md'
        src={img2}
        height={1000}
        width={1000}
        alt='image'
      />
      <Image
        className='h-[300px] w-[300px] object-cover rounded-md'
        src={img3}
        height={1000}
        width={1000}
        alt='image'
      />
    </div>
  )
}
