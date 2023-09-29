import Image from 'next/image'
import img1 from '@/public/assets/kylo1.jpg'
import { Hero } from '@/components/Hero'
import { LovedOnes } from '@/components/LovedOnes'
import { Menu } from '@/components/Menu'

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
    </main>
  )
}
