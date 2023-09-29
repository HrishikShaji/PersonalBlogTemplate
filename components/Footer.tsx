import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='w-full text-white p-10 flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-2xl font-semibold'>Darth Vader</h1>
      <div className='flex flex-col gap-3 items-center'>
        <p>Follow me on</p>
        <div className='flex gap-4 font-bold '>
          <Link href=''>FACEBOOK</Link>
          <Link href=''>LINKEDIN</Link>
          <Link href=''>GITHUB</Link>
          <Link href=''>INSTAGRAM</Link>
          <Link href=''>DRIBBLE</Link>
        </div>
      </div>
    </div>
  )
}
