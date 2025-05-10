import { useEffect } from "react";
import { BiLocationPlus } from "react-icons/bi";
import "./Milestone.css";
import { motion } from 'framer-motion';
import { Badge } from "@components/ui"



function MileStone() {
    const timeline = [
        {
            name: "CoreDev as a Technology Solutions Provider",
            year: "2024",
            right: "timeline-content",
            description: [
                "coreDev transitions from a software provider to a full-fledged technology solutions provider offering wide variety of technology solutions ranging from accounting software to servers, network infrastructure, POS devices, etc.",
            ],
        },
        {
            name: "Innovation Amidst the COVID-19 Pandemic",
            year: "2020",
            right: "timeline-content right",
            description: [
                "coreDev Solutions Inc was able to develop new innovations that are essential in the new normal. We were able to launch the E-Services Portal, Online Payment Gateway, Coop Wallet System, Work Flow System, SMS Plus Gateway, Online Helpdesk System, Online Voting System, Online Queuing System, and Online Membership System.",
                "These new innovations were used by Cebu CFI Community Coop; we are really grateful for their continuous trust.",
            ],
        },
        
        {
            name: "Nationwide Expansion",
            year: "March 2018",
            right: "timeline-content",
            description: [
                "Establishment of branches in Luzon and Mindanao in order the boost coreDev's presence in those areas and provide a better support to our clients.",
                
            ],
        },
        
        {
            name: "Launching of the CIC Utility",
            year: "2015",
            right: "timeline-content right",
            description: [
                "With the passing of RA 9510 or so called Credit Information System Act, coreDev launched the CIC utility in order to aid the clients' compliance with the said law.",
                
            ],
        },
        
        {
            name: "Founding of CoreDev",
            year: "August 2013",
            right: "timeline-content",
            description: [
                "Coredev started with 11 employees and 36 clients with only 6 products – iAccs 2013, Priority Queuing System, Members Online Inquiry System, Online Loan Facility, Electronic Filing, and Computerized Election System.",
                "The main product is iAccs 2013.",
            ],
        },
    ];

    useEffect(() => {
        const timelineBlocks = document.querySelectorAll(".timeline-item");
        const offset = 0.8;

        // Hide timeline blocks initially
        const hideBlocks = () => {
            timelineBlocks.forEach((block) => {
                if (
                    block.getBoundingClientRect().top >
                    window.innerHeight * offset
                ) {
                    block
                        .querySelector(".timeline-icon")
                        .classList.add("is-hidden");
                    block
                        .querySelector(".timeline-content")
                        .classList.add("is-hidden");
                }
            });
        };

        // Show timeline blocks on scroll
        const showBlocks = () => {
            timelineBlocks.forEach((block) => {
                if (
                    block.getBoundingClientRect().top <=
                        window.innerHeight * offset &&
                    block
                        .querySelector(".timeline-icon")
                        .classList.contains("is-hidden")
                ) {
                    block
                        .querySelector(".timeline-icon")
                        .classList.remove("is-hidden");
                    block
                        .querySelector(".timeline-content")
                        .classList.remove("is-hidden");
                    block
                        .querySelector(".timeline-icon")
                        .classList.add("animate-it");
                    block
                        .querySelector(".timeline-content")
                        .classList.add("animate-it");
                }
            });
        };

        // Initial hide
        hideBlocks();

        // Add scroll event listener
        window.addEventListener("scroll", () => {
            if (!window.requestAnimationFrame) {
                setTimeout(showBlocks, 100);
            } else {
                window.requestAnimationFrame(showBlocks);
            }
        });

        // Cleanup
        return () => {
            window.removeEventListener("scroll", showBlocks);
        };
    }, []);

    return (
        <div className="milestone">
            <div className="timeline-container">
                <h3 className="project-name">
                    Our <span>MileStone</span>
                </h3>
                <div id="timeline">
                    {timeline.map((item, index) => (
                        <motion.div
                            className="timeline-item"
                            whileHover={{ scale: 1, y: -5 }} // Move 5px up on hover
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={index}
                        >
                            <div className="timeline-icon">
                                <BiLocationPlus />
                            </div>
                            <div className={item.right}>
                                <Badge color="default">{item.year}</Badge>
                                <h2>{item.name}</h2>
                                <ul>
                                    {item.description.map((desc, index) => (
                                        <li key={index}>
                                            <p>{desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MileStone;
