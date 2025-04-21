import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const Heroslider = () => {

  const items = [
    {
      id: 1,
      title: 'DELICIOUS WINE',
      description: 'Your Perfect Wine Tour Companion!',
      imageUrl: '../assets/images/slide01.jpg',
      bookNow:'Book Now',
    },
    {
      id: 2,
      title: 'DELICIOUS WINE',
      description: '   Sip, Relax, and Ride in Limousine Luxury ',
      imageUrl: '../assets/images/slide02.jpg',
      bookNow:'Book Now'
    },

  ];



  return (
    <div className='hero-banner'>
    <OwlCarousel 
      className="owl-theme" 
      loop 
      margin={10} 
      autoplay="true"
      items={1} 
      animateOut="fadeOut" 
      animateIn="fadeIn"
    >
      {items.map(item => (
        <div className="item" key={item.id}>
          <img src={item.imageUrl} alt={item.title} />
          <div className="carousel-caption">
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <Link to="/reservation" className='bookbtn'>{item.bookNow}</Link>

          </div>
        </div>
      ))}
    </OwlCarousel>
    </div>
  )
}

export default Heroslider
