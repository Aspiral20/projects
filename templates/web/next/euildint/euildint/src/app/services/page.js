import React from 'react';
import BrandV1 from '@/src/components/brand/BrandV1';
import BreadCrumb from '@/src/components/breadCrumb/BreadCrumb';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import ServiceV3 from '@/src/components/service/ServiceV3';

export const metadata = {
    title: "Services - Euildint Construction Building NextJS Template"
}

const Services = () => {
    return (
        <>
            <HeaderV1 />
            <BreadCrumb title="Service Page" breadCrumb="services" />
            <ServiceV3 showFull={true} />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default Services;