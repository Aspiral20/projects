'use client'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const ShopDetails = () => {
  return (
    <section className="product-details space-top">
      <div className="container">
        <div className="row gx-80">
          <div className="col-lg-6">
            <div className="product-thumb">
              <div className="img">
                <img
                  src="assets/img/update-img/product/product-inner.png"
                  alt="fixturbo_img"
                />
              </div>
              <div className="product-tag">أُوكَازيُون</div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="product-about">
              <p className="price">
                $25 <del>$30</del>
              </p>
              <h2 className="product-title">مكابس المحرك والترس</h2>
              <div className="product-rating">
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star unavailable" />
                </span>
                (5 Reviews)
              </div>
              <p className="text">
                متجر السيارات هو المكان الذي يمكنك العثور فيه على مجموعة واسعة
                من السيارات الخدمات والمنتجات المتعلقة بالسيارات. من المركبة
                إصلاح وصيانة كماليات وقطع غيار السيارات، محل سيارات يقدم كل ما
                تحتاجه لكيا السيارة
              </p>
              <button className="btn style2">اشتر الآن</button>
              <div className="product_meta">
                <span className="sku_wrapper">
                  SKU: <span className="sku">عجلة تناسب تشيفي كامارو</span>
                </span>
                <span className="posted_in">
                  فئة:
                  <Link href="/shop" rel="tag">
                    الإطارات وأمبير. عجلات
                  </Link>
                </span>
                <span>
                  Tags: <Link href="/shop">قطع غيار السيارات</Link>
                  <Link href="/shop">عجلات</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tab-area">
          <ul className="nav product-tab-style1" id="productTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="description-tab"
                data-bs-toggle="tab"
                href="#description"
                role="tab"
                aria-controls="description"
                aria-selected="false"
              >
                وصف
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="info-tab"
                data-bs-toggle="tab"
                href="#add_info"
                role="tab"
                aria-controls="add_info"
                aria-selected="false"
              >
                معلومات إضافية
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="reviews-tab"
                data-bs-toggle="tab"
                href="#reviews"
                role="tab"
                aria-controls="reviews"
                aria-selected="true"
              >
                تعليقات (03)
              </a>
            </li>
          </ul>
          <div className="tab-content" id="productTabContent">
            <div
              className="tab-pane fade show active"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <p>
                تفاوض بمصداقية على المواد الناشئة أثناء النقرات وقذائف الهاون
                رأس المال الفكري. السبورة البيضاء مقنعة تتمحور حول العميل
                المصادر قبل المخططات عبر الأنظمة الأساسية. تطوير بشكل مميز
                الاستعانة بمصادر خارجية مستقبلية بدون بوابات تعتمد على الوسائط
                المتعددة. التنسيق التدريجي لبنيات الجيل التالي لـ الحلول
                التعاونية. استعادة مهنيا ناقلات الجودة المتوافقة مع الإصدارات
                السابقة قبل توجيه العميل المقاييس. استعادة سليمة من الناحية
                الفنية الداخلية أو المصادر "العضوية" قبل رأس المال البشري الذي
                يركز على العميل تطغى على المشاركة الذهنية الشاملة للابتكار
                المحتمل.
              </p>
              <p className="mb-n1">
                استهدف بسهولة البنى التحتية التي تم اختبارها بالكامل أثناء
                تواجدك للتو تحسينات عملية الوقت. استغلال الفريق ديناميكيًا وظائف
                مقابل الربط الكلي العالمي redible توليف التكنولوجيا في الوقت
                المناسب بدلا من المصدر المفتوح مجالات المواضيع الاستراتيجية.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="add_info"
              role="tabpanel"
              aria-labelledby="add_info"
            >
              <table className="woocommerce-table">
                <tbody>
                  <tr>
                    <th>ماركة</th>
                    <td>جاكونا</td>
                  </tr>
                  <tr>
                    <th>لون</th>
                    <td>أصفر</td>
                  </tr>
                  <tr>
                    <th>وزن</th>
                    <td>400 جم</td>
                  </tr>
                  <tr>
                    <th>بطارية</th>
                    <td>الليثيوم</td>
                  </tr>
                  <tr>
                    <th>مادة</th>
                    <td>خشب</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div className="comments-wrap mt-0">
                <ul className="comment-list">
                  <li className="comment-item">
                    <div className="post-comment">
                      <div className="comment-avater rtl">
                        <img
                          src="assets/img/team/team-1-1.png"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <span className="commented-on rtl ">
                          <i className="fas fa-calendar-alt" />
                          15 يونيو 2023
                        </span>
                        <h3 className="name">Daniel Adam</h3>
                        <p className="text">
                          تمكين التجارة الإلكترونية متعددة الوظائف بشكل تعاوني
                          التطبيقات المرتقبة. إنتاجية بسلاسة أسواق التوصيل
                          والتشغيل في حين أن السيناريوهات التآزرية. التجارة
                          الإلكترونية للتطبيقات المستقبلية. بسلاسة إنتاج أسواق
                          التوصيل والتشغيل مع التآزر سيناريوهات
                        </p>
                        <div className="reply_and_edit  rtl">
                          <Link href="/blog-details" className="reply-btn">
                            رد <i className="fas fa-reply" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="comment-item">
                        <div className="post-comment">
                          <div className="comment-avater rtl">
                            <img
                              src="assets/img/team/team-1-2.png"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <span className="commented-on rtl">
                              <i className="fas fa-calendar-alt" />
                              15 يونيو 2023
                            </span>
                            <h3 className="name">Zenelia Lozhe</h3>
                            <p className="text">
                              تمكين التجارة الإلكترونية متعددة الوظائف بشكل
                              تعاوني للتطبيق المحتمل إنتاجية بلا حدود
                            </p>
                            <div className="reply_and_edit rtl">
                              <Link href="/blog-details" className="reply-btn">
                                رد <i className="fas fa-reply" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="comment-item">
                    <div className="post-comment">
                      <div className="comment-avater rtl">
                        <img
                          src="assets/img/team/team-1-3.png"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <span className="commented-on rtl">
                          <i className="fas fa-calendar-alt" />
                          15 يونيو 2023
                        </span>
                        <h3 className="name">John Smith</h3>
                        <p className="text">
                          تمكين التجارة الإلكترونية متعددة الوظائف بشكل تعاوني
                          التطبيقات المرتقبة. إنتاجية بسلاسة أسواق التوصيل
                          والتشغيل في حين أن السيناريوهات التآزرية.
                        </p>
                        <div className="reply_and_edit rtl">
                          <Link href="/blog-details" className="reply-btn">
                            رد <i className="fas fa-reply" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* Comment end */}
              {/* Comment Form */}
              <div className="comment-form bg-smoke2">
                <div className="form-title">
                  <h3 className="blog-inner-title"> ترك رد</h3>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="اسمك"
                      className="form-control style-white"
                    />
                    <i className="far fa-user" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      placeholder="عنوان البريد الإلكتروني"
                      className="form-control style-white"
                    />
                    <i className="far fa-envelope" />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="اكتب رسالتك"
                      className="form-control style-white"
                      defaultValue={""}
                    />
                    <i className="far fa-pencil" />
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="btn style2">إقتبس</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==============================
        Related Product  
        ==============================*/}
        <div className="space-extra-top space-bottom">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <div className="title-area">
                <h2 className="sec-title">منتجات ذات صله.</h2>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="sec-btn mb-40">
                <Link href="/shop" className="btn style-border2">
                  شاهد المزيد
                </Link>
              </div>
            </div>
          </div>
          <div className="row global-carousel" id="productCarousel">
            <Swiper
              loop={true}
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
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <div>
                  <div className="product-card style2">
                    <div className="product-img">
                      <img
                        src="assets/img/update-img/product/1-1.png"
                        alt="fixturbo_img"
                      />
                    </div>
                    <div className="product-content">
                      <h3 className="product-title">
                        <Link href="/shop-details">مكابس المحرك والترس</Link>
                      </h3>
                      <span className="star-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </span>
                      <span className="price">
                        <del>$30</del> $25
                      </span>
                      <Link href="#" className="link-btn">
                        أضف إلى السلة <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="product-card style2">
                    <div className="product-img">
                      <img
                        src="assets/img/update-img/product/1-2.png"
                        alt="fixturbo_img"
                      />
                    </div>
                    <div className="product-content">
                      <h3 className="product-title">
                        <Link href="/shop-details">العادم</Link>
                      </h3>
                      <span className="star-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </span>
                      <span className="price">
                        <del>$30</del> $25
                      </span>
                      <Link href="#" className="link-btn">
                        أضف إلى السلة <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="product-card style2">
                    <div className="product-img">
                      <img
                        src="assets/img/update-img/product/1-3.png"
                        alt="fixturbo_img"
                      />
                    </div>
                    <div className="product-content">
                      <h3 className="product-title">
                        <Link href="/shop-details">
                          محرك ممسحة الزجاج الأمامي
                        </Link>
                      </h3>
                      <span className="star-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </span>
                      <span className="price">
                        <del>$30</del> $25
                      </span>
                      <Link href="#" className="link-btn">
                        أضف إلى السلة <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="product-card style2">
                    <div className="product-img">
                      <img
                        src="assets/img/update-img/product/1-4.png"
                        alt="fixturbo_img"
                      />
                    </div>
                    <div className="product-content">
                      <h3 className="product-title">
                        <Link href="/shop-details">مضخة التوجيه</Link>
                      </h3>
                      <span className="star-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </span>
                      <span className="price">
                        <del>$30</del> $25
                      </span>
                      <Link href="#" className="link-btn">
                        أضف إلى السلة <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="product-card style2">
                    <div className="product-img">
                      <img
                        src="assets/img/update-img/product/1-5.png"
                        alt="fixturbo_img"
                      />
                    </div>
                    <div className="product-content">
                      <h3 className="product-title">
                        <Link href="/shop-details">
                          محرك ممسحة الزجاج الأمامي
                        </Link>
                      </h3>
                      <span className="star-rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </span>
                      <span className="price">
                        <del>$30</del> $25
                      </span>
                      <Link href="#" className="link-btn">
                        أضف إلى السلة <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
