
import Link from 'next/link';
import React from 'react';
const hiring_content = {
  sub_title: "Why Chose Us",
  title: "Short Story About MediDove Clinic.",
  sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  features: [
    "Nostrud Ut enim ad minim veniam, quis exercit.",
    "Ut enim ad minim veniam, quis nostrud exercit.",
    "Veniam Ut enim ad minim, quis nostrud exercit.",
    "Veniam Ut enim ad minim, quis nostrud exercit.",
  ]
}
const { sub_title, title, sm_des, features } = hiring_content

const HiringAreaHomeFour = () => {
  return (
    <>
      <section className="hiring-area pos-rel">
        <div className="hiring-bottom pos-rel">
          <div
            className="hire-right-img" style={{ backgroundImage: `url(/assets/img/home4/hire/hire__thumb.jpg)` }}></div>
          <div className="container-fulid pl-0 pr-0">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-8">
                <div className="hire-text hire-text-2 h4hire-text">
                  <div className="about-title mb-20">
                    <h5 className="pink-color">{sub_title}</h5>
                    <h1>{title}</h1>
                  </div>
                  <div className="about-text">
                    <p> {sm_des}</p>
                  </div>
                  <ul className="professinals-list pt-10 pb-20">
                    {features.map((item, i) =>
                      <li key={i}>
                        <i style={{cursor: "pointer"}} className="fa fa-check"></i>
                         {item}
                      </li>
                    )} 
                  </ul>
                  <div className="hiring-button">
                    <Link
                      data-animation="fadeInLeft"
                      data-delay=".6s"
                      href="/contact"
                      className="btn btn-icon btn-icon-green ml-0"
                    ><span>+</span>Apply Today</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HiringAreaHomeFour;