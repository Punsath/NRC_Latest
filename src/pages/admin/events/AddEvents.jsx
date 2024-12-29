import { useState } from "react";
import axiosClient from "../../../../axios-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProcessingIcon, AddCustomerIcon } from "../../../utils/icons";
import { FormInput } from "../../../components/global/FormInput";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const AddEvents = () => {
  const navigate = useNavigate();

  const [uploadedImages, setUploadedImages] = useState([]);

  const [submitting, setSubmitting] = useState(false);
  const initialFormData = {
    Month: "",
    Date: "",
    Year: "",
    Name: "",
    Description: "",
  };

  // State variables for form data and errors
  const [formData, setFormData] = useState(initialFormData);
  const [Picture, setPicture] = useState([]); // New state for file upload
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPicture(file); // Set the file to state
    } else {
      setPicture(null); // Reset if no file is selected
    }
  };

  const validate = (data) => {
    const errors = {};

    if (!data.Month) {
      errors.Month = "Month is required.";
    }
    if (!data.Date) {
      errors.Date = "Date is required.";
    }
    if (!data.Year) {
      errors.Year = "Year is required.";
    }
    if (!data.Name) {
      errors.Name = "Name is required.";
    }
    if (!data.Description) {
      errors.Description = "Description is required.";
    }
    if (!Picture) {
      errors.Picture = "Picture is required.";
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validateErrors = validate(formData);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0 && Picture) {
      const result = await Swal.fire({
        text: "Are you sure you want to add the event?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Save and Issue",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        setSubmitting(true);
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, formData[key]);
        });

        formDataToSend.append("Picture", Picture); // Append the file to the form data

        try {
          await axiosClient.post(`/events`, formDataToSend, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          toast.success("Event added successfully!");
          setFormData(initialFormData);
          setPicture(null);
          setSubmitting(false);
          navigate(`/admin/events`);
        } catch (error) {
          setSubmitting(false);
          toast.error("Failed to add event. Please try again.");
        }
      }
    } else {
      Swal.fire({
        icon: "error",
        text: "Please fill out all required fields and upload a picture.",
        allowOutsideClick: false,
      });
    }
  };

  // Array of input items for rendering the form
  const inputItems = [
    {
      name: "Month*",
      inputName: "Month",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Date*",
      inputName: "Date",
      type: "text",
      placeholder: "DD",
    },
    {
      name: "Year*",
      inputName: "Year",
      type: "text",
      placeholder: "YYYY",
    },
    {
      name: "Event Name*",
      inputName: "Name",
      type: "text",
      placeholder: "Type here....",
    },
  ];

  return (
    <>
      <section className="pb-12 mt-8">
        <div className="w-full bg-white rounded-[15px] md:px-[30px] px-[4%] pt-[20px] pb-[40px]">
          <div className="flex items-center gap-4">
            <AddCustomerIcon />
            <span className="font-poppins font-medium text-[16px] md:text-[22px] leading-8 md:leading-[30px] text-[#64728C] mt-1">
              New Event
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            {inputItems
              .reduce((rows, item, index) => {
                // Create a new row every two items
                if (index % 2 === 0) {
                  rows.push([item]);
                } else {
                  rows[rows.length - 1].push(item);
                }
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <div
                  className="flex flex-col md:flex-row items-start w-full gap-3 mt-3 md:gap-20 md:mt-5"
                  key={rowIndex}
                >
                  {row.map((item, itemIndex) => (
                    <div className="md:w-[30%] w-full mb-3" key={itemIndex}>
                      <FormInput
                        data={formData}
                        type={item.type}
                        errors={errors}
                        handleChange={handleChange}
                        name={item.name}
                        inputName={item.inputName}
                        placeholder={item.placeholder}
                      />
                    </div>
                  ))}
                </div>
              ))}

            {/* Description as textarea */}
            <div className="md:w-[30%] w-full mb-3 mt-3">
              <label className="block font-poppins font-medium text-[14px] leading-6 text-[#64728C]">
                Description
              </label>
              <textarea
                value={formData.Description}
                onChange={(e) => handleChange("Description", e.target.value)}
                placeholder="Type here...."
                className="mt-2 block w-full h-[120px] p-3 border border-gray-300 rounded-md resize-none focus:outline-none "
              />
              {errors.Description && (
                <span className="text-red-500 text-sm">
                  {errors.Description}
                </span>
              )}
            </div>

            {/* File upload input for picture */}
            <div className="md:w-[30%] w-full mb-3 mt-3">
              <label className="block font-poppins font-medium text-[14px] leading-6 text-[#64728C]">
                Picture*
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-2 block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-[#263679] file:text-white
                          hover:file:bg-[#374D66]"
              />
              {errors.Picture && (
                <span className="text-red-500 text-sm">{errors.Picture}</span>
              )}
            </div>

            <div className="font-poppins font-normal text-[12px] leading-[18px] text-[#64728C] text-opacity-70 md:mt-5 mt-3">
              *Required Fields
            </div>
            <div className="flex justify-end gap-5 md:mt-0 mt-7">
              <button
                className="bg-white font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#263679] hover:text-white text-[#263679] border border-[#263679] transition-all duration-300 flex items-center gap-2 justify-center"
                type="button"
                onClick={() => {
                  setFormData(initialFormData);
                  setPicture(null);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-[#263679] font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#374D66] hover:text-white text-white border border-[#263679] transition-all duration-300 flex items-center gap-2 justify-center"
                type="submit"
                disabled={submitting}
              >
                {submitting && <ProcessingIcon />} Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
