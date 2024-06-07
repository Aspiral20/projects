"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import Link from "next/link";

const TeamAreaTwo = () => {
  return (
    <div className="team-area-2 space">
      <div className="container">
        <div className="row gx-30 justify-content-between align-items-center">
          <div className="col-lg-4">
            <div className="title-area mb-lg-0">
              <span className="sub-title">أعضاء الفريق</span>
              <h2 className="sec-title">إصلاح السيارات أفضل الخدمات</h2>
              <p className="sec-text mb-lg-5 mb-4">
                إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في سيارتك.
                يتضمن تشخيص المشكلة أو إصلاحها أو استبدالها
              </p>
              <div className="icon-box">
                <button
                  data-slick-prev=".team-slider2"
                  className="team-slider2 slick-arrow style2 default team-slider2-prev"
                >
                  <i className="fas fa-arrow-right" />
                </button>
                <button
                  data-slick-next=".team-slider2"
                  className="slick-arrow style2 default team-slider2-next"
                >
                  <i className="fas fa-arrow-left" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row gx-30 global-carousel team-slider2">
              <Swiper
                loop={true}
                navigation={{
                  nextEl: ".team-slider2-next",
                  prevEl: ".team-slider2-prev",
                }}
                spaceBetween={20}
                slidesPerView={2}
                slidesPerGroup={1}
                speed={1000}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                className="mySwiper"
                modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                  1400: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img
                        src="assets/img/team/team-1-1.png"
                        alt="fixturbo_img"
                      />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <Link href="/team-details">داريل ستيوارد</Link>
                      </h4>
                      <span className="team-card_desig">مطور برامج</span>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img
                        src="assets/img/team/team-1-3.png"
                        alt="fixturbo_img"
                      />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <Link href="/team-details">ويد وارن</Link>
                      </h4>
                      <span className="team-card_desig">
                        مهندس معماري يو اكس
                      </span>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img
                        src="assets/img/team/team-1-1.png"
                        alt="fixturbo_img"
                      />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <Link href="/team-details">داريل ستيوارد</Link>
                      </h4>
                      <span className="team-card_desig">مطور برامج</span>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="team-card style2">
                    <div className="team-card_img">
                      <img
                        src="assets/img/team/team-1-3.png"
                        alt="fixturbo_img"
                      />
                    </div>
                    <div className="team-card_content">
                      <h4 className="team-card_title">
                        <Link href="/team-details">ويد وارن</Link>
                      </h4>
                      <span className="team-card_desig">
                        مهندس معماري يو اكس
                      </span>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAreaTwo;
