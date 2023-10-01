'use client'
import Image from 'next/image'
import img1 from '@/public/assets/vader2.jpg'
import img2 from '@/public/assets/vader3.jpg'
import img3 from '@/public/assets/vader4.jpg'
import { BlogSmallTile } from './BlogSmallTile'
import Link from 'next/link'

export const RightBar = () => {
  return (
    <div className='flex flex-col gap-10 text-white p-10'>
      <Image
        src={img1}
        alt='image'
        height={1000}
        width={1000}
        className='h-60 w-60 object-cover'
      />
      <div className='flex flex-col gap-6'>
        <h1>Follow me on</h1>
        <div className='flex gap-2'>kkk</div>
      </div>
      <div className='flex flex-col items-start w-full gap-2 '>
        <h1>Subscribe To my newsletter</h1>
        <input className='w-full p-2' placeholder='Email Address' />

        <button className='px-3 py-2 border-white border-2'>Sign Up</button>
      </div>
      <div className='flex flex-col gap-6'>
        <h1>Trending Posts</h1>
        <div className='flex flex-col gap-2'>
          <BlogSmallTile image={img3} title='sample post ' />
          <BlogSmallTile image={img3} title='sample post ' />
          <BlogSmallTile image={img3} title='sample post ' />
          <BlogSmallTile image={img3} title='sample post ' />
          <BlogSmallTile image={img3} title='sample post ' />
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className=''>Categories</h1>
        <div className='flex flex-col gap-2'>
          <Link href=''>ADVENTURE</Link>
          <Link href=''>LIFE</Link>
          <Link href=''>MUSIC</Link>
          <Link href=''>NATURE</Link>
          <Link href=''>TIPS</Link>
        </div>
      </div>
    </div>
  )
}
