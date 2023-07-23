import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function PromotionSection() {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="promotion-section">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* Coloque aqui as imagens das promoções */}
          <div className="swiper-slide">
            <img src="imagem_promocao_1.jpg" alt="Promoção 1" />
          </div>
          <div className="swiper-slide">
            <img src="imagem_promocao_2.jpg" alt="Promoção 2" />
          </div>
          <div className="swiper-slide">
            <img src="imagem_promocao_3.jpg" alt="Promoção 3" />
          </div>
          {/* Adicione mais imagens das promoções conforme necessário */}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};
