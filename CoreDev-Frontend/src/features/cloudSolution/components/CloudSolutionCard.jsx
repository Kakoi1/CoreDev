import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@components/ui";
import ProductInquiryForm from "@features/shared/inquiry-form/components/InquiryForm";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

import PropTypes from "prop-types";

export const CloudSolutionCard = ({ cloud_product }) => {
    console.log(cloud_product);

    const [showFeature, setShowFeature] = useState(false);

    return (
        <motion.div
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                layout: { duration: 0.3 },
                type: "",
                stiffness: 200,
                damping: 10,
                duration: 0.3,
                delay: 1 * 0.2,
            }}
            className="product-card"
        >
            <img
                src={`/src/assets/hardwareImage/${cloud_product.image}`}
                alt={cloud_product.name}
                className="product-image"
            />
            <h3 className="product-name">{cloud_product.name}</h3>

            {showFeature && (
                <AnimatePresence>
                    <motion.div
                        className="product-description"
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p>{cloud_product.description}</p>
                    </motion.div>
                </AnimatePresence>
            )}
            <div className="card-footer">
                <Button
                    text={showFeature ? "Hide Details" : "Show Details"}
                    icon={
                        showFeature ? (
                            <IoIosArrowUp className="icon " />
                        ) : (
                            <IoIosArrowDown className="icon " />
                        )
                    }
                    onClick={() => setShowFeature(!showFeature)}
                    variant="full"
                    size="sm"
                />

                <ProductInquiryForm
                    productName={cloud_product.name}
                    picUrl={`../../src/assets/hardwareImage/${cloud_product.image}`}
                    type={"Hardware"}
                />
            </div>
        </motion.div>
    );
};
CloudSolutionCard.propTypes = {
    cloud_product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};
