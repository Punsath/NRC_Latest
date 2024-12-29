import { useState, useEffect } from "react";
import axiosClient from "../../../../axios-client";
import { ToastContainer, toast } from "react-toastify";
import { IconButton, Tooltip } from "@material-tailwind/react";
import "react-toastify/dist/ReactToastify.css";
import { Card, Dialog } from "@material-tailwind/react";
import {
  CloseIcon,
  ProcessingIcon,
  AddCustomerIcon,
  RemoveIcon,
  DeleteIcon,
} from "../../../utils/icons";
import DataTable from "react-data-table-component";
import { tableHeaderStyles } from "../../../utils/utils";
import Swal from "sweetalert2";

export const ViewOptions = ({ handleOpen, open, packege, handleLoading }) => {
  const handleClose = () => {
    handleOpen();
  };

  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [optionsTableLoading, setOptionsTableLoading] = useState(false);
  const handleOptionsLoading = () => setOptionsTableLoading((pre) => !pre);

  const initialEntry = {
    Title: "",
    Description: "",
  };

  const initialFormData = {
    Packege_idPackeges: packege.idPackeges,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formEntries, setFormEntries] = useState([initialEntry]);
  const [packeges, setPackages] = useState({});

  const packageId = packege.idPackeges;

  //get package data by id
  useEffect(() => {
    const getPackageById = () => {
      axiosClient
        .get(`/packeges/${packageId}`)
        .then((res) => {
          let data = res.data[0];
          setPackages(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPackageById();
  }, [packageId, optionsTableLoading]);

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

    const filledEntries = entries.filter(
      (entry) => entry.Title.trim() !== "" 
    );

    if (filledEntries.length === 0) {
      errors.form = "At least one Title and Description are required.";
    }

    entries.forEach((entry, index) => {
      if (!entry.Title) {
        errors[`Title_${index}`] = "Title is required.";
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
          setFormEntries([initialEntry]);
          handleLoading();
          handleOptionsLoading();
          setSubmitting(false);
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


   // Handle option deletion
   const handleDeleteOption = async (row) => {
    const result = await Swal.fire({
      text: "Are you sure you want to delete this option?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await axiosClient.delete(`/packeges/packege-options/${row.idPackegeOptions}`);
        toast.success("Option deleted successfully!");
        handleOptionsLoading();
      } catch (error) {
        toast.error("Failed to delete option. Please try again.");
      }
    }
  };

  const TABLE_OPTIONS = [
    {
      name: "Title",
      selector: (row) => row.Title,
      wrap: false,
      compact: true,
      maxWidth: "150px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: false,
    },
    {
      name: "Description",
      selector: (row) => row.Description ? row.Description : "-",
      wrap: false,
      compact: true,
      minWidth: "150px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      
    },
    {
        name: "Action",
        cell: (row) => (
          <Tooltip content="Package Options">
            <IconButton
              onClick={() => handleDeleteOption(row)}
              variant="text"
              className="mx-2 bg-white"
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
  ];
  return (
    <>
      <Dialog
        size="sm"
        open={open}
        // handler={handleClose}
        className="bg-transparent  shadow-none rounded-[10px] scrollbar-hide overflow-x-hidden font-poppins"
      >
        <Card className="w-full p-5 mx-auto rounded-sm text-[#64728C]">
          <div className="flex justify-between mb-4 border-b align-center border-[#64728C] border-opacity-15">
            <div className="pb-3 text-lg font-medium font-poppins ">
              {packege.Title} Package Options
            </div>
            <div
              className="font-bold text-[20px] cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="overflow-y-auto max-h-[80vh] shadow-none rounded-[10px] scrollbar-hide overflow-x-hidden font-poppins">
            <form onSubmit={handleSubmit}>
              {formEntries.map((entry, index) => (
                <div
                  key={index}
                  className="flex md:space-x-4 mt-4 space-y-4 md:space-y-0 w-full"
                >
                  <div className="md:w-[45%]">
                    <label
                      htmlFor={`Description_${index}`}
                      className="font-inter text-[14px] md:text-[16px] mt-6 font-medium text-[#64728C]"
                    >
                      Title*
                    </label>
                    <input
                      type="text"
                      id={`Title_${index}`}
                      name={`Title_${index}`}
                      className="block w-full px-3 py-2 mt-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#263679] focus:border-[#263679] sm:text-sm"
                      value={entry.Title}
                      rows={3}
                      onChange={(e) =>
                        handleChange("Title", e.target.value, index)
                      }
                    />
                    {errors[`Title_${index}`] && (
                      <p className="pt-1 text-xs font-medium text-red-500 font-poppins">
                        {errors[`Title_${index}`]}
                      </p>
                    )}
                  </div>
                  <div className="md:w-[45%]">
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
            <div>
              <DataTable
                columns={TABLE_OPTIONS}
                responsive
                data={packeges.Packege_options}
                customStyles={tableHeaderStyles}
                className="mt-4 "
                pagination
                paginationPerPage={4}
                paginationRowsPerPageOptions={[4]}
                paginationComponentOptions={{
                  rowsPerPageText: "Entries per page:",
                  rangeSeparatorText: "of",
                }}
                noDataComponent={
                  <div className="text-center">No data available</div>
                }
              />
            </div>
          </div>
        </Card>
      </Dialog>
      <ToastContainer />
    </>
  );
};
