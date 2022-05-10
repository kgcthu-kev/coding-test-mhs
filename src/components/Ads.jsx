import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import ad1 from '../icons/WebBannerAndAD/AD/Asset1.png'
import ad2 from '../icons/WebBannerAndAD/AD/Asset2.png'
import ad3 from '../icons/WebBannerAndAD/AD/Asset3.png'

function Ads() {
  return (
    <div className='max-w-4xl mx-auto flex items-center justify-center'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <img src={ad1} alt='' className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ad2} alt='' className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ad3} alt='' className='w-full' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Ads
