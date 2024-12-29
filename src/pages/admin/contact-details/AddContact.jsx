import { useState, useEffect } from "react";
import axiosClient from "../../../../axios-client";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ProcessingIcon } from "../../../utils/icons";

export const AddContact = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Contact: "",
    Address: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const [locationCategory, setLocationCategory] = useState([]);


  const handleInputChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };


  const validate = (valData) => {
    const errors = {};
    if (!valData.Name) {
      errors.Name = "Name is required.";
    }
    if (!valData.Contact) {
      errors.Contact = "Contact Number is required.";
    }
    if (!valData.Email) {
      errors.Email = "Email is required.";
    }
    if (!valData.Address) {
      errors.Address = "Address is required.";
    }
    return errors;
  };


  const resetForm = () => {
    setFormData({
      Name: "",
      Contact: "",
      Email: "",
      Address: "",
    });
  };

  const handleSave = () => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
  
    setSubmitting(true);
  
  
    console.log("FormData being sent: ", formData);
  
    axiosClient
      .post("contact-table", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Contact added successfully!");
        resetForm();
        setSubmitting(false); 
        navigate("/admin/contact-details");
      })
      .catch((error) => {
        console.error("Error saving contact:", error);
        toast.error("Failed to add contact. Please try again.");
        setSubmitting(false); 
      });
  };
  
  
  return (
    <>
      <section className="pb-12 mt-8">
        <div className="w-full bg-white rounded-[15px] md:px-[30px] px-[4%] pt-[20px] pb-[40px]">
          <div className="flex items-center gap-4">
            <span className="font-poppins font-medium text-[16px] md:text-[22px] leading-8 md:leading-[30px] text-[#64728C] mt-1">
              New Contact
            </span>
          </div>
          <>
            <div className="flex flex-col items-start w-full gap-3 mt-6 md:flex-row md:gap-20 md:mt-10">
              <div className="md:w-[30%] w-full mb-3">
                <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                  Name*
                </p>
                <input
                  name="Name"
                  type="text"
                  className="block rounded-[15px] focus:outline-[#bdbdbd] border-0 py-2.5 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-medium font-poppins"
                  value={formData.Name}
                  onChange={(e) => handleInputChange(e.target.value, "Name")}
                  placeholder="Type here...."
                />
                {errors.Name && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                    {errors.Name}
                  </p>
                )}
              </div>
              <div className="md:w-[30%] w-full mb-3">
                <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                  Contact Number*
                </p>
                <input
                  name="Contact"
                  type="text"
                  className="block rounded-[15px] focus:outline-[#bdbdbd] border-0 py-2.5 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-medium font-poppins"
                  value={formData.Contact}
                  onChange={(e) =>
                    handleInputChange(e.target.value, "Contact")
                  }
                  placeholder="Type here...."
                />
                {errors.Contact && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                    {errors.Contact}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start w-full gap-3 mt-6 md:flex-row md:gap-20 md:mt-10">
              <div className="md:w-[30%] w-full mb-3">
                <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                  Email*
                </p>
                <input
                  name="Email"
                  type="text"
                  className="block rounded-[15px] focus:outline-[#bdbdbd] border-0 py-2.5 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-medium font-poppins"
                  value={formData.Email}
                  onChange={(e) => handleInputChange(e.target.value, "Email")}
                  placeholder="Type here...."
                />
                {errors.Email && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                    {errors.Email}
                  </p>
                )}
              </div>
              <div className="md:w-[30%] w-full mb-3">
                <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                  Address*
                </p>
                <input
                  name="Address"
                  type="text"
                  className="block rounded-[15px] focus:outline-[#bdbdbd] border-0 py-2.5 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-medium font-poppins"
                  value={formData.Address}
                  onChange={(e) => handleInputChange(e.target.value, "Address")}
                  placeholder="Type here...."
                />
                {errors.Address && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                    {errors.Address}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-5 md:mt-0 mt-7">
              <button
                className="bg-white font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#263679] hover:text-white text-[#263679] border border-[#263679] transition-all duration-300 flex items-center gap-2 justify-center"
                type="button"
                onClick={() => {
                  resetForm();
                }}
              >
                Cancel
              </button>
              <button
                className="bg-[#263679] font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#374D66] hover:text-white text-white border border-[#263679] transition-all duration-300 flex items-center gap-2 justify-center"
                type="submit"
                onClick={handleSave}
                disabled={submitting}
              >
                {submitting && <ProcessingIcon />}
                Save
              </button>
            </div>
           
          </>
        </div>
      </section>
      <ToastContainer position="bottom-right" />
    </>
  );
};
