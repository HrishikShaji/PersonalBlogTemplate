'use client'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export const Navbar = () => {
  const session = useSession()

  if (session.status === 'loading')
    return <h1 className='text-white'>Loading...</h1>

  return (
    <div className='w-full text-white p-5 bg-neutral-800 fixed top-0 z-50 flex justify-between'>
      <button onClick={() => signIn()}>Login</button>
      <h1>{session.data?.user?.email}</h1>
    </div>
  )
}
