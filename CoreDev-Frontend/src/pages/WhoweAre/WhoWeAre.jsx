import "./WhoWeAre.css";
import { BsBinocularsFill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
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

            
            <motion.div
                className="imageWrap1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUpVariants}
            >
                <div className="textcont1">
                    <h2>WHO WE ARE</h2>
                    <div>
                        <p >
                            <strong>coreDev Solutions Inc.</strong>has evolved
                            from a pioneering software provider into a{" "}
                            <strong>full-service technology partner</strong> for
                            businesses across the Philippines. Trusted by{" "}
                            <strong>12 billionaire organizations</strong> and
                            over{" "}
                            <strong>
                                100 SMEs, rural banks, and financial
                                institutions,
                            </strong>{" "}
                            we deliver{" "}
                            <strong>secure, scalable, and seamless</strong>{" "}
                            solutions tailored to the ever-changing digital
                            landscape. <br /> <br />
                            From <strong>
                                software and cloud services
                            </strong>{" "}
                            that optimize operations to{" "}
                            <strong>
                                network infrastructure and hardware solutions
                            </strong>
                            —including servers, peripherals, and mobile
                            devices—we provide end-to-end technology support to
                            keep your business ahead. <br />
                            <br />
                            Partner with <strong>coreDev Solutions</strong> to
                            drive{" "}
                            <strong>innovation, efficiency, and success</strong>{" "}
                            like never before.
                        </p>
                    </div>
                    <a href="#StoryCont">
                        <FaArrowDown className="icon" />
                    </a>
                </div>
            </motion.div>

            
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
                            As technology evolved and our clients&apos; needs grew,
                            we continued to develop our software. In 2013, we
                            launched iAccs 2013, marking a turning point in our
                            journey. We transformed from a software provider
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
                            seamlessly aligns with our clients&apos; diverse needs.
                            At <strong>coreDev Solutions Incorporated</strong>,
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
