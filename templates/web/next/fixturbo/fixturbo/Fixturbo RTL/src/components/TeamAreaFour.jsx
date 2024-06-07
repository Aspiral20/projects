'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";
import Link from "next/link";
const TeamAreaFour = () => {
  return (
    <div className="team-area-2 space">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">للحصول على</span>
              <h2 className="sec-title">التحديثاتلدينا للحصول على التحديثا</h2>
              <p className="sec-text mb-lg-5 mb-4">
                لتحديثاتلدينا للحصول على التحديثاتلدينا للحصول التحديثاتلدينا
                للحصول على التحديثاتلدينا للحصول التحديثاتلدينا للحصول على
                التحديثاتلدينا للحصول
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-30 global-carousel team-slider2">
          <Swiper
            navigation={{
              nextEl: ".team-slider2-next",
              prevEl: ".team-slider2-prev",
            }}
            spaceBetween={20}
            slidesPerGroup={1}
            speed={1000}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
            modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <div className="team-card style3">
                  <div className="team-card_img">
                    <img
                      src="assets/img/team/team-1-1.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="team-card_content">
                    <h4 className="team-card_title">
                      <Link href="/team-details">النشرة لدينا</Link>
                    </h4>
                    <span className="team-card_desig">النشرة الإخبارية</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="team-card style3">
                  <div className="team-card_img">
                    <img
                      src="assets/img/team/team-1-3.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="team-card_content">
                    <h4 className="team-card_title">
                      <Link href="/team-details">النشرة لدينا</Link>
                    </h4>
                    <span className="team-card_desig">النشرة الإخبارية</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="team-card style3">
                  <div className="team-card_img">
                    <img
                      src="assets/img/team/team-1-1.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="team-card_content">
                    <h4 className="team-card_title">
                      <Link href="/team-details">النشرة لدينا</Link>
                    </h4>
                    <span className="team-card_desig">النشرة الإخبارية</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="team-card style3">
                  <div className="team-card_img">
                    <img
                      src="assets/img/team/team-1-3.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="team-card_content">
                    <h4 className="team-card_title">
                      <Link href="/team-details">النشرة لدينا</Link>
                    </h4>
                    <span className="team-card_desig">النشرة الإخبارية</span>
                    <div className="team-social_wrap">
                      <div className="social-btn style2">
                        <Link href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TeamAreaFour;
