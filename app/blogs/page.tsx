import { BlogTile } from '@/components/BlogTile'
import { ImageSlider } from '@/components/ImageSlider'
import { RightBar } from '@/components/RightBar'
import img1 from '@/public/assets/vader2.jpg'
import img2 from '@/public/assets/vader3.jpg'
import img3 from '@/public/assets/vader4.jpg'

const Page = () => {
  return (
    <div className='p-10 flex flex-col justify-center items-center gap-10'>
      <ImageSlider />
      <div className='flex'>
        <div>
          <BlogTile image={img3} title='Vader' />
          <BlogTile image={img3} title='Vader' />
          <BlogTile image={img3} title='Vader' />
          <BlogTile image={img3} title='Vader' />
          <BlogTile image={img3} title='Vader' />
          <BlogTile image={img3} title='Vader' />
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default Page
