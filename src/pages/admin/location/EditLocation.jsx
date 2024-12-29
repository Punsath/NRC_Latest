import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../../axios-client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { districts } from "../../../utils/dataArrays";
import { customSelectStyles } from "../../../utils/utils";
import { ProcessingIcon } from "../../../utils/icons";

export const EditLocation = () => {
  const locationId = useParams().id;
  const navigate = useNavigate();

  const initialFormData = {
    Name: "",
    Description: "",
    DistrictId: null,
    LocationCategory_idLocationCategory:""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [locationCategory, setLocationCategory] = useState([]);

  //get location data by id
  useEffect(() => {
    const getLocation = () => {
      axiosClient
        .get(`/locations/${locationId}`)
        .then((res) => {
          let data = res.data[0];
          setFormData({
            Name: data.Name,
            Description: data.Description,
            DistrictId: data.DistrictId,
            LocationCategory_idLocationCategory:data.LocationCategory_idLocationCategory,
            Image: data.Image,
          });
          setImagePreview(data.picture_url);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    // if (locationId) {
    getLocation();
    //   }
  }, [locationId]);

  useEffect(() => {
    const fetchLocationCategory = () => {
      axiosClient
        .get(`location-category`)
        .then((res) => {
          const locationOptions = res.data.map((location) => ({
            label: location.Description,
            value: location.idLocation_Category, 
          }));
          setLocationCategory(locationOptions);
          
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
          toast.error("Failed to fetch locations. Please try again.");
        });
    };
    fetchLocationCategory();
  }, []);

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

  const handleDistrictChange = (selectedOption) => {
    setFormData({
      ...formData,
      DistrictId: selectedOption ? selectedOption.value : null,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      DistrictId: "",
    }));
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData({
      ...formData,
      LocationCategory_idLocationCategory: selectedOption ? selectedOption.value : null,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      LocationCategory_idLocationCategory: "",
    }));
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

  const districtOptions = districts.map((district) => ({
    value: district.id,
    label: district.name,
  }));

  const validate = (data) => {
    const errors = {};
    if (!formData.Name) {
      errors.Name = "Name is required.";
    }
    if (!formData.DistrictId) {
      errors.DistrictId = "District is required.";
    }
    if (!formData.Description) {
      errors.Description = "Description is required.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate(formData);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      setSubmitting(true);
      const data = new FormData();
      data.append("Name", formData.Name);
      data.append("DistrictId", formData.DistrictId);
      data.append("LocationCategory_idLocationCategory", formData.LocationCategory_idLocationCategory);
      data.append("Description", formData.Description);
      if (image) {
        data.append("Picture", image);
      }

      try {
        const response = await axiosClient.put(
          `/locations/${locationId}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setFormData(initialFormData);
        setSubmitting(false);
        navigate("/admin/locations");
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

  return (
    <>
      <section className="pb-12 mt-8">
        <div className="w-full bg-white rounded-[15px] md:px-[30px] px-[4%] pt-[20px] pb-[40px]">
          <div className="flex items-center gap-4">
            <span className="font-poppins font-medium text-[16px] md:text-[22px] leading-8 md:leading-[30px] text-[#64728C] mt-1">
              Edit Location
            </span>
          </div>
          <div className="flex flex-col items-start w-full gap-3 mt-6 md:flex-row md:gap-20 md:mt-10">
          <div className="md:w-[30%] w-full mb-3">
              <div className="w-full">
                <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                  Location Types*
                </p>
                <Select
                  className="basic-single text-[14px] mt-2"
                  classNamePrefix="select"
                  isSearchable={true}
                  name="LocationCategory_idLocationCategory"
                  options={locationCategory}
                  styles={customSelectStyles}
                  onChange={handleCategoryChange}
                  value={locationCategory.find(
                    (option) => option.value === formData.LocationCategory_idLocationCategory
                  )} // Set selected option
                />
                {errors.LocationCategory_idLocationCategory && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                    {errors.LocationCategory_idLocationCategory}
                  </p>
                )}
              </div>
            </div>
            <div className="md:w-[30%] w-full mb-3">
              <div className="w-full">
                <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                  District*
                </p>
                <Select
                  className="basic-single text-[14px] mt-2"
                  classNamePrefix="select"
                  isSearchable={true}
                  name="DistrictId"
                  options={districtOptions}
                  styles={customSelectStyles}
                  onChange={handleDistrictChange}
                  value={districtOptions.find(
                    (option) => option.value === formData.DistrictId
                  )} // Set selected option
                />
                {errors.DistrictId && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                    {errors.DistrictId}
                  </p>
                )}
              </div>
            </div>

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
                value={formData.Name} // Bind value
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
                  Description*
                </p>
                <input
                  name="Description"
                  type="text"
                  className="block rounded-[15px] focus:outline-[#bdbdbd] border-0 py-2.5 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-medium font-poppins"
                  value={formData.Description}
                  onChange={(e) => handleChange("Description", e.target.value)}
                  placeholder="Type here...."
                />
                {errors.Description && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-inter">
                    {errors.Description}
                  </p>
                )}
              </div>
            </div>

          </div>

          <div className="flex flex-col items-start w-full gap-3 mt-6 md:flex-row md:gap-20 md:mt-10">
          <div className="md:w-[30%] w-full mb-3">
              <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                Image*
              </p>
              <div className="flex w-fit items-center justify-between gap-5">
                <input
                  type="file"
                  id="image-input"
                  className="file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 mt-2 block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold"
                  onChange={handleFileChange}
                />
              </div>
              {errors.Image && (
                <p className="font-inter pt-1 text-xs font-medium text-red-500">
                  {errors.Image}
                </p>
              )}
              {/* Image preview */}
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
          </div>
          <div className="font-poppins font-normal text-[12px] leading-[18px] text-[#64728C] text-opacity-70 md:mt-8 mt-5">
            *Required Field
          </div>
          <div className="flex justify-end gap-5 md:mt-0 mt-7">
            <button
              className="bg-white font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#263679] hover:text-white text-[#263679] border border-[#263679] transition-all duration-300 flex items-center justify-center"
              // onClick={resetForm}
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
      {/* <ToastContainer /> */}
    </>
  );
};
