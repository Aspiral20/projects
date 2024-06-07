"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogAreaThree = () => {
  return (
    <>
      <section className="blog-area-1 space position-relative">
        <div className="blog-shape-img1 shape-mockup d-lg-block d-none">
          <img
            className="about1-shape-img-1 spin"
            src="assets/img/normal/about_shape1-2.svg"
            alt="fixturbo_img"
          />
          <img
            className="about1-shape-img-2 spin2"
            src="assets/img/normal/about_shape1-1.svg"
            alt="fixturbo_img"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="title-area text-center">
                <span className="sub-title">الإخبارية للحصول</span>
                <h2 className="sec-title">
                  الإخبارية للحصول الإخبارية لدينا للحصول
                </h2>
              </div>
            </div>
          </div>
          <div className="row global-carousel blog-slider slider-shadow">
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={2}
              slidesPerGroup={1}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
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
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_s1_3.png"
                        alt="fixturbo_img"
                      />
                      <div className="blog-date">
                        <Link href="/blog">
                          <span>17</span>Feb
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link href="/blog">
                          <i className="fas fa-user" />
                          لدينا للحصول
                        </Link>
                        <Link href="/blog">
                          <i className="fas fa-comments" />
                          (05) للحصول
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link href="/blog-details">
                          النشرة الإخبارية لدينا النشرة الإخبارية لدينا
                        </Link>
                      </h3>
                      <Link className="btn style-border3" href="/blog-details">
                        اشترك في <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_s1_1.png"
                        alt="fixturbo_img"
                      />
                      <div className="blog-date">
                        <Link href="/blog">
                          <span>17</span>Feb
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link href="/blog">
                          <i className="fas fa-user" />
                          لدينا للحصول
                        </Link>
                        <Link href="/blog">
                          <i className="fas fa-comments" />
                          (05) للحصول
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link href="/blog-details">
                          النشرة الإخبارية لدينا النشرة الإخبارية لدينا
                        </Link>
                      </h3>
                      <Link className="btn style-border3" href="/blog-details">
                        اشترك في <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_s1_3.png"
                        alt="fixturbo_img"
                      />
                      <div className="blog-date">
                        <Link href="/blog">
                          <span>17</span>Feb
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link href="/blog">
                          <i className="fas fa-user" />
                          لدينا للحصول
                        </Link>
                        <Link href="/blog">
                          <i className="fas fa-comments" />
                          (05) للحصول
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link href="/blog-details">
                          النشرة الإخبارية لدينا النشرة الإخبارية لدينا
                        </Link>
                      </h3>
                      <Link className="btn style-border3" href="/blog-details">
                        اشترك في <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_s1_1.png"
                        alt="fixturbo_img"
                      />
                      <div className="blog-date">
                        <Link href="/blog">
                          <span>17</span>Feb
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link href="/blog">
                          <i className="fas fa-user" />
                          لدينا للحصول
                        </Link>
                        <Link href="/blog">
                          <i className="fas fa-comments" />
                          (05) للحصول
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link href="/blog-details">
                          النشرة الإخبارية لدينا النشرة الإخبارية لدينا
                        </Link>
                      </h3>
                      <Link className="btn style-border3" href="/blog-details">
                        اشترك في <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaThree;
