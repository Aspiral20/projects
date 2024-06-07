"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <header className="nav-header header-layout2">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-logo">
                <Link href="/">
                  <img src="assets/img/logo.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-grid-info">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-clock" />
                    </div>
                    <div className="header-grid-info-details">
                      <p>الأحد - الجمعة :</p>
                      <h6>9 صباحًا - 8 مساءً</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="header-grid-info-details">
                      <p>6391 شارع إلجين، سيلينا، ديلاوير</p>
                      <h6>كنتاكي </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sticky-wrapper ${scroll && "sticky"}`}>
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto header-navbar-logo">
                <div className="header-logo">
                  <Link href="/">
                    <img src="assets/img/logo-white.svg" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="menu-item-has-children">
                      <Link href="#">بيت</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/">الصفحة الرئيسية 01</Link>
                        </li>
                        <li>
                          <Link href="/home-2">الصفحة الرئيسية 02</Link>
                        </li>
                        <li>
                          <Link href="/home-3">الصفحة الرئيسية 03</Link>
                        </li>
                        <li>
                          <Link href="/home-4">الصفحة الرئيسية 04</Link>
                        </li>
                        <li>
                          <Link href="/home-5">الصفحة الرئيسية 05</Link>
                        </li>
                        <li>
                          <Link href="/home-6">الصفحة الرئيسية 06</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/about">عن</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">الصفحات</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/team">فريق</Link>
                        </li>
                        <li>
                          <Link href="/team-details">تفاصيل الفريق</Link>
                        </li>
                        <li>
                          <Link href="/shop">محل</Link>
                        </li>
                        <li>
                          <Link href="/shop-details">تفاصيل المتجر</Link>
                        </li>
                        <li>
                          <Link href="/cart">عربة التسوق</Link>
                        </li>
                        <li>
                          <Link href="/checkout">الدفع</Link>
                        </li>
                        <li>
                          <Link href="/wishlist">قائمة الرغبات</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">المشاريع</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/project">مشروع</Link>
                        </li>
                        <li>
                          <Link href="/project-details">تفاصيل المشروع</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">خدمات</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/service">خدمة</Link>
                        </li>
                        <li>
                          <Link href="/service-details">تفاصيل الخدمة</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">مدونة</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/blog">مدونة</Link>
                        </li>
                        <li>
                          <Link href="/blog-details">تفاصيل المدونة</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">اتصال</Link>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto d-xl-block d-none">
                <div className="social-links">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper rtl  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/img/logo.svg" alt="Fixturbo" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">بيت</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/">الصفحة الرئيسية 01</Link>
                    </li>
                    <li>
                      <Link href="/home-2">الصفحة الرئيسية 02</Link>
                    </li>
                    <li>
                      <Link href="/home-3">الصفحة الرئيسية 03</Link>
                    </li>
                    <li>
                      <Link href="/home-4">الصفحة الرئيسية 04</Link>
                    </li>
                    <li>
                      <Link href="/home-5">الصفحة الرئيسية 05</Link>
                    </li>
                    <li>
                      <Link href="/home-6">الصفحة الرئيسية 06</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/about">عن</Link>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">الصفحات</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/team">فريق</Link>
                    </li>
                    <li>
                      <Link href="/team-details">تفاصيل الفريق</Link>
                    </li>
                    <li>
                      <Link href="/shop">محل </Link>
                    </li>
                    <li>
                      <Link href="/shop-details">تفاصيل المتجر</Link>
                    </li>
                    <li>
                      <Link href="/cart">عربة التسوق</Link>
                    </li>
                    <li>
                      <Link href="/checkout">الدفع</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">قائمة الرغبات</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">المشاريع</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/project">مشروع</Link>
                    </li>
                    <li>
                      <Link href="/project-details">تفاصيل المشروع</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">خدمة</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/service">خدمة</Link>
                    </li>
                    <li>
                      <Link href="/service-details">تفاصيل الخدمة</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">محل</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/shop">محل</Link>
                    </li>
                    <li>
                      <Link href="/shop-details">تفاصيل المتجر</Link>
                    </li>
                    <li>
                      <Link href="/cart">عربة التسوق</Link>
                    </li>
                    <li>
                      <Link href="/checkout">الدفع</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">قائمة الرغبات</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">مدونة</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/blog">مدونة</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">تفاصيل المدونة</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">اتصال</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
