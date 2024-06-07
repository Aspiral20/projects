import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
const TestimonialSlider = () => {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize(); // Call it initially

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className="testimonial-slider-container">
        <Swiper 
        slidesPerView={slidesPerView}
        autoplay={{delay:3000}}
        spaceBetween={50}
        modules={[Autoplay]}
        className="swiper mySwiper overflow-hidden"
        >
            <SwiperSlide className="swiper-slide">
            <div className="single-testimonial">
                <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fad fa-star-half"></i>
                </div>

                <p className="single-testimonial__txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Animi eaque voluptate, exercitationem temporibus velit
                tempora quidem totam, corrupti accusamus facilis
                consequuntur qui consequatur pariatur. Ea minima ab et
                quo ad!
                </p>

                <div className="testimonial-writer d-flex">
                <img
                    src="assets/img/user/author-2.png"
                    alt="person"
                    className="testimonial-writer__img"
                />
                <div className="testimonial-writer__info">
                    <h6 className="testimonial-writer__name">
                    Donald H. James
                    </h6>
                    <span className="testimonial-writer__label">
                    Rental Customer
                    </span>
                </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div className="single-testimonial">
                <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                </div>

                <p className="single-testimonial__txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Animi eaque voluptate, exercitationem temporibus velit
                tempora quidem totam, corrupti accusamus facilis
                consequuntur qui consequatur pariatur. Ea minima ab et
                quo ad!
                </p>

                <div className="testimonial-writer d-flex">
                <img
                    src="assets/img/user/user-4.png"
                    alt="person"
                    className=" testimonial-writer__img"
                />
                <div className="testimonial-writer__info">
                    <h6 className="testimonial-writer__name">beth moony</h6>
                    <span className="testimonial-writer__label">
                    customer
                    </span>
                </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div className="single-testimonial">
                <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fad fa-star-half"></i>
                </div>

                <p className="single-testimonial__txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Animi eaque voluptate, exercitationem temporibus velit
                tempora quidem totam, corrupti accusamus facilis
                consequuntur qui consequatur pariatur. Ea minima ab et
                quo ad!
                </p>

                <div className="testimonial-writer d-flex">
                <img
                    src="assets/img/user/user-1.png"
                    alt="person"
                    className="testimonial-writer__img"
                />
                <div className="testimonial-writer__info">
                    <h6 className="testimonial-writer__name">beth moony</h6>
                    <span className="testimonial-writer__label">
                    customer
                    </span>
                </div>
                </div>
            </div>
            </SwiperSlide>
        <div className="swiper-pagination"></div>
        </Swiper>
    </div>
  )
}

export default TestimonialSlider