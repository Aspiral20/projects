import Link from "next/link";

const PricingPlanTwo = () => {
  return (
    <div className="pricing-area-2 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">الخطة الاستثمارية</span>
              <h2 className="sec-title">
                تمكين استثمار ثروتك معنا
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="fixturbo_img"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <h4 className="pricing-card_title">الخطة الفضية</h4>
                <div className="pricing-card_icon">
                  <img
                    src="assets/img/icon/picing-icon_2-1.svg"
                    alt="fixturbo_img"
                  />
                </div>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">حد أدنى 500/دولار أمريكي</h3>
                <h6 className="pricing-card_currency">1.00/دولار أمريكي</h6>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      سوق ستوك
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      كل يوم
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      حساب العائد %30
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      لمدة 15 يوما
                    </li>
                  </ul>
                </div>
                <Link className="btn" href="/about">
                  احصل على هذه الخطة
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2 pricing-card-active">
              <div className="pricing-card-icon-wrap">
                <h4 className="pricing-card_title">الخطة الذهبية</h4>
                <div className="pricing-card_icon">
                  <img
                    src="assets/img/icon/picing-icon_2-2.svg"
                    alt="fixturbo_img"
                  />
                </div>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">حد أدنى 600/دولار أمريكي</h3>
                <h6 className="pricing-card_currency">1.00/دولار أمريكي</h6>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      سوق ستوك
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      كل يوم
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      حساب العائد %30
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      لمدة 15 يوما
                    </li>
                  </ul>
                </div>
                <Link className="btn" href="/about">
                  احصل على هذه الخطة
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <h4 className="pricing-card_title">الخطة البلاتينية</h4>
                <div className="pricing-card_icon">
                  <img
                    src="assets/img/icon/picing-icon_2-3.svg"
                    alt="fixturbo_img"
                  />
                </div>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">
                  حد أدنى 1000/دولار أمريكي
                </h3>
                <h6 className="pricing-card_currency">1.00/دولار أمريكي</h6>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      سوق ستوك
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      كل يوم
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      حساب العائد %30
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      لمدة 15 يوما
                    </li>
                  </ul>
                </div>
                <Link className="btn" href="/about">
                  احصل على هذه الخطة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanTwo;
