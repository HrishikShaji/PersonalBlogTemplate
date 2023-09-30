import { BlogTile } from '@/components/BlogTile'
import { ImageSlider } from '@/components/ImageSlider'
import img1 from '@/public/assets/vader2.jpg'
import img2 from '@/public/assets/vader3.jpg'
import img3 from '@/public/assets/vader4.jpg'

const Page = () => {
  return (
    <div className='p-10 flex flex-col justify-center gap-10'>
      <ImageSlider />
      <BlogTile image={img3} title='Vader' />
    </div>
  )
}

export default Page
