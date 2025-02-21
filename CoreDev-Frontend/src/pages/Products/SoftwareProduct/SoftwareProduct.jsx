import { motion } from "framer-motion";
import "./SoftwareProduct.css";
import { useLocation, useNavigate } from "react-router-dom";
import { RiCodepenFill } from "react-icons/ri";

export const SoftwareProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const softwareProduct = location.state;
    return (
        <div className="software-product">
            <motion.div
                layout
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    layout: { duration: 0.3 },
                    type: "",
                    stiffness: 200,
                    damping: 10,
                    duration: 0.3,
                    delay: 1 * 0.2,
                }}
                className="project-detail"
            >
                <div className="image-wrap">
                    <img
                        className="software-image"
                        src={[softwareProduct.pic]}
                        alt={softwareProduct.title}
                    />
                    <div className="project-info">
                        <h4>{softwareProduct.title}</h4>
                        <p>{softwareProduct.description}</p>
                    </div>
                </div>
                <button className="back-button" onClick={() => navigate(-1)}>
                    Back to Software Products
                </button>
                <div className="proj-wrap">
                    <div className="Iac-wrap">
                        <motion.div
                            layout
                            className="feature-wrap"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <RiCodepenFill className="icon" />
                            <h4>General Features</h4>
                            <ul>
                                {softwareProduct.feature.map(
                                    (itemFeature, index) => (
                                        <li key={index}>{itemFeature}</li>
                                    )
                                )}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SoftwareProduct;
