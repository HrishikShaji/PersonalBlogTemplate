'use client'

import Image from 'next/image'

interface BlogTilesProps {
  image: string
  title: string
}

export const BlogTile: React.FC<BlogTilesProps> = ({ image, title }) => {
  return (
    <div className='flex text-white h-[300px] w-[600px] '>
      <Image
        src={image}
        height={1000}
        width={1000}
        alt='image'
        className=' w-[50%] object-cover '
      />
      <div className=' w-[50%] flex flex-col items-center justify-center'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
