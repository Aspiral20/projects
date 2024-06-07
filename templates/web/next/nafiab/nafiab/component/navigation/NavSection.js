import Link from 'next/link'
import React from 'react'

const NavSection = ({nav}) => {
  return (
    <nav className={nav}>
        <ul>
            <li>
                <Link href="/">Home</Link>
                <ul className="submenu index-1-submenu">
                    <li><Link href="/">Home 01</Link></li>
                    <li><Link href="homePage2">Home 02</Link></li>
                </ul>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
                <ul className="submenu index-1-submenu">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/blogDetails">Blog Details</Link></li>
                </ul>
            </li>
            <li>
                <Link href="#0">Pages</Link>
                <ul className="submenu index-1-submenu">
                    <li><Link href="/404">Error</Link></li>
                    <li><Link href="/faq">Faq</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/cart">Cart</Link></li>
                    <li><Link href="/service">Service</Link></li>
                    <li><Link href="/serviceDetails">Service Details</Link></li>
                    <li><Link href="/team">Team</Link></li>
                    <li><Link href="/teamDetails">Team Details</Link></li>
                </ul>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavSection