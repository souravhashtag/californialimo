import React from 'react'
import { Link } from 'react-router-dom';


const Napavalley = () => {
  return (
    <div>
    <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
            <h1>Our Services</h1>
            <h6>
         Services we offer
      </h6>
        </div>
    </header>
    <section className="content-section no-btm-space" data-background="#f5f1ea">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 wow fadeIn">
                    <div className="section-title">
                        <h2>NAPA VALLEY WINE TOURS</h2>
                        <h5>
              Our wine tours include the popular wines of Napa, small boutique
              wineries of the Russian River Valley and more. We deliver you to
              the valley of vineyards where grapes are grown to perfection and
              California wine is made.
            </h5>
                        <img src="../assets/images/title-shape.png" alt="Image" className="title-shape" />
                    </div>

                </div>

            </div>
            <section className="content-section no-spacing">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 wow fadeIn">
                        <Link to="/napavalleytour">
                                <div className="menu-pack-box">
                                    <figure>
                                        {" "}
                                        <img src="../assets/images/menu-pack-thumb01.jpg" alt="Image" />{" "}
                                    </figure>
                                    <div className="content">
                                        <h5>Napa Valley Limo Wine Country Tour</h5>
                                        <ul>
                                            <li>
                                                Napa is the heart and soul of California Wine Country. Napa Valley is home to some of the most famous wineries in the world. Whether you are searching for the perfect Cabernet or a light and fresh Chardonnay, Napa has it all. Visiting Napa is an experience
                                                you will never forget.
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end content */}
                                </div>
                            </Link>
                            {/* end menu-pack-box */}
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeIn">
                        <Link to="/napavally_ava_listings">
                                <div className="menu-pack-box">
                                    <figure>
                                        {" "}
                                        <img src="../assets/images/menu-pack-thumb05.jpg" alt="Image" />{" "}
                                    </figure>
                                    <div className="content">
                                        <h5>Napa Valley AVA Listings</h5>
                                        <ul>
                                            <li>
                                                napa valley ava - 16 sub-avas world-class wine…
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                           </ Link >
                        </div>



                    </div>

                </div>

            </section>
        </div>

    </section>
</div>
  )
}

export default Napavalley
