import React from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ContactAreaSection from '../contact/ContactAreaSection'
import MapSection from '../map/MapSection'

const ContactMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"Contact"}/>
        <ContactAreaSection/>
        <MapSection/>
    </main>
  )
}

export default ContactMain