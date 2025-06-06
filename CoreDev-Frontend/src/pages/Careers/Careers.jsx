/* eslint-disable react/prop-types */
import "./Careers.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWorkHistory, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button } from "@components/ui";

function Careers() {
    const jobOffers = [
        {
            title: "Software Implementor",
            type: "Full-time position",
            descriptions: [
                "Graduate of any related Accounting Course",
                [
                    "Accounting Technology",
                    "Accountancy",
                    "Management Accounting",
                ],
                "Graduate of any related Information Technology Courses",
                ["Information Technology", "Computer Science"],
            ],
            address: "Cebu",
            link: "https://coredev.orangepayplus.com/job/hiring/coredev-solutions-inc",
        },
        {
            title: "Software Implementor",
            type: "Full-time position",
            descriptions: [
                "Graduate of any related Accounting Course",
                [
                    "Accounting Technology",
                    "Accountancy",
                    "Management Accounting",
                ],
                "Graduate of any related Information Technology Courses",
                ["Information Technology", "Computer Science"],
            ],
            address: "Imus, Cavite",
            link: "https://coredev.orangepayplus.com/job/hiring/coredev-solutions-inc",
        },
        {
            title: "Software Implementor",
            type: "Full-time position",
            descriptions: [
                "Graduate of any related Accounting Course",
                [
                    "Accounting Technology",
                    "Accountancy",
                    "Management Accounting",
                ],
                "Graduate of any related Information Technology Courses",
                ["Information Technology", "Computer Science"],
            ],
            address: "Davao, City",
            link: "https://coredev.orangepayplus.com/job/hiring/coredev-solutions-inc",
        },
        {
            title: "Software Programmer",
            type: "Full-time position",
            descriptions: [
                "Graduate of any related Information Technology Courses",
                ["Information Technology", "Computer Science"],
            ],
            address: "Davao, City",
            link: "https://coredev.orangepayplus.com/job/hiring/coredev-solutions-inc",
        },
        {
            title: "Accounting Staff",
            type: "Full-time position",
            descriptions: [
                "Candidate should have good communication and presentation skills",
                "Problem solving and analytical thinking",
                "Ability to work under pressure",
                "Ambitious and Self motivated",
                "Monitoring and solving problems related to the system  implementation",
                "With good and pleasing personality, good communication skills",
                "Willing to travel around the Philippines",
                "Can work with less supervision",
            ],
            address: "Cebu",
            link: "https://coredev.orangepayplus.com/job/hiring/coredev-solutions-inc",
        },
    ];
    return (
        <div className="careerCont">
            <section className="hero-section">
                <div className="hero-image-bg"></div>
                <div className="gradient-left-center"></div>
                <div className="carreer-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Career&nbsp;
                            <span className="orange-text">Opportunities</span>
                        </h1>
                        <p className="hero-description">
                            Discover exciting career opportunities and be part
                            of a team that&apos;s making a difference.
                        </p>
                        <a href="#job">
                            <Button text="View Open Position" variant="full" icon={<MdOutlineKeyboardArrowRight/>} />
                        </a>
                    </div>
                </div>
                <div className="hero-fade"></div>
            </section>

            <motion.div className="inner" id="job">
                <h2 style={{ textAlign: "center" }}>
                    Are You Ready <span>To Become One Of Us?</span>
                </h2>

                {jobOffers.map((job, index) => (
                    <JobOfferCard
                        key={index}
                        title={job.title}
                        descriptions={job.descriptions}
                        type={job.type}
                        address={job.address}
                        link={job.link}
                    />
                ))}
            </motion.div>
        </div>
    );
}

const JobOfferCard = ({ title, type, descriptions, address, link }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <motion.div
            layout
            // whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                layout: { duration: 0.3 },
                type: "",
                stiffness: 200,
                damping: 10,
                duration: 0.3,
                delay: 0.2,
            }}
            className="job-wrapper"
        >
            <div className="job">
                <div>
                    <div className="title">{title}</div>
                    <div className="job-info">
                        <div className="job-type">
                            <MdWorkHistory className="icon" />
                            {type}
                        </div>
                        <div className="job-type">
                            <FaMapMarkerAlt className="icon" />
                            {address}
                        </div>
                    </div>
                </div>
               <Button text="Apply Now" variant="outline" size="md" onClick={() => window.open(link, "_blank")} />

            </div>
            <p onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide Details" : "Show Details"}
            </p>
            <AnimatePresence>
                {showDetails && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="job-details"
                    >
                        <h4>Qualifications</h4>
                        {descriptions.map((description, index) =>
                            Array.isArray(description) ? (
                                <ul key={index}>
                                    {description.map(
                                        (sub_qualification, index) => (
                                            <li key={index}>
                                                {sub_qualification}
                                            </li>
                                        )
                                    )}
                                </ul>
                            ) : (
                                <p key={index}>
                                    <RiCheckLine className="icon" />{" "}
                                    {description}
                                </p>
                            )
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Careers;
