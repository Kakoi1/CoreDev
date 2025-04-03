import "./IAccs.css";
import { motion } from "framer-motion";
import { IoCheckmarkDone } from "react-icons/io5";

const iAccs = () => {

    const softwareFeatures = [
        {
            title: "Core Accounting System",
            features: [
                "General Ledger",
                "Subsidiary Ledger",
                "Back Office Transaction",
                "Front Office Transaction",
                "Financial Statements",
                "Fixed Asset Management",
                "Overriding System",
                "Aging of Receivables",
                "Regulating agency reports (BIR, BSP, CDA, CISA)",
            ],
        },
        {
            title: "Deposits System (Linked to Core Accounting)",
            features: [
                "Savings, Share Capital, Time Deposit, Special Deposit",
                "Interest/Witholding Tax on Deposits Processing",
                "Accrual of Interest on Deposits Processing",
                "Automatic Rollover of Time Deposits",
                "Dormancy Management",
                "Dividend and Patronage Refund Processing",
            ],
        },
        {
            title: "Loan System (Linked to Core Accounting)",
            features: [
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
            ],
        },
        {
            title: "Sales & Inventory with POS (Linked to Core Accounting)",
            features: [
                "Item Maintenance",
                "Receiving/Return",
                "Point on Sale",
                "Inventory",
                "Stocks Warehousing/Transfer",
                "Purchase Order",
                "Supplier Maintenance",
                "Physical Inventory",
                "Ordering System",
            ],
        },
    ];

    return (
        <div className="iAccsCont">
            <div className="hero-wrapper">
                <h2>(INTEGRATED ACCOUNTING SYSTEM)</h2>
                <p>
                    &quot;An Accounting Software for Cooperatives, Banks,
                    Lending Institutions, Financial Institutions&quot;
                </p>
            </div>

            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="feature"
            >
                <p className="font-raleway m-5">IACCS-IX (Integrated Accounting System)</p>
                <h2 className="font-raleway m-5 p-1"><span>Our</span> Features</h2>
                <div className="divWrap">
                    {softwareFeatures.map((software, index) => (
                        <motion.div
                            key={index}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                type: "",
                                stiffness: 200,
                                damping: 10,
                                duration: 0.3,
                                delay: index * 0.2,
                            }}
                            className="Soft-item"
                        >
                            <div className="head">
                                {/* <RiCodepenFill className="icon-head" /> */}
                                <h4>{software.title}</h4>
                            </div>
                            <ul>
                                {software.features.map((feature, index) => (
                                    <li key={index}>
                                        <IoCheckmarkDone className="icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default iAccs;
