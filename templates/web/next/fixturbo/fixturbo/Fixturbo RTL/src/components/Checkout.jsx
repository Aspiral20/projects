
const Checkout = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="shipping-area">
              <h3 className="page-title">بيانات الدفع</h3>
              <form className="checkout-form">
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label rtl"
                    htmlFor="flexRadioDefault1"
                  >
                    <img
                      src="assets/img/update-img/payment-method/03.png"
                      alt="#"
                    />
                  </label>
                </div>
                <div className="form-group mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label rtl"
                    htmlFor="flexRadioDefault2"
                  >
                    بطاقة إئتمان
                  </label>
                </div>
                <ul className="footer-currency currency-area">
                  <li>
                    <a href="#">
                      <img
                        src="assets/img/update-img/payment-method/01.png"
                        alt="fixturbo_img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/img/update-img/payment-method/02.png"
                        alt="fixturbo_img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/img/update-img/payment-method/04.png"
                        alt="fixturbo_img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/img/update-img/payment-method/05.png"
                        alt="fixturbo_img"
                      />
                    </a>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>الاسم الكامل</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>رقم البطاقة</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label>تاريخ انتهاء الصلاحية</label>
                      <select className="form-control" defaultValue={"Choose"}>
                        <option value="Choose">أبريل</option>
                        <option value="يمشي">يمشي</option>
                        <option value="شهر فبراير">شهر فبراير</option>
                        <option value="يناير">يناير</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label>سنة</label>
                      <select className="form-control" defaultValue={"2023"}>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label>CCV</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label rtl"
                    htmlFor="flexRadioDefault3"
                  >
                    الدفع عند الاستلام
                  </label>
                </div>
                <button type="submit" className="btn style2">
                  الدفع
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
