import React, { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@material-tailwind/react";
import {
  PlusIcon,
  PaginateLeft,
  PaginateRight,
  ViewIcon,
  ProcessingIcon,
  ChangeIcon,
} from "../../../utils/icons";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";
import { tableHeaderStyles } from "../../../utils/utils";
import axiosClient from "../../../../axios-client";
import { ViewOptions } from "./ViewOptions";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TravelPackage = () => {
  const [packeges, setPackeges] = useState([]);
  const [filteredPackeges, setFilteredPackeges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [packegesPerPage] = useState(10);
  const [expandedPackegesIndex, setExpandedPackegesIndex] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleViewOpen = () => setViewOpen((cur) => !cur);

  const [packageTableLoading, setPackageTableLoading] = useState(false);
  const handleLoading = () => setPackageTableLoading((pre) => !pre);

  // Fetching event details
  useEffect(() => {
    const fetchPackeges = () => {
      axiosClient
        .get(`/packeges`)
        .then((res) => {
          setPackeges(res.data);
          setFilteredPackeges(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchPackeges();
  }, [packageTableLoading]);

  // Handling search
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // Filtering the data based on search query
  useEffect(() => {
    const filtered = packeges.filter((packege) =>
      packege.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPackeges(filtered);
  }, [searchQuery, packeges]);

  const handleViewClick = (packages) => {
    setSelectedPackage(packages);
    setViewOpen(true);
  };

  const handleChangeStatus = async (row) => {
    setSubmitting(true);
    try {
      await axiosClient.put(`/packeges/change-status/${row.idPackeges}`);
      setSubmitting(false);
      handleLoading();
      toast.success("Status Changed successfully!");
    } catch (error) {
      setSubmitting(false);
      toast.error("Failed to change the status. Please try again.");
    }
  };

  const TABLE_TRAVEL_PACKAGES = [
    {
      name: "Travel Package",
      selector: (row) => row.Title,
      wrap: false,
      minWidth: "100px",
      sortable: true,
    },
    {
      name: "Picture",
      selector: (row) => (
        <img
          src={row.Picture_URL}
          alt="Picture"
          className="max-w-[50px] h-auto rounded-md"
        />
      ),
      wrap: true,
      maxWidth: "auto",
    },
    {
      name: "Options Count",
      selector: (row) => row.Packege_options.length,
      wrap: false,
      maxWidth: "auto",
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
          <Tooltip content="Package Options">
            <IconButton
              onClick={() => handleViewClick(row)}
              variant="text"
              className="mx-2 bg-white"
            >
              <ViewIcon />
            </IconButton>
          </Tooltip>
          <Tooltip content="Change Status">
            <IconButton
              onClick={() => handleChangeStatus(row)}
              variant="text"
              className="mx-2 bg-white"
              disabled={submitting} // Disable button while submitting
            >
              {submitting ? <ProcessingIcon /> : <ChangeIcon />}{" "}
              {/* Show loading icon while submitting */}
            </IconButton>
          </Tooltip>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleExpandClick = (index) => {
    setExpandedEventIndex(expandedEventIndex === index ? null : index);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section className="hidden mt-8 md:block">
        <div className="w-full bg-white rounded-[15px] px-[30px] pt-[20px] pb-[40px]">
          <div className="flex flex-col mt-4 md:flex-row md:justify-left">
            <div className="w-full md:w-[250px] md:mr-5 mb-4 md:mb-0">
              <p className="font-poppins text-[14px] font-medium leading-[22px] text-[#64728C] pb-2">
                Search Packages
              </p>
              <input
                type="text"
                placeholder="Type here...."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="border border-[#e6e8ed] focus:outline-[#bdbdbd] rounded-[15px] px-5 py-2 min-w-[250px] text-[15px] font-poppins font-medium leading-[22px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-[15px] mb-5 px-[30px] pt-[20px] pb-[20px] mt-10 relative">
          <Link
            className="w-[50px] aspect-square absolute rounded-full bg-[#76BC21] -top-5 -right-3 flex items-center justify-center cursor-pointer"
            to="package-add"
          >
            <PlusIcon width={"24px"} color={"#FFFFFF"} />
          </Link>
          <DataTable
            columns={TABLE_TRAVEL_PACKAGES}
            responsive
            data={filteredPackeges}
            customStyles={tableHeaderStyles}
            pagination
            paginationPerPage={packegesPerPage}
            paginationRowsPerPageOptions={[5, 10, 15]}
            noDataComponent={
              <div className="text-center">No data available</div>
            }
          />
        </div>
      </section>

      {/* Mobile version */}
      <section className="mt-5 bg-white px-[3%] w-full rounded-[10px] py-3 md:hidden">
        <div className="flex justify-end">
          <Link
            className="w-[30px] aspect-square rounded-full bg-[#76BC21] -top-5 -right-3 flex items-center justify-center cursor-pointer"
            to="package-add"
          >
            <PlusIcon width={"14px"} color={"#FFFFFF"} />
          </Link>
        </div>
        <div className="flex flex-col mt-3">
          <div className="w-full mb-4 md:w-1/5 md:mr-5 md:mb-0">
            <p className="font-poppins text-[14px] font-medium leading-[22px] text-[#64728C] pb-2">
              Search Event
            </p>
            <input
              type="text"
              placeholder="Type here...."
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="border border-[#e6e8ed] focus:outline-[#bdbdbd] rounded-[15px] px-5 py-2 min-w-[250px] text-[15px] font-poppins font-medium leading-[22px]"
            />
          </div>
        </div>
        <div className="w-full pt-5">
          {filteredPackeges
            .slice(
              (currentPage - 1) * packegesPerPage,
              currentPage * packegesPerPage
            )
            .map((packege, index) => (
              <div key={index} className="w-full">
                <div className="flex items-center px-2 py-2 border-b border-[#64728C] border-opacity-10">
                  <span className="font-poppins font-medium text-[12px] leading-[18px] text-[#64728C]">
                    {packege.Title}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-end gap-4 mt-10">
          <span className="font-poppins font-medium text-[10px] text-[#64728C]">
            Page {currentPage} of{" "}
            {Math.ceil(filteredPackeges.length / packegesPerPage)}
          </span>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <PaginateLeft />
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredPackeges.length / packegesPerPage)
            }
          >
            <PaginateRight />
          </button>
        </div>
      </section>

      {viewOpen && (
        <ViewOptions
          packege={selectedPackage}
          handleOpen={handleViewOpen}
          open={viewOpen}
          handleLoading={handleLoading}
        />
      )}
      <ToastContainer />
    </>
  );
};
