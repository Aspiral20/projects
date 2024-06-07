"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutTwo = () => {
  return (
    <div className="about-area-2 bg-smoke space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="assets/img/normal/about_2-1.png" alt="fixturbo_img" />
              </div>
              <div className="about-img-2">
                <img src="assets/img/normal/about_2-2.png" alt="fixturbo_img" />
              </div>
              <div className="about-counter-wrap jump-reverse">
                <img
                  src="assets/img/icon/about_icon2-1.svg"
                  alt="fixturbo_img"
                />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          +<CountUp delay={0} start={0} end={5} />k
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">عميل موثوق به</h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img
                      src="assets/img/icon/about_icon2-2.png"
                      alt="fixturbo_img"
                    />
                  </div>
                  <h3 className="about-counter">
                    +<span className="counter-number">10</span>
                  </h3>
                </div>
                <h4 className="about-year-text">سنوات من الخبرات</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">تعرف عنا</span>
                <h2 className="sec-title">
                  إنها أفضل الحلول التي يمكن الاعتماد عليها لإصلاح السيارات
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="fixturbo_img"
                  />
                </h2>
                <p className="sec-text">
                  إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في
                  سيارتك. يتضمن تشخيص المشكلة وإصلاح الأجزاء الضرورية أو
                  استبدالها والتأكد من سلامة السيارة
                </p>
              </div>
              <div className="about-feature-wrap">
                <div className="icon">
                  <img
                    src="assets/img/icon/about_icon2-3.svg"
                    alt="fixturbo_img"
                  />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">النخبة لخدمة السيارات</h5>
                  <p className="about-feature-text">
                    إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في
                    سيارتك. يتضمن تشخيص المشكلة أو
                  </p>
                </div>
              </div>
              <div className="about-feature-wrap">
                <div className="icon">
                  <img
                    src="assets/img/icon/about_icon2-4.svg"
                    alt="fixturbo_img"
                  />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">جراج برو درايف</h5>
                  <p className="about-feature-text">
                    إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في
                    سيارتك. يتضمن تشخيص المشكلة أو
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
