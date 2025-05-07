import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WhoWeAre from '@features/WhoweAre/WhoWeAre';
import OurTeam from '@features/OurTeam/OurTeam';
import Regulation from '@features/regulation/Regulation';
import Milestone from '@features/Milestone/MileStone';
// import './About-us.css';

function About_us() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="about-us-container">
      <section id="Who-We-are" className="about-section">
        <WhoWeAre />
        <hr />
      </section>
      <section id="Our-Teams" className="about-section">
        <OurTeam />
        <hr />
      </section>
      <section id="Government-Regulation" className="about-section">
        <Regulation />
        <hr />
      </section>
      <section id="Milestone" className="about-section">
        <Milestone />
        <hr />
      </section>
    </div>
  );
}

export default About_us;