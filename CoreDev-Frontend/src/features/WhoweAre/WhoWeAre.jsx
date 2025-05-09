import "./WhoWeAre.css";
import { IoTelescopeOutline } from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
import { LuDiamond } from "react-icons/lu";
import { OurStory } from "./OurStory";
import { motion } from "framer-motion";

function WhoWeAre() {
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="About-Cont">
            <section className="who-we-are-section">
                <div className="two-column-grid">
                    <div className="image-container">
                        <div className="image-wrapper">
                            <img
                                src="/coreDevlogo.png?height=100&width=100"
                                alt="Our workspace"
                                width={800}
                                height={600}
                                className="feature-image"
                            />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                    <div className="content-container">
                        <h2 className="section-title">
                            Your <span>trusted</span> technology partner for{" "}
                            <span>growth</span>
                        </h2>
                        <p className="section-description">
                            We&apos;re a team of passionate individuals
                            dedicated to creating solutions that make a
                            difference. Our diverse backgrounds and perspectives
                            fuel our innovation and drive our success.
                        </p>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <h3 className="stat-title">Enterprise trust</h3>
                                <p className="stat-value">
                                    Trusted by 12 billionaire organization
                                </p>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="2"
                                            y="7"
                                            width="20"
                                            height="14"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    </svg>
                                </div>
                                <h3 className="stat-title">SME Support</h3>
                                <p className="stat-value">
                                    Supporting 100+ SMEs, rural banks &
                                    institutions
                                </p>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line
                                            x1="2"
                                            y1="12"
                                            x2="22"
                                            y2="12"
                                        ></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="stat-title">
                                        Full-Service IT{" "}
                                    </h3>
                                    <p className="stat-value">
                                        Full-service IT from software to
                                        infrastructure
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <motion.div
                className="credoCont"
                id="credoCont"
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUpVariants}
            >
                <h2>
                    Our <span>Purpose</span>
                </h2>
                <div className="credo-top">
                    <motion.div
                        whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="vission card"
                    >
                        <div className="credo-radial-background"></div>
                        <IoTelescopeOutline />
                        <h3>Our Vision</h3>
                        <p className="ubuntu-text">
                            To be the leading and most trusted&nbsp;
                            <span>
                                service-oriented provider of innovative software
                                and hardware solutions
                            </span>
                            &nbsp; globally.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="mission card"
                    >
                        <div className="credo-radial-background"></div>

                        <FiTarget />
                        <h3>Our Mission</h3>
                        <p className="ubuntu-text">
                            To provide excellent service and quality products to
                            our clients, thus&nbsp;
                            <span>helping them to be more efficient</span>&nbsp;
                            and competitive.
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    transition={{ duration: 0.4 }}
                    className="values credo-container card"
                >
                    <div className="credo-radial-background"></div>

                    <div>
                        <LuDiamond />
                        <h3>Our Credo</h3>
                    </div>
                    <div className="credo-container-grid">
                        <div className="credo-card">
                            <p>
                                We are a versatile team of future-forward
                                thinkers, committed to&nbsp;
                                <span>innovating the future</span> of our clients.
                            </p>
                        </div>
                        <div className="credo-card">
                            <p>
                                We strive to provide&nbsp;
                                <span>advanced, game-changing solutions</span>
                                &nbsp;that optimize operations and drive growth.
                            </p>
                        </div>
                        <div className="credo-card">
                            <p>
                                We are more than a software provider—we
                                deliver&nbsp;
                                <span>end-to-end technology solutions</span>,
                                transforming the way our clients operate in an
                                ever-evolving world.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="storyCont"
                id="StoryCont"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ scale: 1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
                variants={fadeInUpVariants}
            >
                <OurStory />
            </motion.div>
        </div>
    );
}

export default WhoWeAre;
