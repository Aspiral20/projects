import Link from "next/link";

const ServiceAreaOne = () => {
  return (
    <div className="service-area-1 space bg-smoke overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">أحدث خدمة</span>
              <h2 className="sec-title">إصلاح السيارات المهنية أفضل الخدمات</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img
                    src="assets/img/icon/service-icon_1-1.svg"
                    alt="fixturbo_img"
                  />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">المثبتات التلقائية</Link>
                </h4>
                <p className="service-card_text">
                  إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في سيارتك
                </p>
                <Link href="/service-details" className="link-btn">
                  اقرأ أكثر
                  <i className="fas fa-arrow-left" />
                </Link>
              </div>
              <div className="service-card_img">
                <img
                  src="assets/img/service/service-1-1.png"
                  alt="fixturbo_img"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img
                    src="assets/img/icon/service-icon_1-2.svg"
                    alt="fixturbo_img"
                  />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">ماجستير ميكانيكا</Link>
                </h4>
                <p className="service-card_text">
                  إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في سيارتك
                </p>
                <Link href="/service-details" className="link-btn">
                  اقرأ أكثر
                  <i className="fas fa-arrow-left" />
                </Link>
              </div>
              <div className="service-card_img">
                <img
                  src="assets/img/service/service-1-2.png"
                  alt="fixturbo_img"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img
                    src="assets/img/icon/service-icon_1-3.svg"
                    alt="fixturbo_img"
                  />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">مرآب للسيارات</Link>
                </h4>
                <p className="service-card_text">
                  إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في سيارتك
                </p>
                <Link href="/service-details" className="link-btn">
                  اقرأ أكثر
                  <i className="fas fa-arrow-left" />
                </Link>
              </div>
              <div className="service-card_img">
                <img
                  src="assets/img/service/service-1-3.png"
                  alt="fixturbo_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne;
