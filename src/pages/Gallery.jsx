import React from 'react'

const Gallery = () => {
  return (
    <div>
        <header className="page-header" data-stellar-background-ratio="0.8">
    <div className="container">
      <h1>Our Gallery</h1>
      <h6> View our gallery to see photos from some of our previous wine tour adventures. We create memories that last a lifetime with our wine customized tasting experiences. </h6>
    </div>
  </header>

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
  )
}

export default Gallery
