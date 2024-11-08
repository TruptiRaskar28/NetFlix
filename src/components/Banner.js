import React from "react";
import './Banner.css';
import BannerImage from '../Banner.jpg'; // Adjust path based on location

function Banner() {
  return (
    <section className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="banner-content">
        <h1>Enjoy Movies & TV Shows</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <button className="btn-primary">Get Started</button>
      </div>
    </section>
  );
}

export default Banner;
