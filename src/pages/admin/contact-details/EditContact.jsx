import { useNavigate, useParams, useLocation } from "react-router-dom"; 
import { useState, useEffect } from "react";
import axiosClient from "../../../../axios-client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProcessingIcon } from "../../../utils/icons";

export const EditContact = () => {
  const { state } = useLocation(); 
  const { contactDetails } = state || {}; 
  const idContactTable = useParams().id;
  const navigate = useNavigate();

  const initialFormData = {
    Name: contactDetails?.Name || "", 
    Email: contactDetails?.Email || "",
    Contact: contactDetails?.Contact || "",
    Address: contactDetails?.Address || "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (contactDetails) {
      setFormData(contactDetails);
    }
  }, [contactDetails]);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = (data) => {
    const errors = {};
    if (!formData.Name) {
      errors.Name = "Name is required.";
    }
    if (!formData.Contact) {
      errors.Contact = "Contact is required.";
    }
    if (!formData.Email) {
      errors.Email = "Email is required.";
    }
    if (!formData.Address) {
        errors.Address = "Address is required.";
      }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate(formData);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      setSubmitting(true);

      try {
        await axiosClient.put(`/contact-table/${idContactTable}`, formData);
        setSubmitting(false);
        navigate("/admin/contact-details");
        toast.success("Contact updated successfully!");
      } catch (error) {
        setSubmitting(false);
        toast.error("Failed to update contact!");
        if (error.response && error.response.data) {
          setErrors(error.response.data.errors || {});
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        text: "Please fill out all required fields.",
        allowOutsideClick: false,
      });
    }
  };

  
  return (
    <>
      <section className="pb-12 mt-8">
        <div className="w-full bg-white rounded-[15px] md:px-[30px] px-[4%] pt-[20px] pb-[40px]">
          <div className="flex items-center gap-4">
            <span className="font-poppins font-medium text-[16px] md:text-[22px] leading-8 md:leading-[30px] text-[#64728C] mt-1">
              Edit Contact Details
            </span>
          </div>
         
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
                onChange={(e) => handleChange("Name", e.target.value)}
                placeholder="Type here...."
              />
              {errors.Name && (
                <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                  {errors.Name}
                </p>
              )}
            </div>
            <div className="md:w-[30%] w-full mb-3">
              <div className="w-full">
                <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                  Contact Number*
                </p>
                <input
                  name="Contact"
                  type="text"
                  className="block rounded-[15px] focus:outline-[#bdbdbd] border-0 py-2.5 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-medium font-poppins"
                  value={formData.Contact}
                  onChange={(e) => handleChange("Contact", e.target.value)}
                  placeholder="Type here...."
                />
                {errors.Contact && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                    {errors.Contact}
                  </p>
                )}
              </div>
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
    onChange={(e) => handleChange("Email", e.target.value)}
    placeholder="Type here...."
  />
  {errors.Email && (
    <p className="pt-1 text-xs font-medium text-red-500 font-inter">
      {errors.Email}
    </p>
  )}
</div>

            <div className="md:w-[30%] w-full mb-3">
              <div className="w-full">
                <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                  Address*
                </p>
                <input
                  name="Address"
                  type="text"
                  className="block rounded-[15px] focus:outline-[#bdbdbd] border-0 py-2.5 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-medium font-poppins"
                  value={formData.Address}
                  onChange={(e) => handleChange("Address", e.target.value)}
                  placeholder="Type here...."
                />
                {errors.Address && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                    {errors.Address}
                  </p>
                )}
              </div>
            </div>

          </div>

       
          <div className="font-poppins font-normal text-[12px] leading-[18px] text-[#64728C] text-opacity-70 md:mt-8 mt-5">
            *Required Field
          </div>
          <div className="flex justify-end gap-5 md:mt-0 mt-7">
            <button
              className="bg-white font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#263679] hover:text-white text-[#263679] border border-[#263679] transition-all duration-300 flex items-center justify-center"
              
            >
              Reset
            </button>
            <button
              className="bg-[#263679] font-poppins text-[14px] font-semibold leading-[22px] text-white px-4 py-2 rounded-[20px] min-w-[80px] transition-all duration-300 flex items-center justify-center"
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? <ProcessingIcon /> : "Save"}
            </button>
          </div>
        </div>
      </section>
     
    </>
  );
};
