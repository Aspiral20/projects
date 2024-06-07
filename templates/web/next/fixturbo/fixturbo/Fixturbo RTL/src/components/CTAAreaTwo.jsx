

const CTAAreaTwo = () => {
  return (
    <div className="cta-area-2">
      <div className="container">
        <div className="cta-wrap2 bg-theme">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-7">
              <div className="title-area">
                <h2 className="sec-title text-white">اشترك لتبقى على اتصال</h2>
                <p className="sec-text text-white">
                  إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في
                  السيارة. يتضمن تشخيص المشكلة وإصلاح الأجزاء الضرورية
                </p>
              </div>
              <form className="newsletter-form style2">
                <button type="submit" className="btn style5">
                  يشترك
                </button>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your Email Address"
                    required=""
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="cta2-bg-thumb">
                <img
                  src="assets/img/normal/cta-thumb-2-1.png"
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

export default CTAAreaTwo;
