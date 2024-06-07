import Link from "next/link";

const FooterAreaThree = () => {
  return (
    <footer
      className="footer-wrapper footer-layout3"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">شركة</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/about">عن</Link>
                    </li>
                    <li>
                      <Link href="/team">الفريق</Link>
                    </li>
                    <li>
                      <Link href="/contact">فجوة</Link>
                    </li>
                    <li>
                      <Link href="/contact">سياسة الخصوصية</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">خدمات</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/service">ماجستير ميكانيكا</Link>
                    </li>
                    <li>
                      <Link href="/service">إصلاح السيارات السريع</Link>
                    </li>
                    <li>
                      <Link href="/service">إصلاح شار المحمول</Link>
                    </li>
                    <li>
                      <Link href="/service">الإصلاح التلقائي الاحترافي</Link>
                    </li>
                    <li>
                      <Link href="/service">الدقة لأعمال السيارات</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">اتصال</h3>
                <div className="widget-contact">
                  <p>
                    <Link href="tel:888123456765">(+888) 123 456 765</Link>
                  </p>
                  <p>
                    <Link href="mailto:infoname@mail.com">infoname@mail.com</Link>
                  </p>
                  <p>
                    شارع المدينة القديمة، الولايات المتحدة
                    <br /> 1212 نيويورك-3500
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget widget-newsletter">
                <h3 className="widget_title">ابقى على تواصل</h3>
                <p className="footer-text mb-50">
                  لوريم إيبسوم بسيط هو دومياموي هو نص لوريم إيبسوم بسيط
                </p>
                <form className="newsletter-form">
                  <button type="submit" className="btn">
                    <i className="fas fa-arrow-right" />
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
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link href="#">فيكستوربو</Link> 2024 | كل الحقوق محفوظة
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link href="/contact">البنود و الظروف</Link>
                <Link href="/contact">سياسة الخصوصية</Link>
                <Link href="/contact">اتصل بنا</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaThree;
