
import React, {useEffect, useMemo, useState} from 'react';
import teamPhoto from '../../assets/coreDev-Team-Edited-2.png';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { easeInOut, motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
function ParticlesComponent() {
        const navigate = useNavigate();
   const [init, setInit] = useState(false);
   useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log("Particles Loaded:", container);
  };

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: "#FFFFFF",
      },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 90,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);
  

  return (

    <div className="content-wrapper">
      <div className="photo-wrapper">
 

        <motion.span
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
          className="motion-text"
        >
          The Premier <br /> Software Solutions <br /> Provider in the <br /> Philippines.
          <br />
          <button onClick={() => navigate('/about/who-we-are')} className='leanBut'>Learn More</button>
        </motion.span>
             {/* <Particles
        id="tsparticles"
        options={options}
        particlesLoaded={particlesLoaded}
        className="particles-bg" // Add a CSS class
      /> */}
      </div>
    </div>

  
  );
}

export default ParticlesComponent;