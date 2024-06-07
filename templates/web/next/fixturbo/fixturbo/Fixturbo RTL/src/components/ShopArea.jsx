'use client'
import React, { useState } from "react";
import Slider from "rc-slider";
import Link from "next/link";

const ShopArea = () => {
  const [range, setRange] = useState([0, 100]);

  const handleRangeChange = (value) => {
    setRange(value);
  };
  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-9 col-lg-8">
            <div className="shop-sort-bar">
              <div className="row justify-content-between align-items-center">
                <div className="col-md">
                  <p className="woocommerce-result-count">
                    عرض 1–15 من أصل 52 نتيجة
                  </p>
                </div>
                <div className="col-md-auto">
                  <form className="woocommerce-ordering" method="get">
                    <div className="form-group mb-0">
                      <select
                        name="orderby"
                        className="single-select orderby rtl"
                        aria-label="Shop order"
                        defaultValue={"Choose"}
                      >
                        <option value="Choose">الفرز الافتراضى</option>
                        <option value="popularity">الترتيب حسب الشعبية</option>
                        <option value="rating">
                          الترتيب حسب متوسط التقييم
                        </option>
                        <option value="date">الترتيب حسب الأحدث</option>
                        <option value="price">
                          الترتيب حسب السعر: من الأقل إلى الأعلى
                        </option>
                        <option value="price-desc">
                          الترتيب حسب السعر: من الأعلى إلى الأقل
                        </option>
                      </select>
                      <i className="fas fa-angle-down" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-xl-4 col-md-6">
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
              <div className="col-xl-4 col-md-6">
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
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-3.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">محرك ممسحة الزجاج الأمامي</Link>
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
              <div className="col-xl-4 col-md-6">
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
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-5.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">محرك ممسحة الزجاج الأمامي</Link>
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
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-6.png"
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
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-7.png"
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
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-8.png"
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
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-9.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">محرك ممسحة الزجاج الأمامي</Link>
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
            </div>
            <div className="pagination justify-content-center mt-70">
              <ul>
                <li>
                  <Link href="/blog">1</Link>
                </li>
                <li>
                  <Link href="/blog">2</Link>
                </li>
                <li>
                  <Link href="/blog">3</Link>
                </li>
                <li>
                  <Link href="/blog">
                    <i className="fas fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 sidebar-widget-area">
            <aside className="sidebar-sticky-area sidebar-area sidebar-shop">
              <div className="widget widget_search">
                <h3 className="widget_title">يبحث</h3>
                <form className="search-form">
                  <input type="text" placeholder="ابحث عن منتجك" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_categories  ">
                <h3 className="widget_title">فئات المنتجات</h3>
                <ul className="rtl">
                  <li className="rtl">
                    <Link href="/service-details">المقود</Link>
                    <span>(12)</span>
                  </li>
                  <li className="rtl">
                    <Link href="/service-details">تعليق الربيع</Link>{" "}
                    <span>(12)</span>
                  </li>
                  <li className="rtl">
                    <Link href="/service-details">الضوء الخلفي</Link>
                    <span>(08)</span>
                  </li>
                  <li className="rtl">
                    <Link href="/service-details">الانتقال</Link>
                    <span>(13)</span>
                  </li>
                  <li className="rtl">
                    <Link href="/service-details">محرك ممسحة الزجاج الأمامي</Link>
                    <span>(03)</span>
                  </li>
                  <li className="rtl">
                    <Link href="/service-details">حاقن الوقود</Link>
                    <span>(03)</span>
                  </li>
                  <li className="rtl">
                    <Link href="/service-details">ابحث عن منتجك</Link>
                    <span>(03)</span>
                  </li>
                </ul>
              </div>
              <div className="widget widget_price_filter  ">
                <h4 className="widget_title">تصفية حسب السعر</h4>
                <div style={{ width: "220px", margin: "20px" }}>
                  <Slider
                    range
                    min={0}
                    max={600}
                    defaultValue={[0, 100]}
                    value={range}
                    onChange={handleRangeChange}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  ></div>
                </div>
                <div className="price_slider_wrapper">
                  <div className="price_slider" />
                  <div className="price_label">
                    سعر: <span className="from">${range[0]}</span> —{" "}
                    <span className="to">${range[1]}</span>
                    <button type="submit" className="button btn">
                      منقي
                    </button>
                  </div>
                </div>
              </div>
              <div className="widget product_ratting_widget">
                <h3 className="widget_title">الترتيب حسب التقييم</h3>
                <ul>
                  <li>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star unavailable" />
                    </span>
                    <span>(12)</span>
                  </li>
                  <li>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star unavailable" />
                      <i className="fas fa-star unavailable" />
                    </span>
                    <span>(5)</span>
                  </li>
                  <li>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star unavailable" />
                      <i className="fas fa-star unavailable" />
                      <i className="fas fa-star unavailable" />
                    </span>
                    <span>(3)</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
