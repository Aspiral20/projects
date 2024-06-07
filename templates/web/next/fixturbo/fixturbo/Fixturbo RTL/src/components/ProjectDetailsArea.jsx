import Link from "next/link";

const ProjectDetailsArea = () => {
  return (
    <div className="portfolio-area space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="project-details-single-page">
              <div className="page-img">
                <img
                  src="assets/img/portfolio/portfolio_details.png"
                  alt="portfolio"
                />
              </div>
              <div className="row gx-30 flex-row-reverse">
                <div className="col-xxl-8 col-lg-7">
                  <h3 className="page-subtitle mt-25 mb-25">
                    خدمات إصلاح السيارات المهنية
                  </h3>
                  <p className="mb-25">
                    في منشأتنا، نقدم مجموعة شاملة من الخدمات، بما في ذلك الصيانة
                    الروتينية، وتشخيص المحرك، وإصلاح الفرامل، وخدمة ناقل الحركة،
                    واستكشاف أخطاء النظام الكهربائي وإصلاحها، وغير ذلك الكثير.
                    سواء كانت سيارتك تحتاج إلى ضبط بسيط أو إصلاح معقد، يمكنك
                    الوثوق بمحترفينا المهرة لإنجاز المهمة بكفاءة وفعالية.
                  </p>
                  <p className="mb-25">
                    نحن ندرك أهمية سيارتك في حياتك اليومية، ولهذا السبب نسعى
                    جاهدين لتقليل وقت التوقف عن العمل وتوفير الحلول في الوقت
                    المناسب. باستخدام أحدث المعدات والتقنيات الرائدة في الصناعة،
                    نضمن إكمال كل إصلاح وفقًا لأعلى المعايير، بما يلبي مواصفات
                    الشركة المصنعة أو يتجاوزها.
                  </p>
                  <div className="checklist style2 mb-40">
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        خدمات إصلاح السيارات الاحترافية سيارة يمكن الاعتماد
                        عليها
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        حلول إصلاح السيارات التي يمكن الاعتماد عليها
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        متجرك الشامل لتصليح السيارات
                      </li>
                    </ul>
                  </div>
                  <h3 className="page-subtitle mt-n2 mb-20">
                    متجرك الشامل لتصليح السيارات
                  </h3>
                  <p className="mb-30">
                    إن رضا عملاء One-Stop Car RC هو أولويتنا، ونحن نبذل قصارى
                    جهدنا لضمان حصولك على اتصالات شفافة وأسعار عادلة واهتمام
                    شخصي طوال عملية الإصلاح. عندما تختار خدمات إصلاح السيارات
                    الاحترافية لدينا، يمكنك الاطمئنان إلى أن سيارتك في أيدٍ
                    قادرة.
                  </p>
                  <div className="row gy-30">
                    <div className="col-md-6">
                      <div className="page-img">
                        <img
                          src="assets/img/portfolio/portfolio_details1-2.png"
                          alt="fixturbo_img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="page-img">
                        <img
                          src="assets/img/portfolio/portfolio_details1-3.png"
                          alt="fixturbo_img"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mb-20 mt-30">
                    في منشأتنا، نقدم مجموعة شاملة من الخدمات، بما في ذلك الصيانة
                    الروتينية، وتشخيص المحرك، وإصلاح الفرامل، وخدمة ناقل الحركة،
                    واستكشاف أخطاء النظام الكهربائي وإصلاحها، وغير ذلك الكثير.
                    سواء كانت سيارتك تحتاج إلى ضبط بسيط أو إصلاح معقد، يمكنك
                    الوثوق بمحترفينا المهرة لإنجاز المهمة بكفاءة وفعالية. نحن
                    ندرك أهمية سيارتك في حياتك اليومية، ولهذا السبب نسعى جاهدين
                    لتقليل وقت التوقف عن العمل وتوفير الحلول في الوقت المناسب.
                    باستخدام أحدث المعدات والتقنيات الرائدة في الصناعة، نضمن
                    إكمال كل إصلاح وفقًا لأعلى المعايير، بما يلبي مواصفات الشركة
                    المصنعة أو يتجاوزها.
                  </p>
                </div>
                <div className="col-xxl-4 col-lg-5">
                  <aside className="sidebar-area">
                    <div className="widget widget_project-info">
                      <h3 className="widget_title">معلومات المشروع</h3>
                      <ul>
                        <li>
                          <span>اسم:</span>
                          Fixtubro
                        </li>
                        <li>
                          <span>مؤلف:</span>
                          راجين صالح
                        </li>
                        <li>
                          <span>Date:</span>
                          23 ديسمبر 2023
                        </li>
                        <li>
                          <span>العلامات:</span>
                          Repair
                        </li>
                        <li className="text-theme">
                          <span>قيمة:</span>$ 240
                        </li>
                        <li>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="widget widget_contact">
                      <div className="widget-contact-wrap text-center">
                        <h5 className="widget_subtitle">إصلاح السيارات</h5>
                        <h3 className="widget_title mt-20">
                          الدقة لأعمال السيارات
                        </h3>
                        <p className="widget-contact-text">
                          إنها حقيقة ثابتة منذ زمن طويل أن القارئ سيكون كذلك
                          يصرف من المحتوى المقروء
                        </p>
                        <Link className="btn style2 mt-30" href="/contact">
                          دعونا نتحدث <i className="fas fa-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsArea;
