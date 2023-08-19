import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


export default function PhotosCompany({photos}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='swiper-oldin-photos'>
            <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {photos.map((photo, index) => (
                    <SwiperSlide>
                        <img src={photo} alt={`Foto da empresa ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {photos.map((photo, index) => (
                    <SwiperSlide>
                        <img src={photo} alt={`Foto da empresa ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
        </div>
    );
}
