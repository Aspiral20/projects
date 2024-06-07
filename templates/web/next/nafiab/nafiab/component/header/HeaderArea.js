import React, { useContext } from 'react'
import NavSection from '../navigation/NavSection'
import { NafiabContext } from '@/context/NafiabContext'
import Link from 'next/link'

const HeaderArea = () => {
    const {handleSearchShow,  handleSidebarOpen, handleCartOpen, cartItems} = useContext(NafiabContext)
  return (
    <header className="header-area header-1">
        <div className="ba-header-nav-area">
            <div className="style-2">
                <div className="ba-header-nav-inner header-bottom">
                    <div className="row align-items-center">

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                            <div className="ba-header-logo">
                                <Link href="/">
                                    <img src="assets/img/logo/logo-3.png" alt="logo"/>
                                </Link>
                            </div>
                        </div>

                        <div className="col-xxl-9 col-xl-9 col-lg-9 d-none d-lg-block">
                            <div className="ba-header-nav-wrapper text-end">
                                <NavSection nav={"ba-header-nav-menu header-bottom__nav"}/> 
                                <div className="ba-header-right-actions index-1-header-btns pl-50">
                                    <button className="ba-header-right-link btn-index-1 ba-header-search-btn" onClick={handleSearchShow}>
                                        <i className="fal fa-search"></i>
                                    </button>

                                    <button className="ba-header-right-link btn-index-1 btn-index-1--cart" onClick={handleCartOpen}>
                                        <i className="fal fa-shopping-bag"></i>

                                        <span className="index-1-cart-number-popup">
                                            <span>{cartItems.length}</span>
                                        </span>
                                    </button>

                                    <Link href='/contact' className="ba-header-right-link btn-index-1"><i className="fal fa-user"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-6 d-lg-none">
                            <div className="ba-header-right-actions index-1-header-btns mobile-header-index">
                                <div className="d-none d-md-inline-flex mobile-header-btn-section">
                                    <button className="ba-header-right-link btn-index-1 ba-header-search-btn" onClick={handleSidebarOpen}>
                                        <i className="fal fa-search"></i>
                                    </button>

                                    <button className="ba-header-right-link btn-index-1 btn-index-1--cart" onClick={handleCartOpen}>
                                        <i className="fal fa-shopping-bag"></i>

                                        <span className="index-1-cart-number-popup">
                                            <span>{cartItems.length}</span>
                                        </span>
                                    </button>

                                    <Link href='/contact' className="ba-header-right-link btn-index-1"><i className="fal fa-user"></i>
                                    </Link>
                                </div>

                                <button className="ba-header-right-link btn-index-1 ba-header-sidebar-action" onClick={ handleSidebarOpen}>
                                    <i className="fal fa-bars"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default HeaderArea