import React from 'react';
import { Link } from 'react-router-dom';

const RussianRiver = () => {
  return (
    <div>
    <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
            <h1>RUSSIAN RIVER VALLEY </h1>
            <h6>
            ROLLING HILLS - ANCIENT REDWOODS
      </h6>
        </div>
    </header>
    <section className="content-section no-btm-space" data-background="#f5f1ea">
        <div className="container">
        
            <section className="content-section no-spacing">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 wow fadeIn">
                        <Link to="/russian_river_valley">
                                <div className="menu-pack-box">
                                    <figure>
                                        {" "}
                                        <img src="../assets/images/menu-pack-thumb05.jpg" alt="Image" />{" "}
                                    </figure>
                                    <div className="content">
                                        <h5>Russian River Valley Wine Tours</h5>
                                        <ul>
                                            <li>
                                            russian river valley rolling hills - ancient redwoods…
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end content */}
                                </div>
                          </Link>
                            {/* end menu-pack-box */}
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeIn">
                        <Link to="/san_francisco_to_russian_river_valley_wine_tours">
                                <div className="menu-pack-box">
                                    <figure>
                                        {" "}
                                        <img src="../assets/images/menu-pack-thumb10.jpg" alt="Image" />{" "}
                                    </figure>
                                    <div className="content">
                                        <h5>San Francisco To Russian River Valley Wine Tours</h5>
                                        <ul>
                                            <li>
                                            Russian River Wine Tours - Premier Wine Regions Pinot Noir - Popular Wine – 9 Hour Day – The Russian River Valley Is Quickly Becoming…
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </Link>
                        </div>



                    </div>

                </div>

            </section>
        </div>

    </section>
</div>
  )
}

export default RussianRiver
