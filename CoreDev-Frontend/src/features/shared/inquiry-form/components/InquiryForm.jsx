import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import "../styles/ProductInquiryForm.css";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquiryFormSchema } from "../schema/InquiryFormSchema";
import { Button, LoadingSpinner } from "@components/ui";
import {
    LuMessageCircle,
    LuUser,
    LuMail,
    LuPhone,
    LuMapPin,
    LuMessageSquare,
    LuSend,
} from "react-icons/lu";
import { Badge } from "@components/ui";
import { sendInquiry } from "../services/sendInquiry.service";

const Input = ({ label, name, placeholder, registerFn, icon, error }) => (
    <div className="form-group">
        <div className="label-group">
            {icon}
            <label htmlFor={name}>{label}</label>
        </div>
        <input
            type="text"
            id={name}
            {...registerFn(name)}
            placeholder={placeholder}
            aria-invalid={!!error}
            className={error ? "input-error" : ""}
        />
        {error && (
            <span className="error-message" id="email-error">
                {error}
            </span>
        )}
    </div>
);

Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    registerFn: PropTypes.func.isRequired,
    icon: PropTypes.node,
    error: PropTypes.string,
};

const ProductInquiryForm = ({
    productName,
    picUrl,
    type,
    buttonSize = "sm",
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(inquiryFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
            product: productName ?? "",
            type: type ?? "",
        },
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { mutate, isError, isPending, isSuccess } = useMutation({
        mutationFn: sendInquiry,
        onSuccess: (data) => console.log("success sending data:", data),
        onError: (error) => console.error("error sending inquiry:", error),
    });

    const onSubmit = (data) => {
        console.log(data);
        mutate(data);
    };

    return (
        <>
            <Button
                text="Inquire"
                variant="outline"
                size={buttonSize}
                icon={<LuMessageCircle />}
                onClick={() => setIsModalOpen(true)}
            />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                isdisable={isPending}
            >
                <div className="inquiry-form-container">
                    <h2>Product Inquiry</h2>
                    <div className="inquiry-container">
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
                                <h3>{productName || "Our Product"}</h3>
                                <Badge color={"default"}>{type}</Badge>
                            </div>
                        </div>
                    </div>

                    {isSuccess && (
                        <div className="inquiry-alert success">
                            Thank you for your inquiry! We&apos;ve received your
                            message and will contact you soon. <br />
                        </div>
                    )}

                    {isError && (
                        <div className="inquiry-alert error">
                            There was an error submitting your inquiry. Please
                            try again later.
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="inquiry-form"
                        noValidate
                    >
                        <Input
                            label="Name"
                            name="name"
                            placeholder="Enter Your Name"
                            icon={<LuUser />}
                            registerFn={register}
                            error={errors.name?.message}
                        />

                        <Input
                            label="Email"
                            name="email"
                            placeholder="Enter Your Email"
                            icon={<LuMail />}
                            registerFn={register}
                            error={errors.email?.message}
                        />

                        <Input
                            label="Phone Number"
                            name="phone"
                            placeholder="Enter Your Phone number"
                            icon={<LuPhone />}
                            registerFn={register}
                            error={errors.phone?.message}
                        />

                        <Input
                            label="Address"
                            name="address"
                            placeholder="Enter Your Address"
                            icon={<LuMapPin />}
                            registerFn={register}
                            error={errors.address?.message}
                        />

                        <div className="form-group">
                            <div className="label-group">
                                <LuMessageSquare />

                                <label htmlFor="message">Your Inquiry </label>
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                {...register("message")}
                                placeholder="your message"
                                rows="5"
                                className={errors.message ? "input-error" : ""}
                                aria-invalid={errors.message ? "true" : "false"}
                                aria-describedby={
                                    errors.message ? "message-error" : undefined
                                }
                            />
                            {errors && (
                                <span
                                    className="error-message"
                                    id="message-error"
                                >
                                    {errors.message?.message}
                                </span>
                            )}
                        </div>
                        <div className="inquiry-footer">
                            <Button
                                text="Cancel"
                                variant="outline"
                                disabled={isPending}
                                onClick={() => setIsModalOpen(false)}
                            />
                            <Button
                                text="Send"
                                variant="full"
                                disabled={isPending}
                                type="submit"
                                icon={
                                    isPending ? <LoadingSpinner /> : <LuSend />
                                }
                                onClick={() => setIsModalOpen(true)}
                            />
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};
ProductInquiryForm.propTypes = {
    productName: PropTypes.string,
    picUrl: PropTypes.string.isRequired,
    type: PropTypes.string,
    buttonSize: PropTypes.string,
};

export default ProductInquiryForm;
