import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import IAccs from "./iAccs";
import { useState } from "react";
import "../styles/Software.css";
import { RiCodepenFill } from "react-icons/ri";
import { Button } from "@components/ui";
import ProductInquiryForm from "../../shared/inquiry-form/components/InquiryForm";
import { getSoftwareProducts } from "../services/fetchSoftware.service";
import { useQuery } from "@tanstack/react-query";

export const SoftwareList = () => {
    const SOFTWAREKEY = "software";
    const [showFeature, setShowFeature] = useState(false);
    const [expandedProduct, setExpandedProduct] = useState(null);

    const { data } = useQuery({
        queryKey: [SOFTWAREKEY],
        queryFn: getSoftwareProducts,
    });

    const softwareProducts = Array.isArray(data?.data) ? data?.data : [];

    const cleanText = (text) => {
        const cleanedText = text
            .replace(/["/[\]]/g, " ")
            .trim()
            .split(',');
        console.log(cleanedText);
        return cleanedText;
    };

    const toggleDetails = (id) => {
        setExpandedProduct(expandedProduct === id ? null : id);
    };

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    // Split softwareProducts into two arrays for left and right columns
    const leftColumnProducts =
        softwareProducts &&
        softwareProducts.filter((_, index) => index % 2 === 0);
    const rightColumnProducts =
        softwareProducts &&
        softwareProducts.filter((_, index) => index % 2 !== 0);

    return (
        <div className="SoftwareContainer">
            <motion.div
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.2,
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
                        alt="iAccs 2013 Logo"
                        loading="lazy"
                    />
                    <div>
                        <motion.h4
                            className="iaccs-title"
                            transition={{ duration: 0.3 }}
                        >
                            iAccs 2013
                        </motion.h4>
                        <p>
                            The Most Trusted and Secured Integrated accounting
                            and banking system designed for bank and cooperative
                            needs for more than 3 decades!
                        </p>

                        <AnimatePresence>
                            {showFeature && <IAccs />}
                        </AnimatePresence>
                        <br />
                        <div className="iAccsButtonWrap">
                            <Button
                                text={showFeature ? "Collapse" : "Explore More"}
                                variant="full"
                                size="md"
                                icon={
                                    showFeature ? (
                                        <IoIosArrowUp />
                                    ) : (
                                        <IoIosArrowDown />
                                    )
                                }
                                onClick={() => setShowFeature(!showFeature)}
                            />
                            &nbsp;
                            <ProductInquiryForm
                                productName="iAccs 2013"
                                picUrl="/assets/iacss-logo.png"
                                type="Software"
                                buttonSize="md"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            <h1 className="product-title">
                <span>Software</span> Products
            </h1>
            <div className="pastProj">
                {/* Left Column */}
                <div className="column left-column">
                    {leftColumnProducts &&
                        leftColumnProducts.map((secondItem, index) => {
                            const globalIndex = index * 2; // Map to original index
                            return (
                                <motion.div
                                    layout
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={fadeInUpVariants}
                                    transition={{
                                        layout: { duration: 0.3 },
                                        duration: 0.3,
                                        delay: 0.2,
                                    }}
                                    key={secondItem.id || globalIndex}
                                    className="projectDetail"
                                >
                                    <div className="projWrap">
                                        <div className="content-wrapper">
                                            <motion.img
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ duration: 0.3 }}
                                                className="iacc"
                                                src={`/assets/${secondItem.image}`}
                                                alt={`${secondItem.name} Logo`}
                                                loading="lazy"
                                            />
                                            <div>
                                                <h4>{secondItem.name}</h4>
                                                <p>{secondItem.description}</p>
                                            </div>
                                            <AnimatePresence>
                                                {expandedProduct ===
                                                    globalIndex && (
                                                    <div
                                                        className="Iac-wrap"
                                                        id={`feature-${globalIndex}`}
                                                    >
                                                        <motion.div
                                                            layout
                                                            className="feature-wrap"
                                                            initial={{
                                                                opacity: 0,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                            }}
                                                        >
                                                            <div className="feature-header">
                                                                <RiCodepenFill className="icon" />
                                                                <h4>
                                                                    General
                                                                    Features
                                                                </h4>
                                                            </div>
                                                            <ul>
                                                                {cleanText(
                                                                    secondItem.feature
                                                                ).map(
                                                                    (
                                                                        itemFeature,
                                                                        idx
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                idx
                                                                            }
                                                                        >
                                                                            {cleanText(
                                                                                itemFeature
                                                                            )}
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </motion.div>
                                                    </div>
                                                )}
                                            </AnimatePresence>
                                            <div className="button-wrapper">
                                                <Button
                                                    text={
                                                        showFeature
                                                            ? "Collapse"
                                                            : "Explore More"
                                                    }
                                                    variant="full"
                                                    size="sm"
                                                    icon={
                                                        expandedProduct ===
                                                        globalIndex ? (
                                                            <IoIosArrowUp />
                                                        ) : (
                                                            <IoIosArrowDown />
                                                        )
                                                    }
                                                    onClick={() =>
                                                        toggleDetails(
                                                            globalIndex
                                                        )
                                                    }
                                                />
                                                <ProductInquiryForm
                                                    buttonSize="md"
                                                    productName={
                                                        secondItem.name
                                                    }
                                                    picUrl={`/assets/${secondItem.image}`}
                                                    type="Software"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                </div>

                {/* Right Column */}
                <div className="column right-column">
                    {rightColumnProducts &&
                        rightColumnProducts.map((secondItem, index) => {
                            const globalIndex = index * 2 + 1; // Map to original index
                            return (
                                <motion.div
                                    layout
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={fadeInUpVariants}
                                    transition={{
                                        layout: { duration: 0.3 },
                                        duration: 0.3,
                                        delay: 0.2,
                                    }}
                                    key={secondItem.id || globalIndex}
                                    className="projectDetail"
                                >
                                    <div className="projWrap">
                                        <div className="content-wrapper">
                                            <motion.img
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ duration: 0.3 }}
                                                className="iacc"
                                                src={`/assets/${secondItem.image}`}
                                                alt={`${secondItem.name} Logo`}
                                                loading="lazy"
                                            />
                                            <div>
                                                <h4>{secondItem.name}</h4>
                                                <p>{secondItem.description}</p>
                                            </div>
                                            <AnimatePresence>
                                                {expandedProduct ===
                                                    globalIndex && (
                                                    <div
                                                        className="Iac-wrap"
                                                        id={`feature-${globalIndex}`}
                                                    >
                                                        <motion.div
                                                            layout
                                                            className="feature-wrap"
                                                            initial={{
                                                                opacity: 0,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                            }}
                                                        >
                                                            <div className="feature-header">
                                                                <RiCodepenFill className="icon" />
                                                                <h4>
                                                                    General
                                                                    Features
                                                                </h4>
                                                            </div>
                                                            <ul>
                                                                {cleanText(
                                                                    secondItem.feature
                                                                ).map(
                                                                    (
                                                                        itemFeature,
                                                                        idx
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                idx
                                                                            }
                                                                        >
                                                                            {
                                                                                itemFeature
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </motion.div>
                                                    </div>
                                                )}
                                            </AnimatePresence>
                                            <div className="button-wrapper">
                                                <Button
                                                    text={
                                                        showFeature
                                                            ? "Collapse"
                                                            : "Explore More"
                                                    }
                                                    variant="full"
                                                    size="sm"
                                                    icon={
                                                        expandedProduct ===
                                                        globalIndex ? (
                                                            <IoIosArrowUp />
                                                        ) : (
                                                            <IoIosArrowDown />
                                                        )
                                                    }
                                                    onClick={() =>
                                                        toggleDetails(
                                                            globalIndex
                                                        )
                                                    }
                                                />
                                                <ProductInquiryForm
                                                    productName={
                                                        secondItem.name
                                                    }
                                                    picUrl={`/assets/${secondItem.image}`}
                                                    type="Software"
                                                    buttonSize="md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
