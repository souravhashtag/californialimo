import React from 'react'
import { Link } from 'react-router-dom';

const DryCreek = () => {
  return (
    <div>
    <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
            <h1>DRY CREEK VALLEY - TASTING TOUR</h1>
            <h6>AMERICAN VITICULTURAL AREAS (AVAS) </h6>
        </div>
    </header>
    <section className="content-section no-btm-space" data-background="#f5f1ea">
        <div className="container">
        
            <section className="content-section no-spacing">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 wow fadeIn">
                        <Link to="/dry_creek_wine_tours">
                                <div className="menu-pack-box">
                                    <figure>
                                        {" "}
                                        <img src="../assets/images/dry.jpg" alt="Image" />{" "}
                                    </figure>
                                    <div className="content">
                                        <h5>Dry Creek Valley Wine Tours</h5>
                                        <ul>
                                            <li>
                                            dry creek valley - tasting tour american viticultural…
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end content */}
                                </div>
                            </Link>
                            {/* end menu-pack-box */}
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeIn">
                        <Link to="/san_francisco_to_dry_creek_valley_wine_tours">
                                <div className="menu-pack-box">
                                    <figure>
                                        {" "}
                                        <img src="../assets/images/dry2.jpg" alt="Image" />{" "}
                                    </figure>
                                    <div className="content">
                                        <h5>San Francisco To Dry Creek Valley Wine Tours</h5>
                                        <ul>
                                            <li>
                                            DRY CREEK VALLEY - TASTING WINE 28 WINERIES - PLENTY OF TASTING OPPORTUNITIES – 9 HOUR DAY – We can whisk you away in one…
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

export default DryCreek
