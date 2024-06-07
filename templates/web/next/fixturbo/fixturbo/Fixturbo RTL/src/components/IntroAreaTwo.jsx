import Link from "next/link";

const IntroAreaTwo = () => {
  return (
    <div
      className="intro-area-2 space mt-0"
      style={{
        backgroundImage: "url(assets/img/intro/bg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row gy-30 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-intro-wrap style2">
              <span className="bg-border" />
              <div className="thumb">
                <img src="assets/img/intro/1.png" alt="fixturbo_img" />
              </div>
              <div className="details">
                <h3> للحصول على التحديثات</h3>
                <p>
                  لدينا للحصول على التحديثاتلدينا للحصول على التحديثاتلدينا
                  للحصول على التحديثاتلدينا للحصول على التحديثاتلدينا للحصول على
                  التحديثاتلدينا للحصول على التحديثات
                </p>
                <Link className="btn style-border3" href="/service">
                  لدينا للح <i className="fas fa-arrow-left ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-intro-wrap style2">
              <span className="bg-border" />
              <div className="thumb">
                <img src="assets/img/intro/2.png" alt="fixturbo_img" />
              </div>
              <div className="details">
                <h3> للحصول على التحديثات</h3>
                <p>
                  لدينا للحصول على التحديثاتلدينا للحصول على التحديثاتلدينا
                  للحصول على التحديثاتلدينا للحصول على التحديثاتلدينا للحصول على
                  التحديثاتلدينا للحصول على التحديثات
                </p>
                <Link className="btn style-border3" href="/service">
                  لدينا للح <i className="fas fa-arrow-left ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-intro-wrap style2">
              <span className="bg-border" />
              <div className="thumb">
                <img src="assets/img/intro/3.png" alt="fixturbo_img" />
              </div>
              <div className="details">
                <h3> للحصول على التحديثات</h3>
                <p>
                  لدينا للحصول على التحديثاتلدينا للحصول على التحديثاتلدينا
                  للحصول على التحديثاتلدينا للحصول على التحديثاتلدينا للحصول على
                  التحديثاتلدينا للحصول على التحديثات
                </p>
                <Link className="btn style-border3" href="/service">
                  لدينا للح <i className="fas fa-arrow-left ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroAreaTwo;
