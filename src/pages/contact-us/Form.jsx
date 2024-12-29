import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e7dxk5d", "template_ptg630s", form.current, {
        publicKey: "wYjfz5YZkra8PpHDp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMessage("Form submitted successfully!");
          setFormData({
            from_name: "",
            email: "",
            number: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError({
            submit: "An error occurred while sending the email. Please try again.",
          });
        }
      );

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    number: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newError = {};

    if (!formData.from_name.trim()) {
      newError.from_name = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email is not valid";
    }
    if (!formData.number.trim()) {
      newError.number = "Number is required";
    }
    if (!formData.message.trim()) {
      newError.message = "Message is required";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  return (
    <div className="md:p-8 p-[36px] md:pl-36 md:pr-36">
      <div className="bg-form-grey md:p-6 p-0 rounded-[50px] flex md:flex-row flex-col justify-center md:space-x-8">
        <form className="md:order-1 order-2 space-y-4 max-w-lg w-full p-5" ref={form} onSubmit={sendEmail}>
          {error.submit && <div className="text-red-500 text-center mb-4">{error.submit}</div>}
          {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                value={formData.from_name}
                onChange={handleChange}
                className={`mt-1 p-2 border ${error.from_name ? "border-red-500" : "border-gray-300"} w-full focus:outline-none focus:border-blue-500 rounded-[10px]`}
              />
              {error.from_name && <span className="text-red-500 text-sm">{error.from_name}</span>}
            </div>
            <div className="w-full">
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                Number
              </label>
              <input
                id="number"
                name="number"
                type="text"
                value={formData.number}
                onChange={handleChange}
                className={`mt-1 p-2 border ${error.number ? "border-red-500" : "border-gray-300"} w-full focus:outline-none focus:border-blue-500 rounded-[10px]`}
              />
              {error.number && <span className="text-red-500 text-sm">{error.number}</span>}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 p-2 border ${error.email ? "border-red-500" : "border-gray-300"} w-full focus:outline-none focus:border-blue-500 rounded-[10px]`}
              />
              {error.email && <span className="text-red-500 text-sm">{error.email}</span>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 p-2 border ${error.message ? "border-red-500" : "border-gray-300"} w-full focus:outline-none focus:border-blue-500 rounded-[10px]`}
              rows="4"
            />
            {error.message && <span className="text-red-500 text-sm">{error.message}</span>}
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="mt-1 bg-[#004066] text-white p-2 rounded-[10px] hover:bg-[#005A87] w-60"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="md:order-2 order-1 bg-[#004066] text-white px-6 py-10 shadow-lg w-full md:w-1/3 md:h-1/3 -mt-6 rounded-bl-[50px] rounded-br-[50px] font-nunito">
          <h3 className="md:text-[30px] text-[25px] leading-[24px] mb-4 text-center font-nunito font-[800]">Dial *****</h3>
          <div>
            <h4 className="md:text-[18px] text-[16px] font-[600] mb-6">Negombo Recycling Club</h4>
            <p className="mb-1 font-[600]">
              <span className="text-[14px]">Number: </span>
              <span className="text-[12px]">+94 767486159</span>
            </p>
            <p className="mb-0 mt-4 font-[600]">
              <span className="text-[14px]">Address: </span>
              <span className="text-[12px]">No 300/2, Maha Vidyala Road, Dagonna, Negombo.</span>
            </p>
            <p className="mb-0 mt-5 font-[600]">
              <span className="text-[14px]">Email: </span>
              <span className="text-[12px]">info@nrc.lk</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
