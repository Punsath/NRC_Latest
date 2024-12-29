import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../../axios-client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProcessingIcon, AddCustomerIcon } from "../../../utils/icons";
import { FormInput } from "../../../components/global/FormInput";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

export const EditEvents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("id", id);
  const initialFormData = {
    Month: "",
    Date: "",
    Year: "",
    Name: "",
    Description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  //get location data by id
  useEffect(() => {
    const getEvent = () => {
      axiosClient
        .get(`/events/${id}`)
        .then((res) => {
          let data = res.data[0];
          setFormData({
            Month: data.Month,
            Date: data.Date,
            Year: data.Year,
            Name: data.Name,
            Description: data.Description,
            Image: data.Picture,
          });
          setImagePreview(data.picture_url);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    // if (locationId) {
    getEvent();
    //   }
  }, [id]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the selected file
    setImage(selectedFile); // Set the file in the state
    setImagePreview(URL.createObjectURL(selectedFile)); // Set image preview
    setErrors({
      ...errors,
      Image: "", // Clear any previous image error
    });
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleClearImage = () => {
    setImage(null);
    setImagePreview(null); // Clear image preview
    setErrors({
      ...errors,
      Image: "",
    });
    document.getElementById("image-input").value = "";
  };

  const validate = (data) => {
    const errors = {};
    if (!data.Month) errors.Month = "Month is required.";
    if (!data.Date) errors.Date = "Date is required.";
    if (!data.Year) errors.Year = "Year is required.";
    if (!data.Name) errors.Name = "Name is required.";
    if (!data.Description) errors.Description = "Description is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate(formData);
    console.log(validateErrors);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      setSubmitting(true);
      const data = new FormData();
      data.append("Month", formData.Month);
      data.append("Date", formData.Date);
      data.append("Year", formData.Year);
      data.append("Name", formData.Name);
      data.append("Description", formData.Description);
      if (image) {
        data.append("Picture", image);
      }

      try {
        const response = await axiosClient.put(`/events/${id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setFormData(initialFormData);
        setSubmitting(false);
        navigate("/admin/events");
        toast.success("Product added successfully!");
      } catch (error) {
        console.log(error);
        setSubmitting(false);
        toast.error("Failed to add product!");
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
      placeholder: "Type here....",
    },
    {
      name: "Year*",
      inputName: "Year",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Name*",
      inputName: "Name",
      type: "text",
      placeholder: "Type here....",
    },
    {
      name: "Description*",
      inputName: "Description",
      type: "text",
      placeholder: "Type here....",
    },
  ];

  return (
    <>
      <section className="mt-8 pb-12">
        <div className="w-full bg-white rounded-[15px] md:px-[30px] px-[4%] pt-[20px] pb-[40px]">
          <div className="flex items-center gap-4">
            <AddCustomerIcon />
            <span className="font-poppins font-medium text-[16px] md:text-[22px] leading-8 md:leading-[30px] text-[#64728C] mt-1">
              Edit Event
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col md:flex-row items-start md:gap-20 gap-3 md:mt-10 mt-6">
              {inputItems.slice(0, 3).map((item, itemIndex) => (
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
            <div className="w-full flex flex-col md:flex-row items-start md:gap-20 gap-3 md:mt-5 mt-3">
              {inputItems.slice(3, 5).map((item, itemIndex) => (
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
              {imagePreview && (
                <div className="relative mt-3 w-[130px]">
                  <img
                    src={imagePreview}
                    alt="Selected"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  {image && (
                    <div
                      className="absolute top-[5px] right-[5px] bg-red-500 px-[5px] rounded-full text-[12px] text-white cursor-pointer"
                      onClick={handleClearImage}
                    >
                      X
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="font-poppins font-normal text-[12px] leading-[18px] text-[#64728C] text-opacity-70 md:mt-5 mt-3">
              *Required Fields
            </div>
            <div className="flex justify-end gap-5 md:mt-0 mt-7">
              <button
                className="bg-[#769EFF] bg-opacity-30 font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] text-[#10275E] hover:opacity-80"
                type="button"
                onClick={() => navigate("/events")}
              >
                Cancel
              </button>
              <button
                className="bg-[#769EFF] bg-opacity-30 font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] flex items-center justify-center gap-2 text-[#10275E] hover:opacity-80"
                type="submit"
                disabled={submitting}
              >
                {submitting && <ProcessingIcon />}
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
