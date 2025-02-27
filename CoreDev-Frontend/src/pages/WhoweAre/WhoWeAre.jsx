import React from 'react';
import './WhoWeAre.css';
import { BsBinocularsFill } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import { IoDiamondOutline } from 'react-icons/io5';
import coreLogo from '../../assets/logoCore.png';
import { motion, useInView } from 'framer-motion';

function WhoWeAre() {
  // Animation variants for fade-in and slide-up effect
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='About-Cont'>
      {/* Image and Text Section */}
      <motion.div
        className='imageWrap'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUpVariants}
      >
        <div className='textcont'>
          <h2>WHO WE ARE</h2>
          <hr />
          <div style={{ width: '80%' }}>
            <p>
              We are a leading software solutions provider based in the Philippines. Over the past decade, we've consistently delivered high-quality services and solutions to our clients, forging partnerships with 12 billionaire cooperatives and over 100 small and medium cooperatives, rural banks, and financial institutions. <br /> <br />
              Even in the face of the pandemic, we've continued to innovate, launching products designed to support our partner clients in adapting to the 'new normal.' Our primary objective is to offer user-friendly, secure, and hassle-free software to the clients of our cooperative and business partners, empowering them to thrive in these challenging times. <br /><br />
              In addition to our software solutions, we also provide a wide range of products and services, including computer hardware, peripherals, servers, phones, tablets, and other essential tech requirements to meet the diverse needs of our clients.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Credo Section */}
      <motion.div
        className='credoCont'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUpVariants}
      >
        <div className='credo-top'>
          <motion.div
                whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className='vission'>
            <BsBinocularsFill />
            <h4>Our Vision</h4>
            <p>To be the leading and most trusted service oriented software solution provider GLOBALLY.</p>
          </motion.div>
          <motion.div 
                whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className='mission'>
            <TbTargetArrow />
            <h4>Our Mission</h4>
            <p>To provide excellent service and quality products to our clients, thus helping them to be more efficient and competitive</p>
          </motion.div>
        </div>
        <motion.div 
                whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className='values'>
          <IoDiamondOutline />
          <h4>Our Credo</h4>
          <p>
            We are a versatile company of future-forward thinkers, committed to innovate the future of our clients. <br /> We seek to provide our clients with the most advanced, game-changing solutions and experiences. <br /> We are more than a software provider. We seek to renovate the operation of our clients in this ever-changing world.
          </p>
        </motion.div>
      </motion.div>

      {/* Story Section */}
      <motion.div
        className='storyCont'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.4 }}
        variants={fadeInUpVariants}
      >
        <div className='storyContent'>
          <div className='logoCont'>
            <h4>OUR STORY</h4>
            <img src={coreLogo} alt='logo' />
          </div>
          <div className='story-content'>
            <p>
              In the 1980s, we introduced our initial accounting software called 'iAccs' (Integrated Accounting System). It started as a DOS-based application and quickly became a valuable tool for Cooperatives and Rural Banks, helping them automate their credit and savings operations and integrate them into their accounting systems. <br /> <br />
              As technology evolved and our clients' needs grew, we continued to develop our software. In 2013, we launched 'iAccs 2013,' marking a turning point in our journey. We transformed from a software provider into a service-oriented solutions provider and established coreDev Solutions Incorporated, which operates around the clock to serve our clients. <br /><br />
              At coreDev Solutions, we offer a wide range of solutions and prioritize customer satisfaction. Our goal is to innovate and provide safe, reliable, and stable services to our clients, making each client our top priority. While our origins lie in accounting systems, we have expanded to create and customize various software, hardware, network infrastructure, web hosting, and offer technical consultancy to meet the changing needs of our customers.
              <br /><br />
              Our mission is to shape a future where technology seamlessly aligns with our clients' diverse needs. At coreDev Solutions Incorporated, we're dedicated to exceeding expectations and pushing the boundaries of innovation.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default WhoWeAre;