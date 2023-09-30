import Image from 'next/image'
import img1 from '@/public/assets/vader1.jpg'

export const Hero = () => {
  return (
    <div className='w-full relative text-white flex flex-col justify-center gap-10 items-center h-screen'>
      <Image
        src={img1}
        alt='image'
        height={1900}
        width={1900}
        className=' h-60 w-60 rounded-full object-cover'
      />
      <h1 className='font-bold text-white text-3xl'>Hi, I'm Darth Vader</h1>
      <h3 className='font-semibold text-white text-xl'>I'm a Sith lord</h3>
    </div>
  )
}
