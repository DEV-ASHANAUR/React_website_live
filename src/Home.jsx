import React from 'react';
import { NavLink } from 'react-router-dom';
import web from './img/images.png';
import Common from './Common';
const Home = () => {
  return (
      <>
        <Common 
        name="Grow Your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
        />
      </>
  );
}
export default Home;