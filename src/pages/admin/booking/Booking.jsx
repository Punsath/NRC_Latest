import { useState, useEffect } from "react";
import { EditNewIcon, PlusIcon } from "../../../utils/icons";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axiosClient from "../../../../axios-client";
import { tableHeaderStyles } from "../../../utils/utils";

export const Booking = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [bookingsTableLoading, setBookingsTableLoading] = useState(false);

  useEffect(() => {
    const fetchBookings = () => {
      setBookingsTableLoading(true);
      axiosClient
        .get(`booking`)
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

  const TABLE_BOOKING = [
    {
      name: "Full Name",
      selector: (row) => row.FullName,
      wrap: false,
      minWidth: "200px",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      wrap: false,
      maxWidth: "auto",
    },
    {
      name: "Phone",
      selector: (row) => row.Phone,
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
      name: "Package",
      selector: (row) => row.Packege_Details[0].Title,
      wrap: false,
      maxWidth: "auto",
    },
  ];

  return (
    <>
      {/* Desktop version */}
      <section className="mt-8">
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
    </>
  );
};
