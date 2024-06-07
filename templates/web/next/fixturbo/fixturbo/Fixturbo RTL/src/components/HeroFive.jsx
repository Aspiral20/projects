'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";
import Link from "next/link";
const HeroFive = () => {
  return (
    <div className="hero-wrapper hero-5">
      <div className="hero-3-slider global-carousel">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/hero/hero_bg_3_1.png)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style2">
                      <h1 className="hero-title text-white">
                        شترك في اشترك في النشرة التحديثات
                      </h1>
                      <p className="hero-text text-white">
                        شترك في اشترك في النشرة الإخبارية لدينا للحصول على
                        التحديثات اشترك في اشترك في النشرة الإخبارية لدينا
                        للحصول على التحديثات اشترك في اشترك في النشرة الإخبارية
                        لدينا للحصول على التحديثات
                      </p>
                      <div className="btn-group">
                        <Link href="/about" className="btn">
                          اشترك في اشترك في
                        </Link>
                        <Link href="/service" className="btn style-border">
                          لدينا للحصول
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-end">
                    <div className="hero-thumb text-lg-center">
                      <img
                        src="assets/img/testimonial/testimonial-1-2.png"
                        alt="fixturbo_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url(assets/img/hero/hero_bg_3_1.png)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-5 col-lg-6">
                    <div className="hero-style2">
                      <h1 className="hero-title text-white">
                        لدينا للحصوللدينا للحصوللدينا
                      </h1>
                      <p className="hero-text text-white">
                        شترك في اشترك في النشرة الإخبارية لدينا للحصول على
                        التحديثات اشترك في اشترك في النشرة الإخبارية لدينا
                        للحصول على التحديثات اشترك في اشترك في النشرة الإخبارية
                        لدينا للحصول على التحديثات
                      </p>
                      <div className="btn-group">
                        <Link href="/about" className="btn">
                          اشترك في اشترك في
                        </Link>
                        <Link href="/service" className="btn style-border">
                          لدينا للحصول
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 align-self-end">
                    <div className="hero-thumb text-lg-center">
                      <img
                        src="assets/img/testimonial/testimonial-1-1.png"
                        alt="fixturbo_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroFive;
