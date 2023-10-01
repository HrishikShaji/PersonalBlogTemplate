const Page = () => {
  return (
    <div className='h-screen  w-full flex flex-col gap-20 text-white items-center justify-center'>
      <h1 className=' text-6xl font-semibold'>CONTACT ME</h1>
      <form className='flex flex-col gap-5 w-[50vw]'>
        <input className='p-2 w-full' placeholder='Email...' />
        <input className='p-2 w-full' placeholder='Name...' />

        <textarea className='p-2 w-full' placeholder='Message...' />
        <button className='px-3 py-2 border-white border-2'>Submit</button>
      </form>
    </div>
  )
}

export default Page
