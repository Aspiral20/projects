import React from 'react'
import AboutSection2 from '@/component/about/AboutSection2'
import BrandSection from '@/component/brand/BrandSection'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ServiceSection from '@/component/service/ServiceSection'
import TeamSection from '@/component/team/TeamSection'
import VideoSection from '@/component/video/VideoSection'
import TestimonialSection2 from '../testimonial/TestimonialSection2'

const AboutMain = () => {
  return (
    <main>
        <BreadcrumbSection title={"About Us"}/>
        <AboutSection2/>
        <ServiceSection/>
        <TeamSection/>
        <VideoSection/>
        <BrandSection/>
        <TestimonialSection2/>  
    </main>
  )
}

export default AboutMain