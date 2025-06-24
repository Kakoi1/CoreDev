/* eslint-disable react/prop-types */
import "../styles/Careers.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button } from "@components/ui";
import { getJobLists } from "../services/fetchJob.service";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "../services/fetchToken.service";
import { useState } from "react";
import { Badge } from "@components/ui";
import { AnimatePresence } from "framer-motion";
import { RiCheckLine } from "react-icons/ri";

export const Careers = () => {
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

    const [tokenReady, setTokenReady] = useState(false);
    const JOBLISTKEY = "job-lists";

    const { data, isLoading } = useQuery({
        queryKey: [JOBLISTKEY],
        queryFn: getJobLists,
        enabled: tokenReady,
    });

    useEffect(() => {
        const fetchToken = async () => {
            try {
                await getToken();
                setTokenReady(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchToken();
    }, []);

    const jobLists = Array.isArray(data?.data) ? data.data : [];
    console.log(jobLists);

    return (
        <div className="careerCont">
            {isLoading && <p>Loading</p>}
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
                            <Button
                                text="View Open Position"
                                variant="full"
                                icon={<MdOutlineKeyboardArrowRight />}
                            />
                        </a>
                    </div>
                </div>
                <div className="hero-fade"></div>
            </section>

            <motion.div className="inner" id="job">
                <h2 style={{ textAlign: "center" }}>
                    Are You Ready <span>To Become One Of Us?</span>
                </h2>

                {jobLists &&
                    jobLists.map((job, index) => (
                        <JobOfferCard
                            key={index}
                            title={job.job_title}
                            address={job.city}
                            link={job.details}
                            descriptions={job.cleanTags_jobDescription}
                        />
                    ))}
            </motion.div>
        </div>
    );
};

const JobOfferCard = ({ title, address, link, descriptions }) => {
    const [showDetails, setShowDetails] = useState(false);

    const cleanedDescriptionText = descriptions.replace(/([a-z])([A-Z])/g, '$1.$2');
    const descriptionText = cleanedDescriptionText.split('.').map(s => s.trim()).filter(Boolean);
    console.log(descriptionText);

    return (
        <motion.div
            layout
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
                    <div className="title">{title} <Badge color="success">Hiring</Badge></div>
                    <div className="job-info">
                        <div className="job-type">
                            <FaMapMarkerAlt className="career-icon" />
                            {address}
                        </div>
                    </div>
                </div>
                <Button
                    text="Apply Now"
                    variant="outline"
                    size="md"
                    onClick={() => window.open(link, "_blank")}
                />
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
                        {descriptionText.map((description, index) =>
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
