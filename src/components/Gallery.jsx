// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/gallery.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const images = [
    'https://res.cloudinary.com/dvvtskcux/image/upload/v1723927660/casaasada/1-1.png', 'https://res.cloudinary.com/dvvtskcux/image/upload/v1723927670/casaasada/1-2.png', 'https://res.cloudinary.com/dvvtskcux/image/upload/v1723927681/casaasada/1-3.png', 'https://res.cloudinary.com/dvvtskcux/image/upload/v1723927684/casaasada/1-4.png'
]
export default function Gallery({ property }) {
    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper">
            {
                property.images.map((image, i) => (
                    <SwiperSlide key={i}>
                        <img className="w-[920px] h-[420px] rounded-md object-cover" src={image} alt={property.name} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
