import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './component/Header';
import Footer from './component/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Napavalley from './pages/Napavalley';
import SonomaValley from './pages/SonomaValley';
import AlexanderValley from './pages/AlexanderValley';
import RussianRiver from './pages/RussianRiver';
import DryCreek from './pages/DryCreek';
import HowellMountain from './pages/HowellMountain';
import DiamondMountain from './pages/DiamondMountain';
import PrivateNorthern from './pages/PrivateNorthern';
import SpringMountain from './pages/SpringMountain';
import DiscoverCoombsville from './pages/DiscoverCoombsville';
import NapavalleyTour from './pages/NapavalleyTour';
import Napavally_ava_listings from './pages/Napavally_ava_listings';
import ExecutiveSprinters from './pages/ExecutiveSprinters';
import MiniCoaches from './pages/MiniCoaches';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Reservation from './pages/Reservation';
import Russian_river_valley from './pages/Russian_river_valley';
import San_francisco_to_russian_river_valley_wine_tours from './pages/San_francisco_to_russian_river_valley_wine_tours';
import Dry_creek_wine_tours from './pages/Dry_creek_wine_tours';
import San_francisco_to_dry_creek_valley_wine_tours from './pages/San_francisco_to_dry_creek_valley_wine_tours';



function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='napavalley' element={<Napavalley />} />
          <Route path='napavalleytour' element={<NapavalleyTour />} />
          <Route path='napavally_ava_listings' element={<Napavally_ava_listings />} />
          <Route path='sonomavalley' element={<SonomaValley />} />
          <Route path='alexandervalley' element={<AlexanderValley/>} />
          <Route path='russianriver' element={<RussianRiver/>} />
          <Route path='russian_river_valley' element={<Russian_river_valley/>} />
          <Route path='san_francisco_to_russian_river_valley_wine_tours' element={<San_francisco_to_russian_river_valley_wine_tours />} />
          <Route path='drycreek' element={<DryCreek />} />
          <Route path='dry_creek_wine_tours' element={<Dry_creek_wine_tours />} />
          <Route path='san_francisco_to_dry_creek_valley_wine_tours' element={<San_francisco_to_dry_creek_valley_wine_tours />} />
          <Route path='howellmountain' element={<HowellMountain />} />
          <Route path='diamondmountain' element={<DiamondMountain />} />
          <Route path='privatenorthern' element={<PrivateNorthern />} />
          <Route path='spring' element={<SpringMountain />} />
          <Route path='minicoaches' element={<MiniCoaches />} />
          <Route path='discovercoombsville' element={<DiscoverCoombsville />} />
          <Route path="executivesprinters" element={<ExecutiveSprinters />} />
          
          <Route path="reservation" element={<Reservation />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />

        </Routes>

        <Footer />
      </BrowserRouter>

  
    </>
  );
}

export default App;
