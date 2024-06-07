"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const FaqAreaTwo = () => {
  return (
    <section className="faq-area-2 space">
      <div className="container">
        <div className="row gx-60 flex-row-reverse">
          <div className="col-xl-6">
            <div className="faq-thumb2 mb-xl-0 mb-50">
              <div className="about-counter-grid jump">
                <img
                  src="assets/img/icon/faq2-counter-icon-1.svg"
                  alt="fixturbo_img"
                />
                <div className="media-right">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            +<CountUp delay={0} start={0} end={200} />k
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <h4 className="about-counter-text">اسأل أي شيء</h4>
                </div>
              </div>
              <img
                src="assets/img/normal/faq-thumb-2-1.png"
                alt="fixturbo_img"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title">اسأل أي شيء</span>
              <h2 className="sec-title">
                تمكين الشركات
                <br /> تمكين الشركات
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="fixturbo_img"
                />
              </h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card style2 active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    ما هو الغرض من خطة العمل؟
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      ما هو الغرض من خطة العمل؟ ما هو الغرض من خطة العمل؟ ما هو
                      الغرض من خطة العمل؟ ما هو الغرض من خطة العمل؟ ما هو الغرض
                      من خطة العمل؟
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    ما هو الغرض من خطة العمل؟
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      ما هو الغرض من خطة العمل؟ ما هو الغرض من خطة العمل؟ ما هو
                      الغرض من خطة العمل؟ ما هو الغرض من خطة العمل؟ ما هو الغرض
                      من خطة العمل؟
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    ما هو الغرض من خطة العمل؟
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      ما هو الغرض من خطة العمل؟ ما هو الغرض من خطة العمل؟ ما هو
                      الغرض من خطة العمل؟ ما هو الغرض من خطة العمل؟ ما هو الغرض
                      من خطة العمل؟
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaTwo;
