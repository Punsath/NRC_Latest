import { useState, useEffect } from "react";
import { DeleteIcon, EditNewIcon, PlusIcon, ProcessingIcon } from "../../../utils/icons";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axiosClient from "../../../../axios-client";


import Swal from "sweetalert2";

export const ContactDetails = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [locationTableLoading, setLocationTableLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCategoryOpen = () => setCategoryOpen((cur) => !cur);

  const fetchLocations = () => {
    setLocationTableLoading(true);
    axiosClient
      .get(`contact-table`) 
      .then((res) => {
        setLocations(res.data);
        setLocationTableLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching Contact Details:", error);
        toast.error("Failed to fetch Contact Details. Please try again.");
        setLocationTableLoading(false); 
      });
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleDeleteContact = async (row) => {
    Swal.fire({
      title: 'Are you want to delete Contact Details?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        setSubmitting(true);
        try {
          await axiosClient.delete(`/contact-table/${row.idContactTable}`);
          setSubmitting(false);
          fetchLocations();
          toast.success("Status Changed successfully!");
        } catch (error) {
          setSubmitting(false);
          toast.error("Failed to change the status. Please try again.");
        }
      }
    });
  };

  const TABLE_CONTACT = [
    {
      name: "Name",
      selector: (row) => row.Name,
      wrap: false,
      minWidth: "200px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: true,
    },
    {
      name: "Contact Number",
      selector: (row) => row.Contact,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Address",
      selector: (row) => row.Address,
      wrap: false,
      maxWidth: "auto",
    },
    
    {
      name: "Action",
      cell: (row) => (
        <>
          <Tooltip content="Edit Contact Details">
            <Link
              to={`/admin/contact-edit/${row.idContactTable}`}
              state={{ contactDetails: row }} 
            >
              <IconButton variant="text" className="mx-2 bg-white">
                <EditNewIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip content="Delete Contact Details">
            <IconButton
              onClick={() => handleDeleteContact(row)}
              variant="text"
              className="mx-2 bg-white"
              disabled={submitting}
            >
              {submitting ? <ProcessingIcon /> : <DeleteIcon />}{" "}
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  

  const tableHeaderStyles = {
    headCells: {
      style: {
        fontFamily: "Poppins",
        fontWeight: "600",
        color: "#64728C",
        fontSize: "14px",
      },
    },
    cells: {
      style: {
        fontFamily: "Poppins",
        fontWeight: "normal",
        color: "#64728C",
        fontSize: "12px",
      },
    },
  };

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "14px",
      fontWeight: "600",
      color: state.isFocused ? "#64728C" : "#64728C82",
      borderColor: state.isFocused ? "#64728C" : provided.borderColor,
      boxShadow: state.isFocused ? "0 0 0 1px #64728C" : provided.boxShadow,
      "&:hover": {
        borderColor: state.isFocused ? "#64728C" : provided.borderColor,
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#64728C" : "#64728C",
      backgroundColor: state.isSelected ? "#e7e7e7" : "white",
      ":hover": {
        backgroundColor: state.isSelected ? "#ccc" : "#f3f3f3",
      },
      fontSize: "14px",
      fontWeight: "600",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#64728C",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#bdbdbd",
    }),
  };

  return (
    <>
      {/* Desktop version */}
      <section className=" mt-8 ">
       
        <div className="w-full bg-white rounded-[15px] px-[30px] pt-[20px] pb-[20px] mt-10 relative">
          <Link
            className="w-[50px] aspect-square absolute rounded-full bg-[#76BC21] -top-5 -right-3 flex items-center justify-center cursor-pointer"
            to="add"
          >
            <PlusIcon width={"24px"} color={"#FFFFFF"} />
          </Link>
          <DataTable
            columns={TABLE_CONTACT}
            responsive
            data={locations}
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
      </section>

      <ToastContainer />
      
    </>
  );
};
