'use client'

import Image from 'next/image'

interface BlogSmallTilesProps {
  image: string
  title: string
}

export const BlogSmallTile: React.FC<BlogSmallTilesProps> = ({
  image,
  title,
}) => {
  return (
    <div className='flex gap-4 text-white h-20 w-full '>
      <Image
        src={image}
        height={1000}
        width={1000}
        alt='image'
        className=' w-20 object-cover '
      />
      <div className=' flex flex-col items-start'>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
