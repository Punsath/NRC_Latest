import { useState, useEffect } from "react";
import axiosClient from "../../../../axios-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ProcessingIcon,
  AddCustomerIcon,
  RemoveIcon,
} from "../../../utils/icons";
import { FormInput } from "../../../components/global/FormInput";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { customSelectStyles } from "../../../utils/utils";

export const OptionsAdd = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [Packages, setPackages] = useState([]);

  const initialEntry = {
    Title: "",
    Description: "",
  };

  const initialFormData = {
    Packege_idPackeges: selectedPackage,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formEntries, setFormEntries] = useState([initialEntry]);

  // Fetching package
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axiosClient.get(`/packeges`);

        let packagesArray = response.data.map((Packages) => ({
          value: Packages.idPackeges,
          label: Packages.Title,
        }));
        setPackages(packagesArray);
        if (packagesArray.length > 0) {
          setSelectedPackage(packagesArray[0]);
          setFormData((prev) => ({
            ...prev,
            Packege_idPackeges: packagesArray[0].value,
          }));
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch packages.");
      }
    };
    fetchPackages();
  }, []);

  // Handle package handle selection change
  const handlePackagesChange = (selectedOption) => {
    setSelectedPackage(selectedOption);
    setFormData({
      ...formData,
      Packege_idPackeges: selectedOption?.value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      Packege_idPackeges: "",
    }));
  };

  // Handle form input change
  const handleChange = (name, value, index) => {
    const updatedEntries = [...formEntries];
    updatedEntries[index][name] = value;
    setFormEntries(updatedEntries);
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Form validation logic
  const validate = (entries) => {
    const errors = {};

    if (!selectedPackage) {
      errors.Month = "Package is required.";
    }

    const filledEntries = entries.filter(
      (entry) => entry.Title.trim() !== "" && entry.Description.trim() !== ""
    );

    if (filledEntries.length === 0) {
      errors.form = "At least one Title and Description are required.";
    }

    entries.forEach((entry, index) => {
      if (!entry.Title) {
        errors[`Title_${index}`] = "Title is required.";
      }
      if (!entry.Description) {
        errors[`Description_${index}`] = "Description is required.";
      }
    });

    return errors;
  };

  // Add a new entry to the form
  const addMoreEntries = () => {
    setFormEntries([...formEntries, { Title: "", Description: "" }]);
  };

  // Remove an entry from the form
  const removeEntry = (indexToRemove) => {
    if (indexToRemove === 0) {
      return;
    }
    const updatedEntries = formEntries.filter(
      (_, index) => index !== indexToRemove
    );
    setFormEntries(updatedEntries);
  };

  // Construct data to send to the backend
  const newData = {
    Packege_idPackeges: formData.Packege_idPackeges,
    Package_options: formEntries,
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validateErrors = validate(formEntries);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      const result = await Swal.fire({
        text: "Are you sure you want to add the option?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Save and Issue",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        setSubmitting(true);
        try {
          await axiosClient.post(`/packeges/packege-options`, newData);
          toast.success("Packages added successfully!");
          setFormData(initialFormData);
          setSubmitting(false);
          navigate(`/admin/package`);
        } catch (error) {
          setSubmitting(false);
          toast.error("Failed to add packages. Please try again.");
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
            <AddCustomerIcon />
            <span className="font-poppins font-medium text-[16px] md:text-[22px] leading-8 md:leading-[30px] text-[#64728C] mt-1">
              New Options
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="md:w-[35%] w-full mb-3">
              <div className="w-full">
                <p className="font-inter mt-8 text-[14px] md:text-[16px] font-medium  leading-[24px]  text-[#64728C]">
                  Select Package*
                </p>
                <Select
                  className="basic-single text-[14px] mt-2"
                  classNamePrefix="select"
                  isSearchable={true}
                  name="Package"
                  options={Packages}
                  value={selectedPackage}
                  styles={customSelectStyles}
                  onChange={handlePackagesChange}
                />
                {errors.Month && (
                  <p className="pt-1 text-xs font-medium text-red-500 font-poppins">
                    {errors.Month}
                  </p>
                )}
              </div>
            </div>

            {formEntries.map((entry, index) => (
              <div
                key={index}
                className="flex md:space-x-4 mt-4 space-y-4 md:space-y-0 w-full"
              >
                <div className="md:w-[35%]">
                <FormInput
                    data={entry}
                    type="text"
                    errors={errors}
                    handleChange={(name, value) =>
                      handleChange("Title", value, index)
                    }
                    name="Title*"
                    inputName={`Title_${index}`}
                    placeholder="Type Title here..."
                  />
                </div>
                <div className="md:w-[35%]">
                <label
                    htmlFor={`Description_${index}`}
                    className="font-inter text-[14px] md:text-[16px] mt-6 font-medium text-[#64728C]"
                  >
                    Description*
                  </label>
                  <textarea
                    id={`Description_${index}`}
                    name={`Description_${index}`}
                    className="block w-full px-3 py-2 mt-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#263679] focus:border-[#263679] sm:text-sm"
                    value={entry.Description}
                    rows={3}
                    onChange={(e) =>
                      handleChange("Description", e.target.value, index)
                    }
                    placeholder="Type description here..."
                  />
                  {errors[`Description_${index}`] && (
                    <p className="pt-1 text-xs font-medium text-red-500 font-poppins">
                      {errors[`Description_${index}`]}
                    </p>
                  )}
                </div>
                {/* <div className="md:w-[35%] w-full mt-3 mb-3">
                  <FormInput
                    data={entry}
                    type="text"
                    errors={errors}
                    handleChange={(name, value) =>
                      handleChange("Title", value, index)
                    }
                    name="Title*"
                    inputName={`Title_${index}`}
                    placeholder="Type Title here..."
                  />
                </div>
                <div className="md:w-[35%] w-full mt-3 mb-3">
                  <label
                    htmlFor={`Description_${index}`}
                    className="font-inter text-[14px] md:text-[16px] mt-6 font-medium text-[#64728C]"
                  >
                    Description*
                  </label>
                  <textarea
                    id={`Description_${index}`}
                    name={`Description_${index}`}
                    className="block w-full px-3 py-2 mt-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#263679] focus:border-[#263679] sm:text-sm"
                    value={entry.Description}
                    rows={3}
                    onChange={(e) =>
                      handleChange("Description", e.target.value, index)
                    }
                    placeholder="Type description here..."
                  />
                  {errors[`Description_${index}`] && (
                    <p className="pt-1 text-xs font-medium text-red-500 font-poppins">
                      {errors[`Description_${index}`]}
                    </p>
                  )}
                </div> */}

                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeEntry(index)}
                    className="flex items-center"
                  >
                    <RemoveIcon />
                  </button>
                )}
              </div>
            ))}

            <div className="font-poppins font-normal text-[12px] leading-[18px] text-[#64728C] text-opacity-70 md:mt-5 mt-3">
              <button
                className="bg-[#263679] font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#374D66] hover:text-white text-white border border-[#263679] transition-all duration-300 flex items-center gap-2 justify-center"
                type="button"
                onClick={addMoreEntries}
              >
                Add More Options
              </button>
            </div>

            <div className="font-poppins font-normal text-[12px] leading-[18px] text-[#64728C] text-opacity-70 md:mt-5 mt-3">
              *Required Fields
            </div>
            <div className="flex justify-end gap-5 md:mt-0 mt-7">
              <button
                className="bg-white font-poppins text-[14px] font-semibold leading-[22px] px-6 py-2 rounded-[20px] min-w-[80px] hover:bg-[#F1F1F1] hover:text-[#64728C] text-[#64728C] border border-[#64728C] transition-all duration-300"
                type="button"
                onClick={() => navigate("/admin/package")}
              >
                Cancel
              </button>

              <button
                className="bg-[#263679] font-poppins text-[14px] font-semibold leading-[22px] px-6 py-2 rounded-[20px] min-w-[80px] hover:bg-[#374D66] hover:text-white text-white border border-[#263679] transition-all duration-300 flex items-center gap-2 justify-center"
                type="submit"
                disabled={submitting}
              >
                {submitting ? <ProcessingIcon /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};
