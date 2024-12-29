import { useState, useEffect } from "react";
import { EditNewIcon, PlusIcon, ViewIcon } from "../../../utils/icons";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axiosClient from "../../../../axios-client";
import { tableHeaderStyles } from "../../../utils/utils";
import { ViewCustomBooking } from "./ViewCustomBooking";
import StarRatings from "react-star-ratings";

export const CustomPackage = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [bookingsTableLoading, setBookingsTableLoading] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);

  const handleViewOpen = () => setViewOpen((cur) => !cur);

  useEffect(() => {
    const fetchBookings = () => {
      setBookingsTableLoading(true);
      axiosClient
        .get(`requests`)
        .then((res) => {
          setBookings(res.data);
          setBookingsTableLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
          toast.error("Failed to fetch bookings. Please try again.");
          setBookingsTableLoading(false);
        });
    };
    fetchBookings();
  }, [bookingsTableLoading]);

  const handleViewClick = (booking) => {
    setSelectedBooking(booking);
    setViewOpen(true);
  };

  const TABLE_BOOKING = [
    {
      name: "Full Name",
      selector: (row) => `${row.FirstName} ${row.LastName}`,
      wrap: false,
      compact: true,
      minWidth: "150px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: false,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      wrap: false,
      compact: true,
      minWidth: "150px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
    },
    {
      name: "Phone",
      selector: (row) => row.Phone,
      wrap: false,
      compact: true,
      maxWidth: "auto",
    },
    {
      name: "Destinations",
      selector: (row) => row.Destinations,
      wrap: false,
      compact: true,
      minWidth: "150px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
    },
    {
      name: "Rating",
      selector: (row) => (
        <StarRatings
          rating={parseFloat(row.Rating)}
          starRatedColor="gold"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="1px"
        />
      ),
      wrap: false,
      compact: true,
      maxWidth: "auto",
      center: true,
    },
    {
      name: "Date",
      selector: (row) => row.Date,
      wrap: false,
      compact: true,
      maxWidth: "auto",
      center: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <Tooltip content="View Booking">
            <IconButton
              onClick={() => handleViewClick(row)}
              variant="text"
              className="mx-2 bg-white"
            >
              <ViewIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
      wrap: false,
      maxWidth: "auto",
    },
  ];

  return (
    <>
      {/* Desktop version */}
      <section className=" mt-8">
        <div className="w-full bg-white rounded-[15px] px-[30px] pt-[20px] pb-[20px] mt-10 relative">
          <DataTable
            columns={TABLE_BOOKING}
            responsive
            data={bookings}
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
      {viewOpen && (
        <ViewCustomBooking
          booking={selectedBooking}
          handleOpen={handleViewOpen}
          open={viewOpen}
        />
      )}
    </>
  );
};
