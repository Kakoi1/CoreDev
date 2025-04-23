/* eslint-disable react/prop-types */
import "./OurTeam.css";
import { motion } from "framer-motion";

import OrganizationalChart from "./OrganizationalChart";

function OurTeam() {
    const Teams = [
        {
            name: "Al A. Caputol",
            position: "Chief Executive Officer",
            image: "/assets/Al A.png",
        },
        {
            name: "Rosendo Requino Jr.",
            position: "Hardware Sales Head",
            image: "/assets/rosendo.png",
        },

        {
            name: "Mark Anthony del Coro",
            position: "DevOps Head",
            image: "/assets/mark.png",
        },
        {
            name: "Charrie Caputol",
            position: "HR Director",
            image: "/assets/charrie.png",
        },
    ];

    return (
        <div className="careerCont">
            <section className="team-section">
                <div className="imageWrap">
                <div className="team-container">
                    <div className="section-header">
                        <h2 className="team-section-title">
                            Meet the Talented People Behind Our{" "}    
                            <span className="orange-text">Success</span>
                        </h2>
                        <p className="team-section-description">
                            Our diverse team brings together expertise from
                            various fields to create innovative solutions that
                            address complex challenges.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <motion.div className="inner" id="inner">
                <h2 style={{ textAlign: "center" }}>
                    Pillars of <span>CORE DEV SOLUTIONS INC.</span>
                </h2>
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
                        delay: 0.2,
                    }}
                    className="team-wrapper"
                >
                    {Teams.map((team, index) => (
                        <TeamCard
                            key={index}
                            name={team.name}
                            position={team.position}
                            image={team.image}
                        />
                    ))}
                </motion.div>
            </motion.div>
            <div className="organizational-chart-container">
                <h1>
                    <span>CoreDev</span> Organizational Chart
                </h1>
                <div className="organizational-chart">
                    <OrganizationalChart />
                </div>
            </div>
        </div>
    );
}

const TeamCard = ({ name, position, image }) => {
    return (
        <div className="team">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="team-info">
                <div className="team-name info">
                    <h3>{name}</h3>
                </div>
                <div className="team-position info">
                    <p>{position}</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
