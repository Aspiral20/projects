"use client"
import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu }) => {
    return (
        <>
            <ul>
                <li className='dropdown-on'>
                    <Link href="#" onClick={toggleSubMenu} scroll={false}>Home <i className="fas fa-chevron-down"></i></Link>
                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li><Link href="/">Home One</Link></li>
                            <li><Link href="/home2">Home Two</Link></li>
                            <li><Link href="/home3">Home Three</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li className='dropdown-on'>
                    <Link href="#" onClick={toggleSubMenu} scroll={false}>Pages <i className="fas fa-chevron-down"></i></Link>
                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/project-details/1">Project Details</Link></li>
                            <li><Link href="/teams">Teams</Link></li>
                            <li><Link href="/team-details/1">Team Details</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='dropdown-on'>
                    <Link href="#" onClick={toggleSubMenu} scroll={false}> Service <i className="fas fa-chevron-down"></i></Link>
                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/service-details/1">Service Details</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='dropdown-on'>
                    <Link href="#" onClick={toggleSubMenu} scroll={false}>Blog <i className="fas fa-chevron-down"></i></Link>
                    <div className="sub-menu">
                        <ul className='dropdown-menu-content'>
                            <li><Link href="/blog-grid">Blog Grid</Link></li>
                            <li><Link href="/blog-standard">Blog Standard</Link></li>
                            <li><Link href="/blog-details/1">Blog Details</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;