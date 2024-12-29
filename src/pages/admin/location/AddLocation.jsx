import { useState, useEffect } from "react";
import Select from "react-select";
import { districts } from "../../../utils/dataArrays";
import { customSelectStyles } from "../../../utils/utils";
import axiosClient from "../../../../axios-client";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ProcessingIcon } from "../../../utils/icons";

export const AddLocation = () => {
  const [image, setImage] = useState(null); // state for image store
  console.log("image", image);
  const [errors, setErrors] = useState({});
  // Initial form data state
  const [formData, setFormData] = useState({
    Name: "",
    Description: "",
    DistrictId: 0,
    LocationCategory_idLocationCategory:""
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const [locationCategory, setLocationCategory] = useState([]);

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

  // Handle error type selection change
  const handleDistrictChange = (event) => {
    setFormData({ ...formData, DistrictId: event.value });
    setErrors({ ...errors, DistrictId: "" });
  };

  const handleCategoryChange = (event) => {
    setFormData({ ...formData, LocationCategory_idLocationCategory: event.value });
    setErrors({ ...errors, LocationCategory_idLocationCategory: "" });
  };

  // Handle input field change
  const handleInputChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  // Remove selected image from the list
  const removeImage = () => {
    if (image) {
      URL.revokeObjectURL(image.preview);
      setImage(null);
    }
  };

  // Validate form data before submission
  const validate = (valData) => {
    const errors = {};
    if (!valData.Name) {
      errors.Name = "Name is required.";
    }
    if (!valData.DistrictId) {
      errors.DistrictId = "District is required.";
    }
    if (!valData.Description) {
      errors.Description = "Description is required.";
    }
    if (!valData.LocationCategory_idLocationCategory) {
      errors.LocationCategory_idLocationCategory = "Location Category is required.";
    }
    return errors;
  };

  // Reset the form to its initial state
  const resetForm = () => {
    setImage(null);
    setFormData({
      Name: "",
      DistrictId: 0,
      Description: "",
    });
  };

  // Handle form submission
  const handleSave = () => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    setSubmitting(true);

    const sendData = new FormData();
    sendData.append("Name", formData.Name);
    sendData.append("DistrictId", formData.DistrictId);
    sendData.append("LocationCategory_idLocationCategory", formData.LocationCategory_idLocationCategory);
    sendData.append("Description", formData.Description);
    if (image) {
      sendData.append("Picture", image.file);
    }
    axiosClient
      .post("locations", sendData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success("Breakdown Request added successfully!");
        resetForm();
        navigate("/admin/locations");
      })
      .catch((error) => {
        console.error("Error saving Breakdown Request:", error);
        toast.error("Failed to add Breakdown Request. Please try again.");
        // setSubmitting(false);
      });
  };

  const districtOptions = districts.map((district) => ({
    value: district.id,
    label: district.name,
  }));

  return (
    <>
      <section className="pb-12 mt-8">
        <div className="w-full bg-white rounded-[15px] md:px-[30px] px-[4%] pt-[20px] pb-[40px]">
          <div className="flex items-center gap-4">
            <span className="font-poppins font-medium text-[16px] md:text-[22px] leading-8 md:leading-[30px] text-[#64728C] mt-1">
              New Location
            </span>
          </div>
          <>
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
                <div className="w-full">
                  <p className="font-poppins text-[14px] md:text-[16px] leading-[24px] font-medium text-[#64728C]">
                    Description*
                  </p>
                  <input
                    name="Description"
                    type="text"
                    className="block rounded-[15px] focus:outline-[#bdbdbd] border-0 py-2.5 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-medium font-poppins"
                    value={formData.Description}
                    onChange={(e) =>
                      handleInputChange(e.target.value, "Description")
                    }
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
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="block w-full text-sm mt-3 text-[#64728C] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[14px] file:font-semibold file:bg-[#f3f4f6] file:text-[#64728C] hover:file:bg-[#e2e8f0]"
                />
                <div className="mt-5 flex gap-4">
                  {image && (
                    <div className="mt-5 relative">
                      <img
                        src={image.preview}
                        alt="upload-preview"
                        className="w-[130px] h-auto object-cover rounded-lg"
                      />
                      <button
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-500 text-white px-[5px] rounded-full text-[12px]"
                      >
                        X
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="font-poppins font-normal text-[12px] leading-[18px] text-[#64728C] text-opacity-70 md:mt-8 mt-5">
              *Required Field
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
      <ToastContainer autoClose={1500} />
    </>
  );
};
