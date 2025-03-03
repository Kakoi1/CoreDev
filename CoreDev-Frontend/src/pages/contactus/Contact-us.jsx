import { color } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BiLocationPlus, BiMailSend, BiLogoFacebook, BiMapAlt, BiSolidDirectionRight   } from "react-icons/bi";
import "./Contact-us.css";

const ContactInfo = () => {
  const details = [
    {
      island: "Luzon",
      address: "4th Floor DACCO MPC Building #40 Anabu Road Anabu II-B City of Imus, Cavite",
      tel: "(046) - 501 6596",
    },
    {
      island: "Visayas",
      address: "96 J. Alcantara Street, Brgy. Sambag 1, Cebu City",
      tel: "(032) - 328-2694 GLOBE | (032) - 234-5954 PLDT",
    },
    {
      island: "Mindanao",
      address: "11B, Cherry Tree Street, Palm Drive, Buhangin Davao City, Davao Del Sur",
      tel: "(082) - 233 9306",
    },
  ];

  return (
    <div className="contactWrap">
      <div className="contact-container">
        {details.map((item, index) => (
          <div className="contact-card" key={index}>
            <div className="icon1"><BiLocationPlus /></div>
            <div className="contact-details">
              <h4>{item.island} Branch:</h4>
              <p className="address">{item.address}</p>
              <p className="tel">Tel No: {item.tel}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="extra-contact">
        <div className="contact-item">
          <div className="icon1">
            <BiMailSend className="icon" />
          </div>
         <div className="contact-details">
            <h4>Email: </h4>
            <a href="mailto:info@coredev.ph">info@coredev.ph</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon1">
            <BiLogoFacebook className="icon" />
          </div>
          <div className="contact-details">
          <h4>Facebook: </h4>
          <a href="https://www.facebook.com/coredev/" target="_blank" rel="noopener noreferrer">
            https://www.facebook.com/coredev/
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [address, setAddress] = useState('');
  const [map, setMap] = useState(null);

  const locations = [
    { id: 1,  cid: '9153839079113836537', otherNmae: 'Main Branch',name: 'CoreDev Solutions Inc.', position: { lat: 10.298937561572044, lng: 123.8892060572453 } },
    { id: 2,  cid: '17502278350547099942', otherNmae: 'Mindanao Branch',name: 'coreDev Solutions Inc - Davao', position: { lat: 7.108080517350672, lng: 125.61502033701797} },
    { id: 3, cid: '18355226061558763366', otherNmae: 'Luzon Branch',name: 'coreDev Solutions Inc - Cavite', position: { lat: 14.385910117402625, lng: 120.94084551047905 } },
  ];

  const getAddressFromCoordinates = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_API_KEY}`
      );
      const data = await response.json();
      if (data.results && data.results[0]) {
        setAddress(data.results[0].formatted_address); 
      } else {
        setAddress('Address not found');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress('Error fetching address');
    }
  };


  const handleButtonClick = (location) => {
    setSelectedMarker(location);
    map.setCenter(location.position); 
    getAddressFromCoordinates(location.position.lat, location.position.lng);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: locations[0].position,
        zoom: 15,
      });
      const minZoom = 15; 
      const maxZoom = 20;
      mapInstance.addListener('zoom_changed', () => {
        const currentZoom = mapInstance.getZoom();
    
        // Prevent zooming out beyond minZoom
        if (currentZoom < minZoom) {
          mapInstance.setZoom(minZoom);
        }
    
        // Optional: Prevent zooming in beyond maxZoom
        if (currentZoom > maxZoom) {
          mapInstance.setZoom(maxZoom);
        }
      });
      setMap(mapInstance); 


      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: location.position,
          map: mapInstance,
          label: {
            text: location.name,
            color: "black",
            fontWeight: "bold",
            fontSize: "12px", // Adjust size
            className: "custom-label", // Add CSS class
          },
          title: location.name,
        });
      
        marker.addListener("click", () => {
          setSelectedMarker(location);
          getAddressFromCoordinates(location.position.lat, location.position.lng);
        });
      });

      // Set the first location as selected by default
      setSelectedMarker(locations[0]);
      getAddressFromCoordinates(locations[0].position.lat, locations[0].position.lng);
    };


    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
      <div className='contactCont'>
        <h2>You can reach us through</h2>
      <ContactInfo/>

        <h2>Where To Find Us.</h2>
        <div className='mapCont'>

        <div className="tab-container" style={{ marginBottom: '20px', float: 'right' }}>
          {locations.map((location) => (
            <button
              key={location.id}
              className={`tab-button ${selectedMarker?.id === location.id ? "active" : ""}`}
              onClick={() => handleButtonClick(location)}
              style={{ margin: '5px', padding: '10px', fontSize: '16px' }}
            >
              {location.otherNmae}
            </button>
          ))}
        </div>
        <div className='mapBack'>
            <div id="map" style={{ height: '500px', width: '100%' }}></div>
        </div>
        {selectedMarker && (
          <div className='contDetails' style={{
            position: 'relative',
            top: '-490px',
            left: '20px',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
            width: '40%'
          }}>
            <h3>{selectedMarker.name}</h3>
            <hr />
            <p>Address: {address}</p>
            
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${selectedMarker.name}&travelmode=driving`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', margin: '10px 0', color: '#007BFF' }}
            >
              Get Directions <BiSolidDirectionRight />
            </a>
            <a
              href={`https://www.google.com/maps?ll=${selectedMarker.position.lat},${selectedMarker.position.lng}&cid=${selectedMarker.cid}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', margin: '10px 0', color: '#007BFF' }}
            >
             View Larger Map <BiMapAlt />
            </a>
            <button className='close-button' onClick={() => setSelectedMarker(null)} style={{ marginTop: '10px' }}>
              Close
            </button>
            
          </div>
        )}
        </div>
      </div>
    );
};

export default Contact;