import React, { useContext } from 'react'
import NavSection from '../navigation/NavSection'
import Link from 'next/link'
import { NafiabContext } from '@/context/NafiabContext'

const HeaderArea2 = () => {
    const {handleSearchShow,handleSidebarOpen, handleCartOpen, cartItems} = useContext(NafiabContext)
  return (
    <header className="header-area header-1">
        <div className="ba-header-top-area bg-theme">
        <div className="container">
            <div className="ba-header-top-content">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <a href="https://goo.gl/maps/qo6NG3ZXbN6bbev69" className="ba-header-top-list">
                        <i className="fal fa-location"></i>
                        <span>1901 Thornridge Cir. Shiloh, Hawaii 81063</span>
                    </a>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="text-center text-md-end ba-header-top-right">
                        <a href="tel:98(000)-96302" className="ba-header-top-list">
                            <i className="fal fa-phone-alt"></i>
                            <span>+98(000)-96302</span>
                        </a>
                        <a href="mailto:info125@gmail.com" className="ba-header-top-list">
                            <i className="fal fa-envelope"></i>
                            <span>info125@gmail.com</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="ba-header-nav-area">
        <div className="container style-2">
            <div className="ba-header-nav-inner">
                <div className="row align-items-center">
                    <div className="col-xxl-4 col-6 col-xl-4 col-lg-3 col-md-6">
                    <div className="ba-header-logo">
                        <Link href="/">
                            <img src="assets/img/logo/logo.png" alt=""/>
                        </Link>
                    </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-9 d-none d-lg-block">
                    <div className="ba-header-nav-wrapper text-end">
                        <NavSection nav={"ba-header-nav-menu"}/>
                        <div className="ba-header-right-actions pl-50">
                            <button className="ba-header-right-link ba-header-search-btn" onClick={handleSearchShow}><i className="fal fa-search"></i></button>
                            <button className="ba-header-right-link btn-index-1--cart" onClick={handleCartOpen}>
                                <i className="fal fa-shopping-bag"></i>

                                <span className="index-2-cart-number-popup">
                                    <span>{cartItems.length}</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6 col-6 d-lg-none">
                    <div className="ba-header-right-actions text-end d-block">
                        <div className="d-none d-md-inline-flex mobile-header-btn-section-2">
                            <button className="ba-header-right-link ba-header-search-btn" onClick={handleSearchShow}><i className="fal fa-search"></i></button>
                            <button className="ba-header-right-link btn-index-1--cart" onClick={handleCartOpen}>
                                <i className="fal fa-shopping-bag"></i>

                                <span className="index-2-cart-number-popup">
                                    <span>{cartItems.length}</span>
                                </span>
                            </button>
                        </div>
                        <button className="ba-header-right-link ba-header-sidebar-action" onClick={handleSidebarOpen}><i className="fal fa-bars"></i></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </header>
  )
}

export default HeaderArea2