import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './styles.css';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import SwiperCore from 'swiper';
import api from '../../../services/api';
import { useParams } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Thumbs]);

export default function ProductPage() {
    const { id } = useParams();

    const thumbsSwiper = React.useRef(null);

    const [product, setProduct] = useState([]);
    const [updateData, setUpdateData] = useState(true);


    useEffect(() => {
        if (updateData) {
            api.get(`/product/${id}`)
                .then(response => {
                    setProduct(response.data);
                    console.log(response.data);
                });
            setUpdateData(false);
        }
    }, [updateData]);

    return (
        <div className="product-page">
            {product && (
                <div className="product-gallery">
                    <Swiper
                        spaceBetween={10}
                        navigation
                        thumbs={{ swiper: thumbsSwiper.current }}
                        className="product-swiper"
                    >
                        {product.imagesURLs && product.imagesURLs.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Product ${index}`}
                                    className="product-image"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={swiper => (thumbsSwiper.current = swiper)}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesVisibility
                        watchSlidesProgress
                        className="product-thumbs"
                    >
                        {product.imagesURLs && product.imagesURLs.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Product ${index}`}
                                    className="product-thumb-image"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
            <div className="product-details">
                {product && (
                    <>
                        <h2 className="product-title">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <div className="product-price">R$ {product.price}</div>
                        <button className="product-buy-button">Comprar</button>
                    </>
                )}
            </div>
        </div>
    );
};