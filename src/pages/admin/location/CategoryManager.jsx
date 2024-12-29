import React, { useState, useEffect } from "react";
import { Card, Dialog, Tooltip, IconButton } from "@material-tailwind/react";
import { CloseIcon, ProcessingIcon, ChangeIcon } from "../../../utils/icons";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axiosClient from "../../../../axios-client";

export const CategoryManager = ({ handleOpen, open }) => {
  const [submitting, setSubmitting] = useState(false);
  const [types, setTypes] = useState([]);
  const [typeTableLoading, setTypeTableLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [editType, setEditType] = useState({
    idLocation_Category: 0,
    Description: "",
  });

  const [addType, setAddType] = useState({
    Description: "",
  });

  const handleLoading = () => setTypeTableLoading((pre) => !pre);

  const resetEditForm = () => {
    setEditType({
      idLocation_Category: 0,
      Description: "",
    });
    setAddType({
      idLocation_Category: 0,
      Description: "",
    });
    setErrors({});
  };

  const handleClose = () => {
    handleOpen();
  };

  //Fetching current zones
  useEffect(() => {
    const fetchTypes = () => {
      axiosClient
        .get(`location-category`)
        .then((res) => {
          setTypes(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchTypes();
  }, [typeTableLoading]);

  const handleEditType = (type) => {
    setEditType({
      idLocation_Category: type.idLocation_Category,
      Description: type.Description,
    });
  };

  const handleEdit = () => {
    const validationErrors = validate(editType);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const errorMessage = Object.values(validationErrors).join(", ");
      toast.error(errorMessage);
      return;
    }
    setSubmitting(true);
    axiosClient
      .put(`location-category/${editType.idLocation_Category}`, editType)
      .then((response) => {
        handleLoading();
        toast.success("Types updated successfully !");
        resetEditForm();
        setSubmitting(false);
      })
      .catch((error) => {
        console.error("Error updating Zone:", error);
        toast.error("Failed to update Zone. Please try again.");
        setSubmitting(false);
      });
  };

  //Function for canceling a zone edit process
  const handleCancelEditType = () => {
    setEditType({
      idLocation_Category: 0,
      Description: "",
    });
  };

  // Validation function for form data
  const validate = (valData) => {
    const errors = {};
    if (!valData.Description) {
      errors.Description = "Add Description";
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: errors.Description,
        allowOutsideClick: false,
      });
    }
    let errorMessage = "";
    Object.values(errors).forEach((error) => {
      errorMessage += `${error}\n`;
    });
    return errors;
  };

  const handleSave = () => {
    const validationErrors = validate(addType);
    if (Object.keys(validationErrors).length > 0) {
      const errorMessages = Object.values(validationErrors).join("\n");
      toast.error(errorMessages);
      return;
    }
    setSubmitting(true);
    axiosClient
      .post("location-category", addType)
      .then((response) => {
        handleLoading();
        toast.success("Type added successfully !");
        setSubmitting(false);
      })
      .catch((error) => {
        console.error("Error saving Zone:", error);
        toast.error("Failed to add Zone. Please try again.");
        setSubmitting(false);
      });
  };

  const handleChangeStatus = async (row) => {
    setSubmitting(true);
    try {
      await axiosClient.put(
        `/location-category/change-status/${row.idLocation_Category}`
      );
      setSubmitting(false);
      handleLoading();
      toast.success("Status Changed successfully!");
    } catch (error) {
      setSubmitting(false);
      toast.error("Failed to change the status. Please try again.");
    }
  };

  const TABLE_CATEGORY = [
    {
      name: "Description",
      selector: (row) => row.Description,
      wrap: false,
      maxWidth: "auto",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={`${
            row.Status === 1
              ? "bg-[#9fff9b] text-[#076802]  px-[10px] py-[1px] rounded-[20px] text-[11px] font-semibold border-none w-[100px] text-center"
              : "bg-[#ffafaf] text-[#e00000] px-[5px] py-[1px] rounded-[20px] text-[11px] font-semibold border-none w-[100px] text-center"
          }`}
        >
          {row.Status === 1 ? "Active" : "Inactive"}
        </span>
      ),
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Tooltip content="Edit Product">
            <span
              className="cursor-pointer "
              onClick={() => handleEditType(row)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </span>
          </Tooltip>
          <Tooltip content="Change Status">
            <IconButton
              onClick={() => handleChangeStatus(row)}
              variant="text"
              className="mx-2 bg-white"
              disabled={submitting}
            >
              {submitting ? <ProcessingIcon /> : <ChangeIcon />}{" "}
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  //Custom styles fro the table
  const tableHeaderStyles = {
    headCells: {
      style: {
        font: "Poppins",
        fontWeight: "600",
        color: "#64728C",
        fontSize: "14px",
      },
    },
    cells: {
      style: {
        font: "Poppins",
        fontWeight: "normal",
        color: "#64728C",
        fontSize: "12px",
      },
    },
  };

  return (
    <>
      <Dialog
        size="sm"
        open={open}
        // handler={handleClose}
        className="bg-transparent shadow-none rounded-[10px] overflow-y-scroll scrollbar-hide overflow-x-hidden font-poppins"
      >
        <Card className="w-full p-5 mx-auto rounded-sm">
          <div className="flex justify-between mb-4 border-b align-center border-[#64728C] border-opacity-15">
            <div className="pb-3 text-lg font-medium font-poppins text-[#64728C]">
              Location Types
            </div>
            <div
              className="font-bold text-[20px] cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-5 ">
            <div className="flex items-center justify-between">
              <div className="w-[30%]">
                <h3 className="font-poppins font-medium text-[12px] md:text-[14px] leading-[18px] md:leading-[22px] mb-2 text-[#64728C]">
                  Description
                </h3>
              </div>
              <div className="w-[60%]">
                {editType.idLocation_Category !== 0 ? (
                  <input
                    name="Description"
                    type="text"
                    className="block rounded-[15px] py-2 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-normal font-poppins"
                    value={editType.Description}
                    onChange={(e) =>
                      setEditType({
                        ...editType,
                        Description: e.target.value,
                      })
                    }
                  />
                ) : (
                  <input
                    value={addType.Description}
                    name="Description"
                    type="text"
                    className="block rounded-[15px] focus:outline-[#bdbdbd] border-0 py-2 pl-3 text-gray-900 ring-1 ring-inset mt-2 ring-gray-300 placeholder:text-[#64728C]-400 placeholder:text-[14px] md:placeholder:text-[14px] placeholder:poppins focus:ring-1 focus:ring-inset sm:leading-6 w-full text-[14px] md:text-[15px] font-normal font-poppins"
                    onChange={(e) =>
                      setAddType({
                        ...addType,
                        Description: e.target.value,
                      })
                    }
                  />
                )}
                {errors.Description && (
                  <span className=" text-[#ff0000a1] px-1 font-inter font-bold text-xs">
                    {" "}
                    {errors.Description}{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end">
              {editType.idLocation_Category !== 0 ? (
                <div className="flex justify-between w-[60%]">
                  <button
                    onClick={() => handleCancelEditType()}
                    className="w-[49%] bg-white font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#263679] hover:text-white text-[#263679] border border-[#263679] transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleEdit()}
                    className="w-[49%] bg-[#263679] font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#374D66] hover:text-white text-white border border-[#263679] transition-all duration-300 flex items-center gap-2 justify-center"
                    disabled={submitting}
                  >
                    {submitting && <ProcessingIcon />}
                    Update
                  </button>
                </div>
              ) : (
                <div className="flex justify-end">
                  <button
                    type="submit"
                    onClick={() => handleSave()}
                    className="bg-[#263679] font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-white hover:text-[#263679] text-white border border-[#263679] transition-all duration-300"
                    disabled={submitting}
                  >
                    {submitting && <ProcessingIcon />}
                    Add Type
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="overflow-x-scroll md:overflow-auto scrollbar-x-style ">
            <DataTable
              columns={TABLE_CATEGORY}
              responsive
              data={types}
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
        </Card>
      </Dialog>
    </>
  );
};
