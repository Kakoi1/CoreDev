import "./Software.css";
import iAccs from "../../assets/ais.png";
import { RiCodepenFill } from "react-icons/ri";
import { PiMoneyBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Software = () => {
    const navigate = useNavigate();

    const Accounting = [
        "General Ledger",
        "Subsidiary Ledger",
        "Back Office Transaction",
        "Front Office Transaction",
        "Financial Statements",
        "Fixed Asset Management",
        "Overriding System",
        "Aging of Receivables",
        "Regulating agency reports (BIR, BSP, CDA, CISA)",
    ];
    const Saving = [
        "Savings, Share Capital, Time Deposit, Special Deposit",
        "Interest/Witholding Tax on Deposits Processing",
        "Accrual of Interest on Deposits Processing",
        "Automatic Rollover of Time Deposits",
        "Dormancy Management",
        "Dividend and Patronage Refund Processing",
    ];
    const Loans = [
        "Analysis of Loans Receivable",
        "Aging of Loans Receivable",
        "Collection Efficiency",
        "Loans Application/Processing Module",
        "Collector/Account Office Management",
        "Unearned Interest Amortization Processing",
        "Holiday Management",
        "Amortization Schedule Calculator",
        "Interest Rebates System",
        "Batch Printing/Email of Reminder/Demand Letters",
        "Interest and Penalty Worksheet",
        "Loans History",
        "Client Credit Rating",
    ];

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
            description: "An easy and convenient way to enroll new members of your cooperative. Allow future clients to fill out application forms, attend webinars and submit documents online via the Online Membership System",
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
            description: " Manage your client's concerns by letting them raise and resolve their issues online via our Online Help Desk System",
            feature: [
                "Allow members to raise issues and concerns with ticket number online ",
                "Capable for sending ticket updates via E-Mail or SMS",
                "Members can reply and upload files on the specific concerns",
                "Members can monitor ticket status",
                "Mobile Responsive"
            ],
        },
        {
            picUrl: "/assets/coop-wallet.png",
            title: "Coop Wallet",
            icon: <RiCodepenFill />,
            description: "A web Application that allows you to check, transfer, save and withdraw your funds.",
            feature: [
                "Can add/deposit cash",
                "Can WithdrawCash",
                "Can Apply for an Instant Loan",
                "Can be Customized",
                "Mobile Responsive"
            ],
        },
        {
            picUrl: "/assets/online-payment-gateway.png",
            title: "Online Payment Gateway",
            icon: <RiCodepenFill />,
            description: "Allow your members/clients to enjoy their quality time by letting them pay online with our Online Payment Gateway and increase your collection efficiency.",
            feature: [
                "Easy access to current balances",
                "Secure online payment solutions",
                "Online Banking",
                "Bank Over-the-Counter(OTC)",
                "Over-the-counter Nonbanks/Bayad Centers",
                "Auto posting to current accounts",
                "Mobile Responsive"
            ],
        },
    ];

    return (
        <div className="SoftwareContainer">
            <h2 style={{ textAlign: "center" }}>Software Products</h2>
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
                        <h4>iAccs</h4>
                        <p>
                            The Most Trusted and Secured Integrated accounting
                            and <br />
                            banking system designed for bank and cooperative{" "}
                            <br /> needs for more than 3 decades!
                        </p>
                    </div>
                    <div className="divWrap">
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "",
                                stiffness: 200,
                                damping: 10,
                                duration: 0.3,
                                delay: 1 * 0.2, // Ensure each item appears sequentially
                            }}
                            className="Soft-item"
                        >
                            <RiCodepenFill />
                            <h4>Core Accounting System</h4>
                            <ul>
                                {Accounting.map((item1, index) => (
                                    <li key={index}>{item1}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "",
                                stiffness: 200,
                                damping: 10,
                                duration: 0.3,
                                delay: 1 * 0.2, // Ensure each item appears sequentially
                            }}
                            className="Soft-item"
                        >
                            <PiMoneyBold />
                            <h4>Saving / Deposits System</h4>
                            <ul>
                                {Saving.map((item2, index) => (
                                    <li key={index}>{item2}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "",
                                stiffness: 200,
                                damping: 10,
                                duration: 0.3,
                                delay: 1 * 0.2, // Ensure each item appears sequentially
                            }}
                            className="Soft-item"
                        >
                            <PiMoneyBold />
                            <h4 className="">Loans System</h4>
                            <ul>
                                {Loans.map((item3, index) => (
                                    <li key={index}>{item3}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

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
                            <div className="IacWrap">
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
