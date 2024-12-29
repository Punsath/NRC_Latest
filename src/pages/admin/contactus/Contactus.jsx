import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { tableHeaderStyles } from "../../../utils/utils";
import axiosClient from "../../../../axios-client";
import Swal from "sweetalert2";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { RemoveIcon} from "../../../utils/icons";

export const Contactus = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [viewContactOpen, setViewContactOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [nameSearchQuery, setNameSearchQuery] = useState("");

  // Fetching contacts from the backend
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get("/contact"); // Ensure the backend returns contact details
      setContacts(response.data);
    } catch (error) {
      toast.error("Failed to fetch contacts");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  // Show SweetAlert before deleting an event
  const handleDeleteClick = (contact) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete the contact: ${contact.FullName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosClient
          .delete(`/contact/${contact.idContactus}`)
          .then(() => {
            // Update the contact list after deletion
            setContacts(contacts.filter((e) => e.idContactus !== contact.idContactus));
            Swal.fire(
              "Deleted!",
              `The contact "${contact.Name}" has been deleted.`,
              "success"
            );
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "There was a problem deleting the contact.",
              "error"
            );
            console.log(error);
          });
      }
    });
  };

  // Handler for clicking view button
  const handleViewClick = (contact) => {
    setSelectedContactId(contact.idContact);
    setViewContactOpen(true);
  };

  // Handler for closing the view contact dialog
  const handleViewContactClose = () => {
    setSelectedContactId(null);
    setViewContactOpen(false);
  };

  // Effect to filter contacts
  useEffect(() => {
    const filtered = contacts.filter((contact) => {
      const fullName = `${contact.FirstName} ${contact.LastName}`.toLowerCase();
      return fullName.includes(nameSearchQuery.toLowerCase());
    });

    setFilteredContacts(filtered);
  }, [nameSearchQuery, contacts]);

  

  // Creating the table
  const TABLE_CONTACT = [
    {
      name: "Full Name",
      selector: (row) => row.FullName,
      wrap: false,
      maxWidth: "auto",
    },
    
    {
      name: "Email",
      selector: (row) => row.Email,
      wrap: false,
      minWidth: "200px",
    },
    {
      name: "Phone",
      selector: (row) => row.Phone,
      wrap: false,
      minWidth: "200px",
    },
    
    {
      name: "Subject",
      selector: (row) => row.Subject,
      wrap: false,
      minWidth: "150px",
    },
    {
      name: "Message",
      selector: (row) => row.Message,
      wrap: false,
      minWidth: "250px",
    },
    {
      name: "Action",
      cell: (row) => (
        <>
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
    },
  ];

  return (
    <>
      <section className="mt-8 md:block">
        <div className="w-full bg-white rounded-[15px] px-[30px] pt-[20px] pb-[20px] mt-10 relative overflow-auto">
          <DataTable
            columns={TABLE_CONTACT}
            responsive
            data={filteredContacts}
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
            progressPending={loading}
          />
        </div>
      </section>

      {viewContactOpen && (
        <ViewContact
          isOpen={viewContactOpen}
          onClose={handleViewContactClose}
          contactId={selectedContactId}
        />
      )}

      <ToastContainer />
    </>
  );
};
