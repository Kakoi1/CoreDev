import "./WhoWeAre.css";
import { BsBinocularsFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";
import coreLogo from "../../assets/logoCore.png";
import { motion } from "framer-motion";

function WhoWeAre() {
    // Animation variants for fade-in and slide-up effect
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="About-Cont">
            <section className="who-we-are-section">
                <div className="who-we-container">
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
                            <div className="badge">Who We Are</div>
                            <h2 className="section-title">
                                Your <span>trusted</span> technology partner
                                for <span>growth</span>
                            </h2>
                            <p className="section-description">
                                We&apos;re a team of passionate individuals
                                dedicated to creating solutions that make a
                                difference. Our diverse backgrounds and
                                perspectives fuel our innovation and drive our
                                success.
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
                                            <circle
                                                cx="9"
                                                cy="7"
                                                r="4"
                                            ></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <h3 className="stat-title">Enterprise trust</h3>
                                    <p className="stat-value">
                                        Trusted by 12 billion-peso companies
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
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                            ></circle>
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
                                        <h3 className="stat-title">Full-Service IT </h3>
                                        <p className="stat-value">
                                            Full-service IT from software to
                                            infrastructure
                                        </p>
                                    </div>
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
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUpVariants}
            >
                <div className="credo-top">
                    <motion.div
                        whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="vission"
                    >
                        <BsBinocularsFill />
                        <h4>Our Vision</h4>
                        <p className="ubuntu-text">
                            To be the leading and most trusted{" "}
                            <strong>
                                service-oriented provider of innovative software
                                and hardware solutions
                            </strong>{" "}
                            globally.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="mission"
                    >
                        <TbTargetArrow />
                        <h4>Our Mission</h4>
                        <p className="ubuntu-text">
                            To provide excellent service and quality products to
                            our clients, thus helping them to be more efficient
                            and competitive.
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="values"
                >
                    <IoDiamondOutline />
                    <h4>Our Credo</h4>
                    <p className="ubuntu-text">
                        We are a versatile team of future-forward thinkers,
                        committed to <strong>innovating the future</strong> of
                        our clients.
                        <br />
                        We strive to provide{" "}
                        <strong>advanced, game-changing solutions</strong> that
                        optimize operations and drive growth.
                        <br /> We are more than a software provider—we deliver{" "}
                        <strong>end-to-end technology solutions</strong>,
                        transforming the way our clients operate in an
                        ever-evolving world.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                className="storyCont"
                id="StoryCont"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
                variants={fadeInUpVariants}
            >
                <div className="storyContent">
                    <div className="logoCont">
                        <h4>OUR STORY</h4>
                        <img src={coreLogo} alt="logo" />
                    </div>
                    <div className="story-content">
                        <p className="ubuntu-text">
                            In the 1980s, we introduced our initial accounting
                            software called iAccs (Integrated Accounting
                            System). It started as a DOS-based application and
                            quickly became a valuable tool for Cooperatives and
                            Rural Banks, helping them automate their credit and
                            savings operations and integrate them into their
                            accounting systems. <br /> <br />
                            As technology evolved and our clients&apos; needs
                            grew, we continued to develop our software. In 2013,
                            we launched iAccs 2013, marking a turning point in
                            our journey. We transformed from a software provider
                            into a service-oriented solutions provider and
                            established <strong>coreDev Solutions Inc.</strong>,
                            which operates around the clock to serve our
                            clients. <br />
                            <br />
                            At <strong>coreDev Solutions Inc.</strong>, we offer
                            a wide range of solutions and prioritize customer
                            satisfaction. Our goal is to innovate and provide
                            safe, reliable, and stable services to our clients,
                            making each client our top priority. While our
                            origins lie in accounting systems, we have expanded
                            to create and customize various software, hardware,
                            network infrastructure, web hosting, and offer
                            technical consultancy to meet the changing needs of
                            our customers.
                            <br />
                            <br />
                            Now, <strong>coreDev Solutions Inc.</strong> is not
                            just a software solutions provider—we are evolving
                            into a fully service-oriented organization.
                            Recognizing the increasing demands of our clients,
                            we have expanded our offerings beyond software by
                            providing{" "}
                            <strong>comprehensive hardware solutions</strong> to
                            support their business operations. This strategic
                            shift allows us to deliver end-to-end technology
                            solutions, ensuring that our clients receive the
                            tools, infrastructure, and services they need to
                            thrive in a fast-paced digital world. <br></br>
                            <br></br>
                            Our mission is to shape a future where technology
                            seamlessly aligns with our clients&apos; diverse
                            needs. At{" "}
                            <strong>coreDev Solutions Incorporated</strong>,
                            we&apos;re dedicated to exceeding expectations and
                            pushing the boundaries of innovation.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default WhoWeAre;
