import React from 'react'
import HeaderArea2 from '../header/HeaderArea2'
import FooterSection2 from '../footer/FooterSection2'

const Layout = ({children}) => {
  return (
    <>
        <HeaderArea2/>
        {children}
        <FooterSection2/>
    </>
  )
}

export default Layout