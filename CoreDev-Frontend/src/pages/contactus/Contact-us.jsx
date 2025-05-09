import { useEffect, useState } from "react";
import {
    MdKeyboardArrowRight,
    MdKeyboardArrowDown,
    MdClose,
} from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import {
    LuMail,
    LuFacebook,
    LuSquareArrowOutUpRight,
    LuPhone,
    LuMapPin,
} from "react-icons/lu";
import { motion } from "framer-motion";
import "./Contact-us.css";

const ContactInfo = () => {
  return (
    <div className="contactWrap">
      <div className="extra-contact">
        <div className="contact-item">
          <div className="icon1">
            <LuMail className="icon" />
          </div>
          <div className="contact-details">
            <h4>Email: </h4>
            <a href="mailto:info@coredev.ph">info@coredev.ph</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon1">
            <LuFacebook className="icon" />
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

const locations = [
    {
        id: 3,
        cid: "18355226061558763366",
        shortAddress: "Manila",
        address:
            "4th Floor DACCO MPC Building #40 Anabu Road Anabu II-B City of Imus, Cavite",
        branch: "Luzon Branch",
        name: "coreDev Solutions Inc. - Cavite",
        tel: "(032) - 328-2694 GLOBE | (032) - 234-5954 PLDT",
        position: { lat: 14.385910117402625, lng: 120.94084551047905 },
    },
    {
        id: 1,
        cid: "9153839079113836537",
        shortAddress: "Cebu City",
        address: "96 J. Alcantara Street, Brgy. Sambag 1, Cebu City",
        branch: "Visayas Branch - Main",
        name: "CoreDev Solutions Inc. - Main",
        tel: "(082) - 233 9306",
        position: { lat: 10.298937561572044, lng: 123.8892060572453 },
    },
    {
        id: 2,
        cid: "17502278350547099942",
        shortAddress: "Davao City",
        address:
            "11B, Cherry Tree Street, Palm Drive, Buhangin Davao City, Davao Del Sur",
        branch: "Mindanao Branch",
        name: "coreDev Solutions Inc. - Davao",
        tel: "(046) - 501 6596",
        position: { lat: 7.108080517350672, lng: 125.61502033701797 },
    },
];

const Contact = () => {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [address, setAddress] = useState("");
    const [showDetails, setShowDetails] = useState(true);
    const [map, setMap] = useState(null);

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
    } else {
      setSelectedMarker(location);
      setShowDetails(true);
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

    window.initMap = () => {
      try {
        const mapElement = document.getElementById('map');
        if (!mapElement) {
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
            getAddressFromCoordinates(location.position.lat, location.position.lng);
          });
        });

        setSelectedMarker(locations[1]);
        getAddressFromCoordinates(locations[1].position.lat, locations[1].position.lng);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

    return (
        <div className="contactCont">
            <h2>
                <span>Get in </span> Touch with us
            </h2>
            <p className="quote">
                We&apos;re here to help and answer any questions you might have.
                We look forward to hearing from you.
            </p>
            <ContactInfo />

            <h2>
                <span>Where</span> To Find Us.
            </h2>
            <p className="location-description">
                Find the coreDev Solutions Branch nearest to you
            </p>
            <div className="mapCont">
                <div
                    className="tab-container"
                    style={{ marginBottom: "-15px" }}
                >
                    {locations.map((location) => (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={location.id}
                            className={`tab-button ${
                                selectedMarker?.id === location.id
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => handleButtonClick(location)}
                            style={{
                                margin: "5px",
                                padding: "10px",
                                fontSize: "16px",
                            }}
                        >
                            {location.otherNmae}
                        </motion.button>
                    ))}
                </div>
                {/* Vertical Tab Navigation */}
                <div className="side-tab">
                    <div className="side-tab-head">
                        <h2>Our Locations</h2>
                        <p>Select a branch to view details</p>
                    </div>
                    <div className="tabs">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className={`tab ${
                                    selectedMarker?.id === location.id
                                        ? " active"
                                        : ""
                                }`}
                                onClick={() => handleButtonClick(location)}
                            >
                                <div className="icon-location">
                                    <LuMapPin />
                                </div>
                                <div className="tab-text">
                                    <h4>{location.branch}</h4>
                                    <p>{location.shortAddress}</p>
                                </div>
                                <div className="icon-arrow">
                                    {selectedMarker?.id === location.id ? (
                                        <MdKeyboardArrowRight />
                                    ) : (
                                        <MdKeyboardArrowDown />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mapBack">
                    <div id="map"></div>

                    {showDetails && selectedMarker && (
                        <div className="contDetails">
                            <div className="header">
                                <h3>{selectedMarker.name}</h3>
                                <MdClose onClick={handleCloseDetails} />
                            </div>
                            <div className="description">
                                <div className="contDetails-info">
                                    <div className="row">
                                        <LuMapPin />
                                        <p>
                                            Address:
                                            <br />
                                            <span>
                                                {selectedMarker.address}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <LuPhone />
                                        <p>
                                            Tel No: <br />
                                            <span>{selectedMarker.tel}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                            {/* Address and Tel for contDetails (mobile view only) */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;