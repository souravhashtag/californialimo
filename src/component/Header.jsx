import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let headerClasses = ['header'];
  if (scrolled) {
    headerClasses.push('scrolled');
  }

    return (
        <>
            <div className="first-transition"></div>
            {/* end first-transition */}
            <div className="page-transition"></div>
            {/* end page-transition */} 
            {/* end search-box */}
          
            {/* end side-widget */}
            <header className={headerClasses.join(' ')}>

            <Navbar expand="lg" className="bg-body-tertiary">
  <Navbar.Brand as={Link} to="/">
    <img src="../assets/images/logo.png" alt="Logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <NavDropdown title="Our Tours" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/napavalley">Napa Valley Wine Tours</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/sonomavalley">Sonoma Valley Wine Tours</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/alexandervalley">Alexander Valley Wine Tours</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/russianriver">Russian River Wine Tours</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/drycreek">Dry Creek Wine Tours</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/howellmountain">Howell Mountain Wine Tours</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/diamondmountain">Diamond Mountain Wine Tours</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/privatenorthern">Private Wine Tours</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/spring">Spring Mountain Wine Tours</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/discovercoombsville">Coombsville Tours</NavDropdown.Item>

      </NavDropdown>
      <Nav.Link as={Link} to="/reservation">Reservation</Nav.Link>
      <NavDropdown title="Fleet" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/executivesprinters">Executive Sprinters</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/minicoaches">Mini Coaches</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/limocoaches">Limo Coaches</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/executivesuvs">Executive SUVs</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/sedan">Sedan</NavDropdown.Item>

      </NavDropdown>
   
      <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>

  <div className="hamburger-icon" onClick={toggleSidebar}>
        ☰
      </div>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
       <p>Fall in love with California’s beautiful local wineries in a memorable style. We provide premium and elegant winery limousine service across California. Each expressing the unique terroir of the property.</p>
      
       <div className='maps'>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51952563.63570164!2d-121.950824!3d37.367766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8bebd2bf504e53bb%3A0xf29be080bd07bfef!2sEcko%20Worldwide%20Transportation%20-%20Luxury%20Limousine%20Chauffeured%20Service%20In%20Santa%20Clara!5e0!3m2!1sen!2sin!4v1724739183050!5m2!1sen!2sin"
        width="300"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      </div>
      <div className='adrs'>
  <h6>Address</h6>
  <p>2576 Lafayette St, Santa Clara, CA 95050, United States.</p>
  <p>
    <a 
      onClick={() => window.location.href = 'tel:8773593256'} 
      style={{ color: 'white', cursor: 'pointer' }}
    >
      +1 877-359-3256
    </a>
  </p>
  <p>
    <a 
      onClick={() => window.location.href = 'mailto:res@californialimowinetours.com'} 
      style={{ cursor: 'pointer' }}
    >
      res@californialimowinetours.com
    </a>
  </p>
</div>

<h6 class="widget-title">FOLLOW US</h6>
<ul class="social-media">
        <li><a href="https://www.facebook.com/California-Limo-Wine-Tours-102500799056422" aria-label="facebook" target="_blank"><i class="lni lni-facebook-filled"></i></a></li>
        <li><a href="https://twitter.com/wine_limo" aria-label="twitter" target="_blank"><svg class="svgicon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a></li>
        <li><a href="https://www.instagram.com/california_limowinetour/" aria-label="instagram" target="_blank"><i class="lni lni-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com/company/california-limo-wine-tours1/" aria-label="instagram" target="_blank"><i class="lni lni-linkedin"></i></a></li>

      </ul>
      
      </div>


 {/* <div className="hamburger">
                    <div id="hamburger"> 
                        <span></span> 
                        <span></span> 
                        <span></span> 
                    </div>
                    <div id="cross"> 
                        <span></span> 
                        <span></span> 
                    </div>
                </div>   */}
   {/* <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? 'Close' : 'Open'}
      </button>
      <nav className="menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div> */}

</Navbar>                       


            </header>
            {/* end navbar */}
        </>
    );
}

export default Header;
