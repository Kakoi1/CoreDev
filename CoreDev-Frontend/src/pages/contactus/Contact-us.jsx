import { useEffect, useState } from 'react';
import { BiMailSend, BiLogoFacebook, BiMap, BiSolidDirectionRight, BiMapAlt, BiPhone } from "react-icons/bi"; // Removed unused BiSolidRightArrow
import {
    MdClose,
} from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import {
    LuSquareArrowOutUpRight,
} from "react-icons/lu";
import "./Contact-us.css";

const ContactInfo = () => {
  return (
    <div className="contactWrap">
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
  const [expandedTab, setExpandedTab] = useState(null);
  const [address, setAddress] = useState('');
  const [showDetails, setShowDetails] = useState(true);
  const [map, setMap] = useState(null);
  const [mapError, setMapError] = useState(null);

  const locations = [
    { id: 3, cid: '18355226061558763366', address: "4th Floor DACCO MPC Building #40 Anabu Road Anabu II-B City of Imus, Cavite", otherName: 'Luzon Branch', name: 'coreDev Solutions Inc. - Cavite', tel: "(032) - 328-2694 GLOBE | (032) - 234-5954 PLDT", position: { lat: 14.385910117402625, lng: 120.94084551047905 } },
    { id: 1, cid: '9153839079113836537', address: "96 J. Alcantara Street, Brgy. Sambag 1, Cebu City", otherName: 'Visayas Branch - Main', name: 'CoreDev Solutions Inc. - Main', tel: "(082) - 233 9306", position: { lat: 10.298937561572044, lng: 123.8892060572453 } },
    { id: 2, cid: '17502278350547099942', address: "11B, Cherry Tree Street, Palm Drive, Buhangin Davao City, Davao Del Sur", otherName: 'Mindanao Branch', name: 'coreDev Solutions Inc. - Davao', tel: "(046) - 501 6596", position: { lat: 7.108080517350672, lng: 125.61502033701797 } },
  ];

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

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
    if (selectedMarker?.id === location.id) {
      setShowDetails(!showDetails);
      setExpandedTab(showDetails ? null : location.id); // Sync expandedTab with showDetails
    } else {
      setSelectedMarker(location);
      setShowDetails(true);
      setExpandedTab(location.id); // Expand the clicked tab
      if (map) {
        map.setCenter(location.position);
      }
      getAddressFromCoordinates(location.position.lat, location.position.lng);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => setMapError('Failed to load Google Maps script. Please check your API key or network connection.');

    window.initMap = () => {
      try {
        const mapElement = document.getElementById('map');
        if (!mapElement) {
          setMapError('Map container not found in the DOM.');
          return;
        }

        const mapInstance = new window.google.maps.Map(mapElement, {
          center: locations[1].position,
          zoom: 15,
        });

        const minZoom = 15;
        const maxZoom = 20;
        mapInstance.addListener('zoom_changed', () => {
          const currentZoom = mapInstance.getZoom();
          if (currentZoom < minZoom) mapInstance.setZoom(minZoom);
          if (currentZoom > maxZoom) mapInstance.setZoom(maxZoom);
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
              fontSize: "12px",
              className: "custom-label",
            },
            title: location.name,
          });

          marker.addListener("click", () => {
            setSelectedMarker(location);
            setExpandedTab(location.id);
            getAddressFromCoordinates(location.position.lat, location.position.lng);
          });
        });

        setSelectedMarker(locations[1]);
        setExpandedTab(locations[1].id);
        getAddressFromCoordinates(locations[1].position.lat, locations[1].position.lng);
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError('Failed to initialize Google Maps. Please try again later.');
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <div className='contactCont'>
      <h2><span>You can</span> reach us through</h2>
       <p className="quote">
                We&apos;re here to help and answer any questions you might have.
                We look forward to hearing from you.
            </p>
      <ContactInfo />

      <h2><span>Where</span> To Find Us.</h2>
        <p className="location-description">
                Find the coreDev Solutions Branch nearest to you
            </p>
      <div className='mapCont'>
        <div className='mapBack'>
          {mapError ? (
            <div className="map-error" style={{ height: '600px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
              <p style={{ color: 'red', fontSize: '16px', textAlign: 'center' }}>{mapError}</p>
            </div>
          ) : (
            <div id="map" style={{ height: '600px', width: '100%' }}></div>
          )}
          {showDetails && selectedMarker && (
            <div className='contDetails' style={{
              position: 'relative',
              top: '-590px',
              left: '20px',
              padding: '20px',
              borderRadius: '12px',
              background: '#2a2929d1',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              zIndex: 0,
              width: '45%',
              maxWidth: '500px'
            }}>
                 <div className="header">
                      <h3>{selectedMarker.name}</h3>
                      <MdClose onClick={handleCloseDetails} />
                  </div>
              <hr />
           <div className="map-button-wrapper">
                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${selectedMarker.name}&travelmode=driving`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoIosSend /> Get Directions
                </a>
                <a
                    href={`https://www.google.com/maps?ll=${selectedMarker.position.lat},${selectedMarker.position.lng}&cid=${selectedMarker.cid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LuSquareArrowOutUpRight /> View Larger Map
                </a>
            </div>
            </div>
          )}
        </div>

        {/* Vertical Accordion Tabs on the Right */}
        <div className="side-tab">
                <div className="side-tab-head">
                        <h2><span>Our</span> Locations</h2>
                        <p>Select a branch to view details</p>
                        <hr />
                    </div>
          {locations.map((location) => (
            <div key={location.id} className={`tab-item ${selectedMarker?.id === location.id ? 'active' : ''}`}>
              <button
                className={`tab-button ${selectedMarker?.id === location.id ? 'active' : ''}`}
                onClick={() => handleButtonClick(location)}
              >
                <BiMap className="tab-icon" />
                <span className="tab-title">{location.otherName}</span>
                <span className="tab-arrow">{expandedTab === location.id ? '▼' : '▶'}</span>
              </button>
              {expandedTab === location.id && (
                <div className="tab-content">
                  <div className="tab-section">
                    <span className="tab-label">Address</span>
                    <p>{location.address}</p>
                  </div>
                  <div className="tab-section">
                    <span className="tab-label">Contact</span>
                    {location.tel.split(' | ').map((tel, index) => (
                      <p key={index}><BiPhone className="contact-icon" /> {tel}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;