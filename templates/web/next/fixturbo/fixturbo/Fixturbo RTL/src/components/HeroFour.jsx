import Link from "next/link";

const HeroFour = () => {
  return (
    <div
      className="hero-wrapper hero-4"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/banner1.png)" }}
    >
      <div className="hero-shape4-1">
        <img
          className="shape-position shape1"
          src="assets/img/hero/shape1.png"
          alt="fixturbo_img"
        />
        <img
          className="shape-position shape2"
          src="assets/img/hero/shape2.png"
          alt="fixturbo_img"
        />
        <img
          className="shape-position shape3"
          src="assets/img/hero/shape3.png"
          alt="fixturbo_img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-8">
            <div className="hero-style4">
              <span className="sub-title text-white">للحصول على</span>
              <h1 className="hero-title text-white">
                بارية لدينا للحصول على التحدي
              </h1>
              <p className="hero-text text-white">
                شترك في اشترك في النشرة الإخبارية لدينا للحصول على التحديثات
                اشترك في اشترك في النشرة الإخبارية
              </p>
              <div className="btn-group">
                <Link href="/about" className="btn">
                  على التحديثات
                </Link>
                <Link href="/service" className="btn style-border">
                  للحصول على
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFour;
