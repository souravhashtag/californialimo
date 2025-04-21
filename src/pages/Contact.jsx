import React from 'react'
import  { useEffect } from 'react';

const Contact = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://quotes.eckolimo.com/quote-widget-script/8";
    script.async = true;
    document.getElementById('ssiframecontainerwidget8').appendChild(script);
  }, []);

  return (
    <div>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
            <h1>Contact</h1>
        </div>
    </header>
    <section className="content-section">
  <div className="container">
    <div className="row align-items-center">
      <div
        className="col-md-4 wow fadeIn"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <div className="contact-box">
          <figure>
            <img src="../assets/images/icon-contact01.png" alt="Image" />
          </figure>
          <h6>Address</h6>
          <p>1959 O'Toole Way, San Jose CA 95131</p>
        </div>
        {/* end contact-box */}
      </div>
      {/* end col-6 */}
      <div
        className="col-lg-4  wow fadeIn"
        data-wow-delay="0.15s"
        style={{
          visibility: "visible",
          animationDelay: "0.15s",
          animationName: "fadeIn"
        }}
      >
        <div className="contact-box">
          <figure>
            <img src="../assets/images/icon-contact02.png" alt="Image" />
          </figure>
          <h6>Phone</h6>
          <p>
            +1 877-359-3256 <br /> for booking
          </p>
        </div>
        {/* end contact-box */}
      </div>
      {/* end col-4 */}
      <div
        className="col-lg-4  wow fadeIn"
        data-wow-delay="0.30s"
        style={{
          visibility: "visible",
          animationDelay: "0.3s",
          animationName: "fadeIn"
        }}
      >
        <div className="contact-box">
          <figure>
            <img src="../assets/images/icon-contact03.png" alt="Image" />
          </figure>
          <h6>e-mail</h6>
          <p>
            <a href="#">res@clwt.com</a>
            <br />
            for e-booking &amp; all
          </p>
        </div>
        {/* end contact-box */}
      </div>
      {/* end col-4 */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</section>
<section
  className="content-section"
  data-background="#f5f1ea"
  style={{
    backgroundImage: 'url("#f5f1ea")',
    backgroundColor: "rgb(245, 241, 234)"
  }}
>
  <div className="container">
    <div className="row align-items-center">
      <div
        className="col-lg-6 wow fadeIn"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <div className="side-content">
          <h6>REACH US</h6>
          <h3>
            Most easy way to
            <br /> reach us{" "}
          </h3>
        </div>
        {/* end side-content */}
      </div>
      {/* end col-6 */}
      <div
        className="col-lg-6  wow fadeIn"
        data-wow-delay="0.15s"
        style={{
          visibility: "visible",
          animationDelay: "0.15s",
          animationName: "fadeIn"
        }}
      >
                  <div id="ssiframecontainerwidget8"></div>
        </div>
        </div>
        </div>
</section>

    </div>
  )
}

export default Contact
