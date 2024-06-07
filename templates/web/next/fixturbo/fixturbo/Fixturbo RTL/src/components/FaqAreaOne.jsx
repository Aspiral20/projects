import Link from "next/link";

const FaqAreaOne = () => {
  return (
    <section className="faq-area-1 space-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-lg-0">
              <span className="sub-title">أي سؤال</span>
              <h2 className="sec-title">الغرض من خدمات استشارات الأعمال</h2>
              <p className="sec-text">
                إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار في سيارتك.
                يتضمن تشخيص المشكلة وإصلاح الأجزاء الضرورية أو استبدالها والتأكد
                من أن السيارة في حالة عمل مناسبة
              </p>
              <div className="btn-wrap mt-30">
                <Link className="btn style2" href="/contact">
                  اقرأ أكثر <i className="fas fa-arrow-left ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    هل يمكن اختيار أي جزء لإصلاح شاري؟
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة
                      سوف يشتت انتباه القارئ عند النظر إلى تخطيطها. العديد من
                      حزم النشر المكتبي ومحررات صفحات الويب تستخدم الآن لوريم
                      إيبسوم{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    كيف يمكنني الحصول على خدمات الخاصة بي؟
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة
                      سوف يشتت انتباه القارئ عند النظر إلى تخطيطها. العديد من
                      حزم النشر المكتبي ومحررات صفحات الويب تستخدم الآن لوريم
                      إيبسوم
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    ماذا يجب أن أفعل إذا كان ضوء فحص المحرك الخاص بي قيد
                    التشغيل؟
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة
                      سوف يشتت انتباه القارئ عند النظر إلى تخطيطها. العديد من
                      حزم النشر المكتبي ومحررات صفحات الويب تستخدم الآن لوريم
                      إيبسوم
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    كم من الوقت يستغرق لإصلاح شار؟
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة
                      سوف يشتت انتباه القارئ عند النظر إلى تخطيطها. العديد من
                      حزم النشر المكتبي ومحررات صفحات الويب تستخدم الآن لوريم
                      إيبسوم
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaOne;
