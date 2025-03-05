import "./Software.css";
import iAccs from "../../assets/ais.png";
import { RiCodepenFill } from "react-icons/ri";
import { IoMdOpen } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Software = () => {
    const navigate = useNavigate();

    const second = [
        {
            picUrl: "/assets/hris.png",
            title: "Orange Pay Plus (HRIS)",
            icon: <RiCodepenFill />,
            description:
                "Your all in one HR Solutions System is here! Go paperless with your HR files and expedite your payroll process. Subscribe to OrangePay+ (HRIS) now.",
            feature: [
                "Stand alone system",
                "A complete paperless HR Management Solutions for SMBs and Enterprise Businesses.",
                "Complete ease on managing employee info and payroll computation",
                "Convenient employee access to their info and payslip",
                "And many other very helpful features",
            ],
        },
        {
            picUrl: "/assets/eservices.png",
            title: "E-Services Portal",
            icon: <RiCodepenFill />,
            description:
                "Provide your members/clients the access to monitor their accounts and send loan applications online securely at their most convenient time and place. Use E-Services Portal now!",
            feature: [
                "Real time inquiry of Accounts (Loans and Deposits)",
                "View and Print Statement of Accounts",
                "Apply for a Loan Online",
                "Integrated Portal with other E-Services",
                "Mobile Responsive",
            ],
        },
        {
            picUrl: "/assets/voting.png",
            title: "Online Voting System",
            icon: <RiCodepenFill />,
            description:
                "Fast and secured way to cast your votes and readily generate results within a few clicks.",
            feature: [
                "Stand alone system",
                "Automated Voting System",
                "Faster voting Experience",
                "Able to vote anywhere and anytime",
                "Flexible, Convenient and Secured.",
            ],
        },
        {
            picUrl: "/assets/que.png",
            title: "Online Queuing System",
            icon: <RiCodepenFill />,
            description:
                "We care for you! To avoid a large crowd, let your client queue anytime anywhere with our Online Queuing System.",
            feature: [
                "Stand alone system",
                "Members can queue online anytime and anywhere",
                "Can be connected to a Kiosk Terminal",
                "Queuing Monitor with running text announcements and video",
                "Has a dashboard for the Admin",
                "Mobile responsive",
            ],
        },
        {
            picUrl: "/assets/pos.png",
            title: "Point-of-Sale",
            icon: <RiCodepenFill />,
            description:
                "Meet the most versatile BIR accredited Point-of-Sale System. Make fast and hassle-free store transactions and easily award your customer with its Reward feature.",
            feature: [
                "Item Maintenance",
                "Receiving/Return",
                "Point of Sale",
                "Inventory",
                "Stocks Warehousing/Transfer",
                "Purchase Order",
                "Supplier Maintenance",
                "Physical Inventory",
                "Ordering System",
            ],
        },

        {
            picUrl: "/assets/online-membership-system.png",
            title: "Online Membership System",
            icon: <RiCodepenFill />,
            description:
                "An easy and convenient way to enroll new members of your cooperative. Allow future clients to fill out application forms, attend webinars and submit documents online via the Online Membership System",
            feature: [
                "Stand alone System ",
                "Allow online membership application",
                "Allow applicant to upload supporting documents",
                "Alloe applicant to take selfie photo for identification",
                "Capable of uploading video seminar",
                "Applicant will be able to monitor the status of membership application",
                "Capable for sending application updates via E-mail or SMS",
                "Mobile Responsive",
            ],
        },
        {
            picUrl: "/assets/online-help-desk.png",
            title: "Online Help Desk System",
            icon: <RiCodepenFill />,
            description:
                " Manage your client's concerns by letting them raise and resolve their issues online via our Online Help Desk System",
            feature: [
                "Allow members to raise issues and concerns with ticket number online ",
                "Capable for sending ticket updates via E-Mail or SMS",
                "Members can reply and upload files on the specific concerns",
                "Members can monitor ticket status",
                "Mobile Responsive",
            ],
        },
        {
            picUrl: "/assets/coop-wallet.png",
            title: "Coop Wallet",
            icon: <RiCodepenFill />,
            description:
                "A web Application that allows you to check, transfer, save and withdraw your funds.",
            feature: [
                "Can add/deposit cash",
                "Can WithdrawCash",
                "Can Apply for an Instant Loan",
                "Can be Customized",
                "Mobile Responsive",
            ],
        },
        {
            picUrl: "/assets/online-payment-gateway.png",
            title: "Online Payment Gateway",
            icon: <RiCodepenFill />,
            description:
                "Allow your members/clients to enjoy their quality time by letting them pay online with our Online Payment Gateway and increase your collection efficiency.",
            feature: [
                "Easy access to current balances",
                "Secure online payment solutions",
                "Online Banking",
                "Bank Over-the-Counter(OTC)",
                "Over-the-counter Nonbanks/Bayad Centers",
                "Auto posting to current accounts",
                "Mobile Responsive",
            ],
        },
    ];

    return (
        <div className="SoftwareContainer">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "",
                    stiffness: 200,
                    damping: 10,
                    delay: 1 * 0.2,
                }}
                className="SoftWrap"
            >
                <div className="IacWrap">
                    <motion.img
                     onClick={() => window.open('https://www.coredev.ph/iaccs/', '_blank') }
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="iaccs"
                        src={iAccs}
                        alt=""
                        width={74}
                        height={74}
                    />
                    <div>
                        <motion.h4
                         onClick={() => window.open('https://www.coredev.ph/iaccs/', '_blank') }
                          whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 1.0 }}
                        transition={{ duration: 0.3 }}
                        className="iaccs-title">iAccs 2013</motion.h4>
                        <p>
                            The Most Trusted and Secured Integrated accounting
                            and
                            banking system designed for bank and cooperative{" "}
                             needs for more than 3 decades!
                        </p>
                        <button className="IacWrap-btn" onClick={() => navigate("/Products/Software/iAccs")}>Explore More <IoMdOpen className="icon "/></button>
                    </div>
                </div>
            </motion.div>

            <h1 className="product-title">Our Products</h1>
            <div className="pastProj">
                {second.map((secondItem, index) => (
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
                            delay: 1 * 0.2,
                        }}
                        key={index}
                        className="projectDetail"
                    >
                        <div className="projWrap">
                            <div className="">
                                <motion.img
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                    className="iacc"
                                    src={secondItem.picUrl}
                                    alt={secondItem.title}
                                />
                                <div>
                                    <h4>{secondItem.title}</h4>
                                    <p>{secondItem.description}</p>
                                </div>
                                <div>
                                    <button
                                        className="IacWrap-btn"
                                        onClick={() =>
                                            navigate(
                                                `/products/software/${encodeURIComponent(
                                                    secondItem.title
                                                )}`,
                                                {
                                                    state: {
                                                        pic: secondItem.picUrl,
                                                        title: secondItem.title,
                                                        description:
                                                            secondItem.description,
                                                        feature:
                                                            secondItem.feature,
                                                    },
                                                }
                                            )
                                        }
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default Software;
