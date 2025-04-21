
import React from 'react';
import  { useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';
import Heroslider from '../component/Home/Heroslider';
import Ourvehicles from '../component/Home/Ourvehicles';


function Home() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://quotes.eckolimo.com/quote-widget-script/8";
    script.async = true;
    document.getElementById('ssiframecontainerwidget8').appendChild(script);
  }, []);







  return (
    
    <div>

        <Heroslider />
      
      <div className='frm'>
      <div id="ssiframecontainerwidget8"></div>
      </div>

        <section
            className="content-section"
            style={{
                backgroundColor: 'rgb(245, 241, 234)',
                backgroundImage: 'url("#f5f1ea")',
            }}
            data-background="#f5f1ea"
        >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeIn">
              <div className="side-content">
                <h6>California Limo Wine Tour</h6>
                <h3>Northern California’s Premium Wine Tour Company</h3>
                <p>
                  The core philosophy of team Californialimowinetours is all about
                  delivering exclusivity and comfort to our valuable clients by
                  gifting a memorable wine tour California’s Niagara Wine Country. To
                  accomplish this objective, we have very strategically designed some
                  of the best "private", educational and interactive wine &amp;
                  culinary tour services in Niagara Wine Country in the comfort of a
                  luxury SUV, Mercedes or stretch limousine. In every step of our
                  services, flawlessness is guaranteed.
                </p>
                <a href="#" className="custom-button">
                  ABOUT US
                </a>{" "}
              </div>
              {/* end side-content */}
            </div>
            {/* end col-6 */}
            <div className="col-lg-6  wow fadeIn" data-wow-delay="0.15s">
              <img src="../assets/images/menu-pack-thumb12.png" width="100%" />
              {/* end reservation-form */}
            </div>
            {/* end col-6 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>


      <section
            className="content-section no-btm-space"
            data-background="#f5f1ea"
        >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 wow fadeIn">
          <div className="section-title">
            <h6>CALIFORNIA LIMO WINE TOUR's Special</h6>
            <h2>Our Tours</h2>
            <h5>
              Our wine tours include the popular wines of Napa, small boutique
              wineries of the Russian River Valley and more. We deliver you to
              the valley of vineyards where grapes are grown to perfection and
              California wine is made.
            </h5>
            <img
              src="../assets/images/title-shape.png"
              alt="Image"
              className="title-shape"
            />
          </div>
          {/* end section-title */}
        </div>
        {/* end col-12 */}
        {/* end col-3 */}
        {/* end icon-box */}
      </div>
      {/* end col-3 */}
    </div>
    {/* end row */}
    {/* end container */}
      </section>

      <section className="content-section no-spacing">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 wow fadeIn">
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb01.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>Napa Valley Limo Wine Country Tour</h5>
              <ul>
                <li>
                  Napa is the heart and soul of California Wine Country. Napa
                  Valley is home to some of the most famous wineries in the
                  world. Whether you are searching for the perfect Cabernet or a
                  light and fresh Chardonnay, Napa has it all. Visiting Napa is
                  an experience you will never forget.
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      {/* end col-4 */}
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb02.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>Diamond Mountain District Wine Tours</h5>
              <ul>
                <li>
                  Diamond Mountain is located just outside of Calistoga. With
                  elevations of up to 2200 feet, the wine from this region is
                  rich and supple with low to medium acidity and soft tannins.
                  Young wines produced with Diamond Mountain grapes are
                  particularly well- suited for aging.
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      {/* end col-4 */}
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.30s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb03.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>Howell Mountain Wine Tours</h5>
              <ul>
                <li>
                  Located just outside of St. Helena, wineries around Howell
                  Mountain are in the 1400 to 2200 elevation. The area offers
                  magnificent views of picture-perfect rows of grapes. The area
                  is known for Cabernets, Merlots, Zinfandels, Chardonnay and
                  Viogner varietals. You’ll enjoy the cool refreshing air of the
                  mountain top wineries.
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      {/* end col-4 */}
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb04.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>Dry Creek Valley Wine Tours</h5>
              <ul>
                <li>
                  Dry Creek Valley is one of the smallest American Viticultural
                  Areas. It is just 16 miles long and two miles wide. Known for
                  its Zinfandel grapes, this area has some of the oldest
                  vineyards in California wine history with some of the
                  vineyards operating for almost 150 years.
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb05.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>Russian River Valley Wine Tours</h5>
              <ul>
                <li>
                  RUSSIAN RIVER VALLEY ROLLING HILLS - ANCIENT REDWOODS
                  BEAUTIFUL GARDENS - LANDSCAPING, NATURAL ELEGANCE, WORLD-CLASS
                  WINES Russian River Valley is the County’s largest
                  appellation, specializing…
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb06.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>Sonoma Valley Wine Tours</h5>
              <ul>
                <li>
                  SONOMA VALLEY - WINE PARADISE 55 - SONOMA WINERIES HISTORIC
                  SONOMA PLAZA Enjoy a Sonoma Valley limo wine country tour with
                  California Limo Wine…
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb07.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>Private Northern California Wine Tours</h5>
              <ul>
                <li>
                  TAILORED WINE TOUR OF NORTHERN CALIFORNIA’S WINE COUNTRY
                  BEST-KNOWN "ESTATE" - FAMILY-OWNED "BOUTIQUE" WINERIES 800
                  WINERIES NESTLED - 28 AVAS Our passionate and experienced
                  tour…
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb08.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>San Francisco To Alexander Valley Wine Tours</h5>
              <ul>
                <li>
                  ALEXANDER VALLEY - "TASTE ALEXANDER VALLEY" HELD EVENT EACH
                  YEAR - 30 WINERIES PARTICIPATE – 9 TO 10 HOUR DAY – With more
                  than 40…
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb09.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>San Francisco To Dry Creek Valley Wine Tours</h5>
              <ul>
                <li>
                  DRY CREEK VALLEY - TASTING WINE 28 WINERIES - PLENTY OF
                  TASTING OPPORTUNITIES – 9 HOUR DAY – We can whisk you away in
                  one…
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb10.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>San Francisco To Russian River Valley Wine Tours</h5>
              <ul>
                <li>
                  RUSSIAN RIVER WINE TOURS - PREMIER WINE REGIONS PINOT NOIR -
                  POPULAR WINE – 9 HOUR DAY – The Russian River Valley is
                  quickly becoming…
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb11.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>San Francisco To Sonoma Valley Wine Tours</h5>
              <ul>
                <li>
                  SAN FRANCISCO TO SONOMA VALLEY - WINE TASTING AND RELAXATION
                  WORLD-CLASS WINE – 8 TO 9 HOUR DAY – World-class wine in an
                  informal, rustic…
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
      <div
        className="col-lg-4 col-md-6 wow fadeIn"
        data-wow-delay="0.15s"
        style={{ paddingBottom: 20 }}
      >
        <a href="#">
          <div className="menu-pack-box">
            <figure>
              {" "}
              <img src="../assets/images/menu-pack-thumb12.jpg" alt="Image" />{" "}
            </figure>
            <div className="content">
              <h5>San Francisco To Napa Valley Wine Tours</h5>
              <ul>
                <li>
                  VINEYARD-DRAPED HILLS OF NAPA VALLEY - EXPERIENCES WINE
                  TASTING – 8 TO 9 HOUR DAY – Take in the beauty of the rolling
                  hills speckled…
                </li>
              </ul>
            </div>
            {/* end content */}
          </div>
        </a>
        {/* end menu-pack-box */}
      </div>
    </div>
    {/* end row */}
  </div>
  {/* end container-fluid */}
</section>

<section
  className="content-section bg-contain"
  data-background="images/section-bg02.jpg"
  data-stellar-background-ratio="1.1"
  style={{ padding: "40px 0px 0px 0px" }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 wow fadeIn">
        <div className="section-title">
          <h2>Our Vehicles</h2>
          <img src="../assets/images/title-shape.png" alt="Image" class="title-shape" />

            <Ourvehicles />

        </div>
        {/* end section-title */}
      </div>
      {/* end col-12 */}
      {/* end col-3 */}
      {/* end icon-box */}
    </div>
    {/* end col-3 */}
  </div>
  {/* end row */}
  {/* end container */}
</section>


<div className="sidebar" style={{"padding-left":"0px","background-image":"url(../assets/images/page-header-bg.jpg)"}}>
  <div className="widgetsd">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="content">
            <h6>California Limo Wine Tour</h6>
            <p>Discover the art of fine wine and luxury travel on our California limo wine tour – where the only thing poured more generously than the wine is elegance.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content">
            <a href="https://scwebext-c.groundwidgets.com/US.CA.ECK/Webconnect/Ecko/Account/Login?AspxAutoDetectCookieSupport=1" className="custom-button">Book Now</a> </div>
        </div>
      </div>
    </div>
  </div>
</div>


<section className="content-section no-bottom-spacing">
  <div className="container">
    <div className="row">
      <div className="col-12 wow fadeIn">
        <div className="section-title">
          <h6>Today's Special</h6>
          <h2>Photo Gallery</h2>
          <h5>View our gallery to see photos from some of our previous wine tour adventures. We create memories that last a lifetime with our wine customized tasting experiences. </h5>
          <img src="../assets/images/title-shape.png" alt="Image" class="title-shape" /></div>
        {/* end section-title */} 
      </div>
      {/* end col-12 */}
      <div className="col-12 wow fadeIn">
        <ul className="photo-gallery">
          <li>
            <figure> <a href="../assets/images/gallery01.jpg" data-fancybox><img src="../assets/images/gallery01.jpg" alt="Image" /></a> </figure>
          </li>
          <li>
            <figure> <a href="../assets/images/gallery02.jpg" data-fancybox><img src="../assets/images/gallery02.jpg" alt="Image" /></a> </figure>
          </li>
          <li>
            <figure> <a href="../assets/images/gallery03.jpg" data-fancybox><img src="../assets/images/gallery03.jpg" alt="Image" /></a> </figure>
          </li>
          <li>
            <figure> <a href="../assets/images/gallery04.jpg" data-fancybox><img src="../assets/images/gallery04.jpg" alt="Image" /></a> </figure>
          </li>
          <li>
            <figure> <a href="../assets/images/gallery05.jpg" data-fancybox><img src="../assets/images/gallery05.jpg" alt="Image" /></a> </figure>
          </li>
          <li>
            <figure> <a href="../assets/images/gallery06.jpg" data-fancybox><img src="../assets/images/gallery06.jpg" alt="Image" /></a> </figure>
          </li>
        </ul>
        {/* end photo-gallery */} 
      </div>
      {/* end col-12 */} 
    </div>
    {/* end row */} 
  </div>
  {/* end container */} 
</section>



    </div>


  );
}

export default Home;
