import { useEffect, useState } from "react";
import { getHardwareProducts } from "@features/hardwareProducts/services/fetchHardware.service";
import { CloudSolutionCard } from "./CloudSolutionCard";
import "../style/CloudSolution.css";

export const CloudSolutionList = () => {
    const [hardwares, setHardwares] = useState(null);

    const fetchHardwareProduct = async () => {
        try {
            const response = await getHardwareProducts("cloud");
            console.log(response.data);
            setHardwares(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        console.log("run");
        fetchHardwareProduct();
    }, []);

    return (
        <div className="cloud-product-container">
            <div className="grid-container">
                {hardwares && hardwares.length > 0 ? (
                    hardwares.map((item, index) => (
                        <CloudSolutionCard key={index} cloud_product={item} />
                    ))
                ) : (
                    <p>No hardware found in this category.</p>
                )}
            </div>
        </div>
    );
};
