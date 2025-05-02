import "./Partners.css";
import { motion } from "framer-motion";

const partners = [
    { name: "Globe", imgs: "globe.png", link: "https://www.globe.com.ph" },
    { name: "Smart", imgs: "smart.png", link: "https://smart.com.ph" },
    { name: "Dragon Pay", imgs: "dragon.png", link: "https://www.dragonpay.ph" },
    { name: "Pesopay", imgs: "peso.png", link: "https://www.pesopay.com" },
    { name: "UnionBank", imgs: "ub.png", link: "https://www.unionbankph.com" },
];

function Partners() {
    return (
        <div className="partners-container">
            <h2><span>Development</span> Partners</h2>
            <div className="partners-grid">
                {partners.map((partner, index) => (
                    <motion.div key={index} className="partner-card">
                        <a href={partner.link} target="_blank" rel="noopener noreferrer">
                            <img src={`src/assets/${partner.imgs}`} alt={partner.name} className="partner-logo" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Partners;
