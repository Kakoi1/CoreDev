import { FaRegClock } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { PiMedal } from "react-icons/pi";
import { Badge } from "@components/ui";

export const OurStory = () => {
    return (
        <div className="story-container" id="story-container">
            <div className="card">
                <div className="card-header">
                    <div>
                        <h2>Our Story</h2>
                        <p>
                            <em>
                                &apos;&apos; Innovating your Future &apos;&apos;
                            </em>
                        </p>
                    </div>
                    <div className="card-image-wrapper">
                        <img src="/coreDevlogo.png" alt="" />
                    </div>
                </div>
                <div className="card-content">
                    <div className="content-badges">
                        <Badge color="info">Est. 1980s</Badge>
                        <Badge color="info">Tech Solutions</Badge>
                        <Badge color="info">Service Oriented</Badge>
                    </div>
                    <div className="content-row">
                        <div className="row">
                            <div className="content-icon">
                                <FaRegClock />
                            </div>
                            <div className="content-text">
                                <h3>Our Beginning</h3>
                                <p>
                                    In the 1980s, we introduced our initial
                                    accounting software called iAccs (Integrated
                                    Accounting System). It started as a
                                    DOS-based application and quickly became a
                                    valuable tool for Cooperatives and Rural
                                    Banks, helping them automate their credit
                                    and savings operations.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="content-icon">
                                <LuUsers />
                            </div>
                            <div className="content-text">
                                <h3>Our Evolution</h3>
                                <p>
                                    As technology evolved and our clients&apos;
                                    needs grew, we continued to develop our
                                    software. In 2013, we launched iAccs 2013,
                                    marking a turning point in our journey. We
                                    transformed from a software provider into a
                                    service-oriented solutions provider and
                                    established coreDev Solutions Inc., which
                                    operates around the clock to serve our
                                    clients.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="content-icon">
                                <PiMedal />
                            </div>
                            <div className="content-text">
                                <h3>Our Mission Today</h3>
                                <p>
                                    At coreDev Solutions Inc., we offer a wide
                                    range of solutions and prioritize customer
                                    satisfaction. Our goal is to innovate and
                                    provide safe, reliable, and stable services
                                    to our clients, making each client our top
                                    priority. While our origins lie in
                                    accounting systems, we have expanded to
                                    create and customize various software,
                                    hardware, network infrastructure, web
                                    hosting, and offer technical consultancy to
                                    meet the changing needs of our customers.
                                    <br />
                                    <br />
                                    Now, coreDev Solutions Inc. is not just a
                                    software solutions provider—we are evolving
                                    into a fully service-oriented organization.
                                    Recognizing the increasing demands of our
                                    clients, we have expanded our offerings
                                    beyond software by providing comprehensive
                                    hardware solutions to support their business
                                    operations. This strategic shift allows us
                                    to deliver end-to-end technology solutions,
                                    ensuring that our clients receive the tools,
                                    infrastructure, and services they need to
                                    thrive in a fast-paced digital world.
                                    <br />
                                    <br />
                                    Our mission is to shape a future where
                                    technology seamlessly aligns with our
                                    clients&apos; diverse needs. At coreDev
                                    Solutions Incorporated, we&apos;re dedicated
                                    to exceeding expectations and pushing the
                                    boundaries of innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
