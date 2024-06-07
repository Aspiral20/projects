import React from "react";

const ContactSection = () => {
  return (
    <section id="contact-section" className="pt-60 position-relative">
      <div className="container">
        <div className="conatct-section-bg">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-section-form-container">
                <h2 className="ba-section-title">Free Online Quote Now!</h2>
                <form action="#" className="contact-form">
                  <div className="contact-form__input-fields">
                    <div className="input-field-container-name">
                      <input
                        type="text"
                        name="contact-name"
                        id="contact-form__name"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="input-field-container-email">
                      <input
                        type="email"
                        name="contact-email"
                        id="contact-form__email"
                        placeholder="Email ID"
                      />
                    </div>

                    <div className="input-field-container-number">
                      <input
                        type="number"
                        name="contact-number"
                        id="contact-form__number"
                        placeholder="Phone No."
                      />
                    </div>

                    <div className="input-field-container-subject">
                      <input
                        type="text"
                        name="contact-subject"
                        id="contact-form__subject"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="input-field-container-message">
                      <textarea
                        name="contact-textarea"
                        id="contact-form__message"
                        placeholder="Your Message"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="ba-submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6 position-relative">
              <img
                src="assets/img/user/person.png"
                alt="person"
                className="conatct-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
