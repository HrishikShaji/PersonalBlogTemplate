export const LatestBlogs = () => {
  return (
    <div className='p-10 w-full flex flex-col gap-10 items-center'>
      <h1 className='text-2xl font-semibold text-white'>Latest Posts</h1>
      <div className='flex flex-col gap-5'>
        <div className='bg-neutral-800 p-5 flex items-center text-white h-20 w-[50vw] rounded-md'>
          <h1>Post 1</h1>
        </div>
        <div className='bg-neutral-800 p-5 flex items-center text-white h-20 w-[50vw] rounded-md'>
          <h1>Post 2</h1>
        </div>
        <div className='bg-neutral-800 p-5 flex items-center text-white h-20 w-[50vw] rounded-md'>
          <h1>Post 3</h1>
        </div>
        <div className='bg-neutral-800 p-5 flex items-center text-white h-20 w-[50vw] rounded-md'>
          <h1>Post 4</h1>
        </div>
        <div className='bg-neutral-800 p-5 flex items-center text-white h-20 w-[50vw] rounded-md'>
          <h1>Post 5</h1>
        </div>
      </div>
      <button className='px-3 py-2 bg-neutral-700 rounded-md text-white'>
        {' '}
        See More
      </button>
    </div>
  )
}
