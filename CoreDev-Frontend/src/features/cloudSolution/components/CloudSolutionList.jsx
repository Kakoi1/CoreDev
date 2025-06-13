import { useEffect, useState } from "react";
import { getCloudProducts } from "../services/fetchCloud.service";
import { CloudSolutionCard } from "./CloudSolutionCard";
import { LoadingSpinner } from "@components/ui";
import "../style/CloudSolution.css";

export const CloudSolutionList = () => {
    const [clouds, setClouds] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const fetchCloudProduct = async () => {
        try {
            setIsLoading(true)
            const response = await getCloudProducts("cloud");
            console.log(response.data);
            setClouds(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        console.log("run");
        fetchCloudProduct();
    }, []);

    return (
        <div className="cloud-product-container">
            <div className="grid-container">
                {isLoading && <p className="loading">Loading <LoadingSpinner/></p> }

                {clouds && clouds.length > 0 && (
                    clouds.map((item, index) => (
                        <CloudSolutionCard key={index} cloud_product={item} />
                    ))
                )}
            </div>
        </div>
    );
};
