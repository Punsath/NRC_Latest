import { useState, useEffect } from "react";
import { DeleteIcon, EditNewIcon, PlusIcon, ProcessingIcon } from "../../../utils/icons";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axiosClient from "../../../../axios-client";
import { CategoryManager } from "./CategoryManager";
import { districts } from "../../../utils/dataArrays";
import Swal from "sweetalert2";

export const Locations = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [locationTableLoading, setLocationTableLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCategoryOpen = () => setCategoryOpen((cur) => !cur);

  const fetchLocations = () => {
    setLocationTableLoading(true);
    axiosClient
      .get(`locations`) // Update the endpoint to /location
      .then((res) => {
        setLocations(res.data);
        setLocationTableLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
        toast.error("Failed to fetch locations. Please try again.");
        setLocationTableLoading(false); // Set loading to false if there's an error
      });
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleDeleteLocation = async (row) => {
    Swal.fire({
      title: 'Are you want to delete location?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        setSubmitting(true);
        try {
          await axiosClient.delete(`/locations/${row.idLocations}`);
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

  const TABLE_LOCATIONS = [
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
      name: "Description",
      selector: (row) => row.Description,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "District",
      selector: (row) => getDistrictNameById(row.DistrictId),
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Tooltip content="Edit Location">
            <Link to={`/admin/locations-edit/${row.idLocations}`}>
              <IconButton variant="text" className="mx-2 bg-white">
                <EditNewIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip content="delete Location">
            <IconButton
              onClick={() => handleDeleteLocation(row)}
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

  // Function to get the district name by its ID
  const getDistrictNameById = (id) => {
    const district = districts.find((district) => district.id === id);
    return district ? district.name : "Unknown District";
  };

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
        <div className="w-full bg-white rounded-[15px] px-[30px] pt-[20px] pb-[40px]">
          <div className="flex flex-col items-start mt-2 md:flex-row md:justify-between">
            <div className="flex flex-wrap justify-start">
              {/* <div className="w-full md:w-[250px] md:mr-5 mb-4 md:mb-0">
                <p className="font-poppins text-[14px] font-medium leading-[22px] text-[#64728C] pb-2">
                  Search Locations
                </p>
                <input
                  type="text"
                  placeholder="Type here...."
                //   value={searchInput} // Bind searchInput state to input value
                //   onChange={handleSearch} // Call handleSearch on input change
                  className="border border-[#e6e8ed] rounded-[15px] px-5 py-2 w-full text-[15px] font-poppins font-medium focus:outline-[#bdbdbd] leading-[22px]"
                />
              </div> */}
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex items-center justify-end w-full pb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCategoryOpen}
                    className="bg-[#769EFF] bg-opacity-30 font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] items-center justify-center gap-2 text-[#10275E] hidden md:flex hover:opacity-70"
                  >
                    <span></span>
                    <span>Location Types</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-[15px] px-[30px] pt-[20px] pb-[20px] mt-10 relative">
          <Link
            className="w-[50px] aspect-square absolute rounded-full bg-[#76BC21] -top-5 -right-3 flex items-center justify-center cursor-pointer"
            to="add"
          >
            <PlusIcon width={"24px"} color={"#FFFFFF"} />
          </Link>
          <DataTable
            columns={TABLE_LOCATIONS}
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
      <CategoryManager handleOpen={handleCategoryOpen} open={categoryOpen} />
    </>
  );
};
