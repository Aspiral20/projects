import Link from "next/link";

const HeroTwo = () => {
  return (
    <div
      className="hero-wrapper hero-2"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_2_1.png)" }}
    >
      <div className="hero-shape2-1">
        <span className="hero-shape2-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-8">
            <div className="hero-style2">
              <span className="sub-title text-white">مسرع النمو</span>
              <h1 className="hero-title text-white">
                صياغة{" "}
                <span>
                  <img
                    src="assets/img/hero/hero_shape_2.png"
                    alt="fixturbo_img"
                  />
                  السيارات
                </span>{" "}
                التميز إصلاح واحد في الوقت المناسب
              </h1>
              <p className="hero-text text-white">
                الدهليز موريس الاتحاد الأوروبي العاقل لاكوس موريس الاتحاد
                الأوروبي العاقل لاكوس الدهليز موريس الاتحاد الأوروبي العاقل
                لاكوس موريس الاتحاد الأوروبي العاقل لاكوس
              </p>
              <div className="btn-group">
                <Link href="/about" className="btn">
                  يتعلم أكثر
                </Link>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/phone-1.svg" alt="fixturbo_img" />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">طلب مكالمة:</h6>
                    <h4 className="link">
                      <a className="text-white" href="tel:6295550129">
                        (629) 555-0129
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
