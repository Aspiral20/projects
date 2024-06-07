import Link from "next/link";

const ProcessAreaTwo = () => {
  return (
    <div
      className="process-area-2 space-top"
      style={{ backgroundImage: "url(assets/img/bg/process2-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <h3 className="sub-title"> آلية العمل</h3>
              <h2 className="sec-title text-white">
                أميال من الابتسامات، إصلاح واحد في كل مرة
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape2.png"
                  alt="fixturbo_img"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 gx-90 justify-content-center">
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">خطوة 1</div>
              <h4 className="process-card-title">دعم الجودة</h4>
              <p className="process-card-text">
                إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في السيارة
                وتتضمن التشخيص
              </p>
              <Link href="/service-details" className="link-btn style2">
                اقرأ أكثر <i className="fas fa-arrow-left" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">خطوة 2</div>
              <h4 className="process-card-title">جميع ماركات السيارات</h4>
              <p className="process-card-text">
                إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في السيارة
                وتتضمن التشخيص
              </p>
              <Link href="/service-details" className="link-btn style2">
                اقرأ أكثر <i className="fas fa-arrow-left" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">خطوة 3</div>
              <h4 className="process-card-title">خدمات متنوعة</h4>
              <p className="process-card-text">
                إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في السيارة
                وتتضمن التشخيص
              </p>
              <Link href="/service-details" className="link-btn style2">
                اقرأ أكثر <i className="fas fa-arrow-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAreaTwo;
