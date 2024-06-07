import React from "react";
import TestimonialSlider from "../slider/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section id="testimonial-section" className="pt-115 pb-120 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center pb-60">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="text-center">
              <h3 className="ba-section-title">
                We have assisted clients all throughout the world
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <TestimonialSlider/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
