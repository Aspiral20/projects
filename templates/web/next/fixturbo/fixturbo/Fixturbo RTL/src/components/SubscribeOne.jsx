import Link from "next/link";

const SubscribeOne = () => {
  return (
    <div className="container">
      <div
        className="footer-top-1 bg-theme"
        style={{ backgroundImage: "url(assets/img/bg/footer-top-bg1-1.png)" }}
      >
        <div className="footer-logo">
          <Link href="/">
            <img src="assets/img/logo-white.svg" alt="Fixturbo" />
          </Link>
        </div>
        <div className="call-media-wrap">
          <div className="icon">
            <img src="assets/img/icon/phone-1.svg" alt="fixturbo_img" />
          </div>
          <div className="media-body">
            <h6 className="title text-white">اتصل عند الطلب:</h6>
            <h4 className="link">
              <a className="text-white" href="tel:6295550129">
                (629) 555-0129
              </a>
            </h4>
          </div>
        </div>
        <div className="social-btn">
          <Link href="https://facebook.com/">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link href="https://twitter.com/">
            <i className="fab fa-twitter" />
          </Link>
          <Link href="https://instagram.com/">
            <i className="fab fa-instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscribeOne;
