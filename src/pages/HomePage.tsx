import React from 'react';

const HomePage = (): JSX.Element => {
  return <div className="home"> 
  {/* <img className="home__logo" src="" alt="logo"/> */}
  Home Page
    <a href="/camera" className="home__link">   <i className="fas fa-camera"></i>  </a>
  </div>
};

export default HomePage;
