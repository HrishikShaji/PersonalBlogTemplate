import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { LatestBlogs } from '@/components/LatestBlogs'
import { Menu } from '@/components/Menu'

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
      <LatestBlogs />
    </main>
  )
}
