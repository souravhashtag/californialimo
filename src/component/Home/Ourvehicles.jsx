import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import vehiclesData from '../../assets/Data/vehiclesData.json';

const Ourvehicles = () => {
  const location = useLocation();
  const currentTab = location.pathname
    .replace('/executivesprinters', 'sprinters')
    .replace('/minicoaches', 'minicoaches')
    .replace('/limocoaches', 'limocoaches')
    .replace('/executivesuvs', 'executivesuvs')
    .replace('/sedan', 'sedan');

  const [activeTab, setActiveTab] = useState('sprinters');
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    setVehicles(vehiclesData.vehicles);
  }, []);

  useEffect(() => {
    if (vehicles.length > 0) {
      const validTab = vehicles.find(vehicle => vehicle.id === currentTab) ? currentTab : 'sprinters';
      setActiveTab(validTab);
    }
  }, [currentTab, vehicles]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = (vehicle) => {
    return vehicle.content.map((item, index) => (
      <div key={index} className="zigzag__item zigzag--align-items-center zigzag--vw600-float zigzag--vw200-flex">
        <div className="zigzag__image">
          <img src={item.image} loading="lazy" alt="" width={683} height={460} />
        </div>
        <div className="zigzag__text">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span>{item.passengers}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-5 our_vch">
      <ul className="nav nav-tabs" role="tablist">
        {vehicles.map((vehicle) => (
          <li className="nav-item" role="presentation" key={vehicle.id}>
            <button
              className={`nav-link ${activeTab === vehicle.id ? 'active' : ''}`}
              onClick={() => handleTabClick(vehicle.id)}
              type="button"
              role="tab"
            >
              {vehicle.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content mt-3">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className={`tab-pane fade ${activeTab === vehicle.id ? 'show active' : ''}`}
            role="tabpanel"
          >
            <section className="content width-df | zigzag zigzag--vw200-alt-bg-color">
              {renderContent(vehicle)}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourvehicles;
