import "./Software.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import IAccs from "./SoftwareProduct/iAccs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { softwareProducts } from "./data";

const Software = () => {
    const navigate = useNavigate();
    const [showFeature, setShowFeature] = useState(false);

    return (
        <div className="SoftwareContainer">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "",
                    stiffness: 200,
                    damping: 10,
                    delay: 1 * 0.2,
                }}
                className="SoftWrap"
            >
                <div className="IacWrap">
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="iaccs"
                        src="/assets/iacss-logo.png"
                        alt=""
                    />
                    <div>
                        <motion.h4
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 1.0 }}
                            transition={{ duration: 0.3 }}
                            className="iaccs-title"
                        >
                            iAccs 2013
                        </motion.h4>
                        <p>
                            The Most Trusted and Secured Integrated accounting
                            and banking system designed for bank and cooperative{" "}
                            needs for more than 3 decades!
                        </p>
                        <button
                            className="IacWrap-btn"
                            onClick={() => setShowFeature(!showFeature)}
                        >
                            {showFeature ? (
                                <>
                                    Explore Less
                                    <IoIosArrowUp className="icon " />
                                </>
                            ) : (
                                <>
                                    Explore More
                                    <IoIosArrowDown className="icon " />
                                </>
                            )}
                        </button>
                        <AnimatePresence>
                            {showFeature && <IAccs />}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            <h1 className="product-title">
                <span>Our</span> Products
            </h1>
            <div className="pastProj">
                {softwareProducts.map((secondItem, index) => (
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
                        key={index}
                        className="projectDetail"
                    >
                        <div className="projWrap">
                            <div className="">
                                <motion.img
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                    className="iacc"
                                    src={secondItem.picUrl}
                                    alt={secondItem.title}
                                />
                                <div>
                                    <h4>{secondItem.title}</h4>
                                    <p>{secondItem.description}</p>
                                </div>
                                <div>
                                    <button
                                        className="IacWrap-btn"
                                        onClick={() =>
                                            navigate(
                                                `/products/software/${encodeURIComponent(
                                                    secondItem.title
                                                )}`,
                                                {
                                                    state: {
                                                        pic: secondItem.picUrl,
                                                        title: secondItem.title,
                                                        description:
                                                            secondItem.description,
                                                        feature:
                                                            secondItem.feature,
                                                    },
                                                }
                                            )
                                        }
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default Software;
