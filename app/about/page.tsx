'use client'

import Image from 'next/image'
import img1 from '@/public/assets/vader2.jpg'

const Page = () => {
  return (
    <div className='w-full h-full items-center flex p-10 flex-col gap-20 text-white justify-center'>
      <div className='relative h-[50vh] w-[50vw] rounded-md flex overflow-hidden justify-center items-center'>
        <h1 className='absolute z-10 text-6xl font-bold text-white'>
          ABOUT ME
        </h1>
        <Image
          src={img1}
          alt='image'
          height={1000}
          width={1000}
          className='h-full w-full'
        />
      </div>
      <p className='w-[70vw]'>
        I'm Darth Vader.I'm formerly known as anakin skywalker.I was a slave
        once on tatooine.Then a jedi by the name of Qui gon jinn found me and
        realized that im the chosen one who will bring balance to the force. So
        he freed me from tatooine and brought me to coruscant.there i learnt the
        ways of the force and i was on my way to become a jedi.Then i fell in
        love with padme who is also a senator of the world naboo. we secretly
        got married.and then came the clone wars.i fought beside the clones
        against the separatist movement to bring peace to the republic.During
        this period i was having nightmares of padme dying.when padme told me
        that she was pregnant the nightmares got worse,i saw padme dying at
        childbirth. But the chancellor palpatine who was secretly a sith lord
        convinced me that darkside can save padme's life.But after the clone
        wars has ended i told master windu that palpatine was the sith lord we
        have been searching all along.when the jedi tried to arrest palpatine
        ,palpatine killed everyone ,to save he life of padme i wanted palpatine
        alive so i defended master windu from killing him.and that caused death
        of master windu.and i knelt before my new master Darth Sidious.and he
        gave me the name DARTH VADER.
      </p>
    </div>
  )
}

export default Page
