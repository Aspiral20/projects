import Link from "next/link";

const ServiceAreaFour = () => {
  return (
    <div className="service-area-2 space overflow-hidden bg-smoke">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">خدماتنا</span>
              <h2 className="sec-title">
                المحترفون الموثوقون في إصلاح السيارات
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="fixturbo_img"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-1.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-1.svg"
                      alt="fixturbo_img"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service-details">ماجستير ميكانيكا</Link>
                  </h4>
                  <p className="service-card_text">
                    يعد رضا العملاء أمرًا بالغ الأهمية بالنسبة لأعمال لأنه يؤدي
                    إلى ولاء العملاء.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-2.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-2.svg"
                      alt="fixturbo_img"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service-details">إصلاح السيارات السريع</Link>
                  </h4>
                  <p className="service-card_text">
                    يعد رضا العملاء أمرًا بالغ الأهمية بالنسبة لأعمال لأنه يؤدي
                    إلى ولاء العملاء.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-3.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img
                      src="assets/img/icon/service-icon_1-3.svg"
                      alt="fixturbo_img"
                    />
                  </div>
                  <h4 className="service-card_title h5">
                    <Link href="/service-details">الدقة لأعمال السيارات</Link>
                  </h4>
                  <p className="service-card_text">
                    يعد رضا العملاء أمرًا بالغ الأهمية بالنسبة لأعمال لأنه يؤدي
                    إلى ولاء العملاء.
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

export default ServiceAreaFour;
