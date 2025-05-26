import { useState, useEffect } from "react";
import Modal from "./Modal";
import "../styles/ProductInquiryForm.css";
import axios from "axios";
import { Button } from "@components/ui";
import { LuMessageCircle } from "react-icons/lu";

const ProductInquiryForm = ({ productName, picUrl, type, buttonSize = "sm" }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        product: productName || "",
        type: type,
        address: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [count, setCount] = useState(5);

    // State for error messages
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        product: "",
        message: "",
    });

    useEffect(() => {
        if (submitStatus === "success" && count > 0) {
            const timer = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
            console.log(count);

            return () => clearInterval(timer);
        } else if (submitStatus === "success" && count === 0) {
            location.reload();
        }
    }, [submitStatus, count]);

    const validateField = (name, value) => {
        let error = "";
        switch (name) {
            case "name":
                if (!value.trim()) error = "Name is required";
                break;
            case "email":
                if (!value.trim()) error = "Email is required";
                else if (
                    !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(value)
                )
                    error = "Invalid email format";
                break;
            case "phone":
                if (!value.trim()) error = "Phone number is required";
                else if (!/^(09\d{9}|\+639\d{9})$/.test(value))
                    error = "Phone must be 09XXXXXXXXX or +639XXXXXXXXX";
                break;
            case "address":
                if (!value.trim()) error = "Address is required";
                break;
            case "product":
                if (!productName && !value.trim())
                    error = "Product name is required";
                break;
            case "message":
                if (!value.trim()) error = "Message is required";
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value),
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        Object.keys(formData).forEach((key) => {
            if (key === "type") return;
            const error = validateField(key, formData[key]);
            newErrors[key] = error;
            if (error) isValid = false;
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            return;
        }

        setIsSubmitting(true);

        try {
            await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
                withCredentials: true,
            });

            const xsrfToken = document.cookie
                .split("; ")
                .find((row) => row.startsWith("XSRF-TOKEN="))
                ?.split("=")[1];

            if (!xsrfToken) throw new Error("CSRF token not found in cookies");
            console.log(xsrfToken);

            const response = await axios.post(
                "http://localhost:8000/api/send-email",
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "X-XSRF-TOKEN": decodeURIComponent(xsrfToken),
                    },
                }
            );
            console.log(response);

            if (response.status == 200) {
                setSubmitStatus("success");
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Request failed:", {
                error: error.message,
                response: error.response?.data,
                cookies: document.cookie,
            });
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Button
                text="Inquire"
                variant="outline"
                size={buttonSize}
                icon={<LuMessageCircle/>}
                onClick={() => setIsModalOpen(true)}
            />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                isdisable={isSubmitting}
            >
                <div className="inquiry-form-container">
                    <h2 className="inquiry-form-title">Inquire About :</h2>
                    <div className="productData">
                        <img
                            className={
                                type == "Hardware"
                                    ? "Prod-pic hardware"
                                    : "Prod-pic"
                            }
                            src={picUrl}
                            alt=""
                        />
                        <div>
                            <h3>
                                {" "}
                                Product:{" "}
                                <span> {productName || "Our Product"}</span>
                            </h3>
                            <h3>
                                Type: <span>{type}</span>
                            </h3>
                        </div>
                    </div>
                    <hr />

                    {submitStatus === "success" && (
                        <div className="inquiry-alert success">
                            Thank you for your inquiry! We've received your
                            message and will contact you soon. <br />
                            You Browser will reload in {count} ...
                        </div>
                    )}

                    {submitStatus === "error" && (
                        <div className="inquiry-alert error">
                            There was an error submitting your inquiry. Please
                            try again later.
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="inquiry-form"
                        noValidate
                    >
                        <div className="form-group">
                            <label htmlFor="name">Your Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className={errors.name ? "input-error" : ""}
                                aria-invalid={errors.name ? "true" : "false"}
                                aria-describedby={
                                    errors.name ? "name-error" : undefined
                                }
                            />
                            {errors.name && (
                                <span className="error-message" id="name-error">
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                autoComplete="email"
                                placeholder="your@email.com"
                                className={errors.email ? "input-error" : ""}
                                aria-invalid={errors.email ? "true" : "false"}
                                aria-describedby={
                                    errors.email ? "email-error" : undefined
                                }
                            />
                            {errors.email && (
                                <span
                                    className="error-message"
                                    id="email-error"
                                >
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                pattern="^(09\d{9}|\+639\d{9})$"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="09XXXXXXXXX or +639XXXXXXXXX"
                                className={errors.phone ? "input-error" : ""}
                                aria-invalid={errors.phone ? "true" : "false"}
                                aria-describedby={
                                    errors.phone ? "phone-error" : undefined
                                }
                            />
                            {errors.phone && (
                                <span
                                    className="error-message"
                                    id="phone-error"
                                >
                                    {errors.phone}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="address"
                                id="address"
                                name="address"
                                value={formData.address}
                                required
                                onChange={handleChange}
                                placeholder="96 J. Alcantara Street, Brgy. Sambag 1"
                                className={errors.address ? "input-error" : ""}
                                aria-invalid={errors.address ? "true" : "false"}
                                aria-describedby={
                                    errors.address ? "address-error" : undefined
                                }
                            />
                            {errors.address && (
                                <span
                                    className="error-message"
                                    id="address-error"
                                >
                                    {errors.address}
                                </span>
                            )}
                        </div>

                        {!productName && (
                            <div className="form-group">
                                <label htmlFor="product">Product Name*</label>
                                <input
                                    type="text"
                                    id="product"
                                    name="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    required
                                    placeholder="Product you're interested in"
                                    className={
                                        errors.product ? "input-error" : ""
                                    }
                                    aria-invalid={
                                        errors.product ? "true" : "false"
                                    }
                                    aria-describedby={
                                        errors.product
                                            ? "product-error"
                                            : undefined
                                    }
                                />
                                {errors.product && (
                                    <span
                                        className="error-message"
                                        id="product-error"
                                    >
                                        {errors.product}
                                    </span>
                                )}
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="message">Your Inquiry*</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Please include any specific questions or details about the product..."
                                className={errors.message ? "input-error" : ""}
                                aria-invalid={errors.message ? "true" : "false"}
                                aria-describedby={
                                    errors.message ? "message-error" : undefined
                                }
                            />
                            {errors.message && (
                                <span
                                    className="error-message"
                                    id="message-error"
                                >
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="box">
                                    Sending
                                    <div className="container">
                                        <span className="circle"></span>
                                        <span className="circle"></span>
                                        <span className="circle"></span>
                                        <span className="circle"></span>
                                    </div>
                                </div>
                            ) : (
                                "Submit Inquiry"
                            )}
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default ProductInquiryForm;
