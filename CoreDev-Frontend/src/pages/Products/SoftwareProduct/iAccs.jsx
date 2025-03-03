import "./IAccs.css"
import { motion } from "framer-motion";
import { RiCheckLine, RiCodepenFill } from "react-icons/ri";

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
            title: "Saving / Deposits System",
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
            title: "Loan System",
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
    ];

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="divWrap"
        >
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
                        delay: 1 * 0.2,
                    }}
                    className="Soft-item"
                >
                    <RiCodepenFill className="icon-head"/>
                    <h4>{software.title}</h4>
                    <ul>
                        {software.features.map((feature, index) => (
                            <li key={index}>
                                <RiCheckLine className="icon" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default iAccs;
