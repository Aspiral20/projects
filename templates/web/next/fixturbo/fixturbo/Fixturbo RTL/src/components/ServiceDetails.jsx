import Link from "next/link";

const ServiceDetails = () => {
  return (
    <div className="service-details-area space-top space-extra-bottom overflow-hidden">
      <div className="container">
        <div className="row gx-40 flex-row-reverse">
          <div className="col-xxl-8 col-lg-7">
            <div className="service-page-single">
              <div className="page-img mb-45">
                <img
                  src="assets/img/service/service-details1-1.png"
                  alt="fixturbo_img"
                />
              </div>
              <div className="page-content">
                <h2 className="page-title">
                  حلول إصلاح السيارات بأسعار معقولة
                </h2>
                <p className="mb-25">
                  تصميم الويب بطريقة قوية ليس فقط المهن، ومع ذلك، في شغف شركتنا.
                  علينا أن الميل إلى تصديق فكرة المظهر الذكي لأي شخص موقع ويب
                  على الزوار. تصميم الويب بطريقة قوية ليست مجرد مهنة تصميم الويب
                  بطريقة قوية ليس فقط
                </p>
                <p className="mb-25">
                  تصميم الويب بطريقة قوية ليس فقط المهن، ومع ذلك، في شغف شركتنا.
                  علينا أن الميل إلى تصديق فكرة المظهر الذكي لأي شخص موقع الويب
                  على الزوار
                </p>
                <h3 className="page-subtitle mb-15">
                  متخصصون موثوقون في إصلاح السيارات
                </h3>
                <p className="mb-30">
                  تصميم الويب بطريقة قوية ليس فقط المهن، ومع ذلك، في شغف شركتنا.
                  علينا أن الميل إلى تصديق فكرة المظهر الذكي لأي شخص موقع ويب
                  على الزوار. تصميم الويب بطريقة قوية ليست مجرد مهنة تصميم الويب
                  بطريقة قوية ليس فقط
                </p>
                <div className="row gy-30">
                  <div className="col-sm-6">
                    <div className="page-img">
                      <img
                        src="assets/img/service/service-details1-2.png"
                        alt="fixturbo_img"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="page-img">
                      <img
                        src="assets/img/service/service-details1-3.png"
                        alt="fixturbo_img"
                      />
                    </div>
                  </div>
                </div>
                <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> اصلاح سيارة هي
                      خدمة مقدمة لإصلاح أي مشاكل أو أضرار سيارتك
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      يتضمن تشخيص المشكلة أو إصلاحها أو استبدالها
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Trusted Car Repair Professionals et Your Car Fixed Right
                      Away
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      خدمات إصلاح سيارات عالية الجودة إصلاح سيارات بأسعار معقولة
                      حلول
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_service-list">
                <h3 className="widget_title">جميع الخدمات</h3>
                <ul>
                  <li>
                    <Link href="/blog">
                      <i className="fas fa-angle-double-right" />
                      تصميم سريع وموثوق لإصلاح السيارات
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fas fa-angle-double-right" />
                      متخصصون موثوقون في إصلاح السيارات
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fas fa-angle-double-right" />
                      أصلح سيارتك على الفور
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fas fa-angle-double-right" />
                      خدمات إصلاح السيارات عالية الجودة
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fas fa-angle-double-right" />
                      حلول إصلاح السيارات بأسعار معقولة
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget widget_contact">
                <div className="widget-contact-wrap text-center">
                  <h3 className="widget_title">Contact Us</h3>
                  <p className="widget-contact-text">
                    إنها حقيقة ثابتة منذ زمن طويل أن القارئ سيكون كذلك يصرف من
                    خلال إصلاح المحتوى المقروء
                  </p>
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <p className="widget-contact-text">تحتاج مساعدة؟</p>
                  <h5>
                    <Link href="tel:80855510111">(808) 555-0111</Link>
                  </h5>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
