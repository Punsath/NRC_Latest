import React, { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@material-tailwind/react";
import {
  PlusIcon,
  MinusIcon,
  PaginateLeft,
  PaginateRight,
  EditNewIcon,
  RemoveIcon,
} from "../../../utils/icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import DataTable from "react-data-table-component";
import { tableHeaderStyles } from "../../../utils/utils";
import axiosClient from "../../../../axios-client";

export const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [eventPerPage] = useState(10);
  const [expandedEventIndex, setExpandedEventIndex] = useState(null);
  const navigate = useNavigate();

  // Fetching event details
  useEffect(() => {
    const fetchEvents = () => {
      axiosClient
        .get(`/events`)
        .then((res) => {
          setEvents(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchEvents();
  }, []);

  // Handling search
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filtered = events.filter((event) => {
      const matchesSearch =
        event.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.Month.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.Year.includes(searchQuery);
      return matchesSearch;
    });
    setFilteredEvents(filtered);
  }, [searchQuery, events]);

  // Define columns for DataTable
  const TABLE_EVENTS = [
    {
      name: "Events ID",
      selector: (row) => row.idEvents,
      wrap: false,
      minWidth: "100px",
      sortable: true,
    },
    {
      name: "Month",
      selector: (row) => row.Month,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Date",
      selector: (row) => row.Date,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Year",
      selector: (row) => row.Year,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      wrap: true,
      minWidth: "250px",
    },
    {
      name: "Picture",
      selector: (row) => (
        <img
          src={row.picture_url}
          alt="Picture"
          className="max-w-[50px] h-auto rounded-md"
        />
      ),
      wrap: true,
      maxWidth: "auto",
    },

    {
      name: "Action",
      cell: (row) => (
        <>
          <Tooltip content="Edit Event">
            <IconButton
              onClick={() => handleEditClick(row)}
              variant="text"
              className="mx-2 bg-white"
            >
              <EditNewIcon />
            </IconButton>
          </Tooltip>
          <Tooltip content="Delete Event">
            <IconButton
              onClick={() => handleDeleteClick(row)}
              variant="text"
              className="mx-2 bg-white"
            >
              <RemoveIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  // Navigate to the edit event page
  const handleEditClick = (event) => {
    navigate(`/admin/events-edit/${event.idEvents}`, { state: { eventData: event } });
  };

  // Show SweetAlert before deleting an event
  const handleDeleteClick = (event) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete the event: ${event.Name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosClient
          .delete(`/events/${event.idEvents}`)
          .then(() => {
            // Update the event list after deletion
            setEvents(events.filter((e) => e.idEvents !== event.idEvents));
            Swal.fire(
              "Deleted!",
              `The event "${event.Name}" has been deleted.`,
              "success"
            );
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "There was a problem deleting the event.",
              "error"
            );
            console.log(error);
          });
      }
    });
  };

  const handleExpandClick = (index) => {
    setExpandedEventIndex(expandedEventIndex === index ? null : index);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Desktop version */}
      <section className="hidden mt-8 md:block">
        <div className="w-full bg-white rounded-[15px] px-[30px] pt-[20px] pb-[40px]">
          <div className="flex flex-col mt-4 md:flex-row md:justify-left">
            <div className="w-full md:w-[250px] md:mr-5 mb-4 md:mb-0">
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
        </div>
        <div className="w-full bg-white rounded-[15px] px-[30px] pt-[20px] pb-[20px] mt-10 relative">
          <Link
            className="w-[50px] aspect-square absolute rounded-full bg-[#76BC21] -top-5 -right-3 flex items-center justify-center cursor-pointer"
            to="/admin/events/add"
          >
            <PlusIcon width={"24px"} color={"#FFFFFF"} />
          </Link>
          <DataTable
            columns={TABLE_EVENTS}
            responsive
            data={filteredEvents}
            customStyles={tableHeaderStyles}
            className="mt-4"
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15]}
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

      {/* Mobile version */}
      <section className="mt-5 bg-white px-[3%] w-full rounded-[10px] py-3 md:hidden">
        <div className="flex justify-end">
          <Link
            className="w-[30px] aspect-square rounded-full bg-[#76BC21] -top-5 -right-3 flex items-center justify-center cursor-pointer"
            to="/admin/events/add"
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
          {filteredEvents
            .slice((currentPage - 1) * eventPerPage, currentPage * eventPerPage)
            .map((event, index) => (
              <div key={index}>
                <div
                  className="w-full flex items-center px-2 py-2 border-b border-[#64728C] border-opacity-10"
                  onClick={() => handleExpandClick(index)}
                >
                  <span className="w-[14px] aspect-square border border-[#64728C] rounded-full flex justify-center items-center mr-3">
                    {expandedEventIndex === index ? (
                      <MinusIcon width={"8px"} />
                    ) : (
                      <PlusIcon width={"8px"} color={"#64728C"} />
                    )}
                  </span>
                  <span className="font-poppins font-medium text-[12px] leading-[18px] text-[#64728C]">
                    {event.Name}
                  </span>
                </div>
                {expandedEventIndex === index && (
                  <div className="w-full pl-[35px] bg-[#D9D9D9] bg-opacity-20">
                    <div className="py-2">{event.Description}</div>
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="flex justify-end gap-4 mt-10">
          <span className="font-poppins font-medium text-[10px] text-[#64728C]">
            Page {currentPage} of{" "}
            {Math.ceil(filteredEvents.length / eventPerPage)}
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
              currentPage === Math.ceil(filteredEvents.length / eventPerPage)
            }
          >
            <PaginateRight />
          </button>
        </div>
      </section>
    </>
  );
};
