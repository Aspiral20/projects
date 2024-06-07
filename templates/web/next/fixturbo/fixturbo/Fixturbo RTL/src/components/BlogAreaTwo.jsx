"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogAreaTwo = () => {
  return (
    <section className="blog-area space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">ما هو</span>
              <h2 className="sec-title">ما هو الغرض من خطة العمل؟</h2>
            </div>
          </div>
        </div>
        <div className="row global-carousel blog-slider slider-shadow">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".testimonialOne-button-next",
              prevEl: ".testimonialOne-button-prev",
            }}
            spaceBetween={20}
            slidesPerGroup={1}
            speed={1000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
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
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_1.png" alt="fixturbo_img" />
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
                        العمل؟
                      </Link>
                      <Link href="/blog">
                        <i className="fas fa-comments" />
                        (05) الغرض
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/blog-details">
                        ما هو الغرض من خطة العمل؟
                      </Link>
                    </h3>
                    <Link className="link-btn style3" href="/blog-details">
                      اقرأ أكثر <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_2.png" alt="fixturbo_img" />
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
                        العمل؟
                      </Link>
                      <Link href="/blog">
                        <i className="fas fa-comments" />
                        (05) من خطة؟
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/blog-details">
                        ما هو الغرض من خطة العمل؟
                      </Link>
                    </h3>
                    <Link className="link-btn style3" href="/blog-details">
                      اقرأ أكثر <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_3.png" alt="fixturbo_img" />
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
                        العمل؟
                      </Link>
                      <Link href="/blog">
                        <i className="fas fa-comments" />
                        (05) من خطة؟
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/blog-details">
                        ما هو الغرض من خطة العمل؟
                      </Link>
                    </h3>
                    <Link className="link-btn style3" href="/blog-details">
                      اقرأ أكثر <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_1.png" alt="fixturbo_img" />
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
                        العمل؟
                      </Link>
                      <Link href="/blog">
                        <i className="fas fa-comments" />
                        (05) من خطة؟
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/blog-details">
                        ما هو الغرض من خطة العمل؟
                      </Link>
                    </h3>
                    <Link className="link-btn style3" href="/blog-details">
                      اقرأ أكثر <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_2.png" alt="fixturbo_img" />
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
                        العمل؟
                      </Link>
                      <Link href="/blog">
                        <i className="fas fa-comments" />
                        (05) من خطة؟
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/blog-details">
                        ما هو الغرض من خطة العمل؟
                      </Link>
                    </h3>
                    <Link className="link-btn style3" href="/blog-details">
                      اقرأ أكثر <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_3.png" alt="fixturbo_img" />
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
                        العمل؟
                      </Link>
                      <Link href="/blog">
                        <i className="fas fa-comments" />
                        (05) الغرض
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link href="/blog-details">
                        ما هو الغرض من خطة العمل؟
                      </Link>
                    </h3>
                    <Link className="link-btn style3" href="/blog-details">
                      اقرأ أكثر <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
