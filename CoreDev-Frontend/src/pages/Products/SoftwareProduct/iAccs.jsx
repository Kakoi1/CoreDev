import "./IAccs.css";
import { motion } from "framer-motion";
import { IoCheckmarkDone } from "react-icons/io5";
import { softwareFeatures } from "../data";

const iAccs = () => {

    return (
        <div className="iAccsCont">

            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="feature"
            >
                <p className="font-raleway">IACCS-IX (Integrated Accounting System)</p>
                <div className="divWrap">
                    {softwareFeatures.map((software, index) => (
                        <motion.div
                            key={index}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                type: "",
                                stiffness: 200,
                                damping: 10,
                                duration: 0.3,
                                delay: index * 0.2,
                            }}
                            className="Soft-item"
                        >
                            <div className="head">
                                {/* <RiCodepenFill className="icon-head" /> */}
                                <h4>{software.title}</h4>
                            </div>
                            <ul>
                                {software.features.map((feature, index) => (
                                    <li key={index}>
                                        <IoCheckmarkDone className="icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default iAccs;
