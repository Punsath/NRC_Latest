import React, { useState, useEffect } from "react";
import axiosClient from "../../../../axios-client";
import DataTable from "react-data-table-component";
import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ViewIcon } from "../../../utils/icons";
import { UserPrivilages } from "./UserPrivilages";

export const Account = () => {
  // State to manage modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  //account related state
  const [account, setAccount] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  // State to manage loading status
  const [accountTableLoading, setAccountTableLoading] = useState(false);
  const handleLoading = () => setAccountTableLoading((pre) => !pre);

  useEffect(() => {
    const getAccount = () => {
      axiosClient
        .get(`/privilages/user-privilages`)
        .then((res) => {
          setAccount(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getAccount();
  }, [accountTableLoading]);

  console.log(account);

  // Event handler to view privilege details
  const handleViewClick = (account) => {
    setSelectedAccount(account);
    handleOpen();
  };

  //Creating the table
  const TABLE_JOBS = [
    {
      name: "Name",
      selector: (row) => row.Name,
      wrap: true,
      compact: true,
      maxWidth: "auto",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => (row.Role === 0 ? "User" : "-"),
      wrap: true,
      compact: true,
      maxWidth: "auto",
      cellStyle: {
        whiteSpace: "normal",
        wordBreak: "break-word",
      },
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Link>
            <IconButton
              variant="text"
              className="mx-2 bg-white"
              onClick={() => handleViewClick(row)}
            >
              <ViewIcon />
            </IconButton>
          </Link>
        </>
      ),
    },
  ];

  //Custom styles for the table
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
    <section className="hidden mt-8 md:block">
      <div className="w-[50%] bg-white rounded-[15px] px-[30px] pt-[20px] pb-[40px]">
        <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-[#64728C]">
          User Accounts
        </h3>
        <div>
          <DataTable
            columns={TABLE_JOBS}
            responsive
            data={account}
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
      </div>
      {selectedAccount && (
        <UserPrivilages
          account={selectedAccount}
          handleOpen={handleOpen}
          open={open}
          handleLoading={handleLoading}
        />
      )}
    </section>
  );
};
