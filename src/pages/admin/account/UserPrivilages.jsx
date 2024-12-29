import React, { useEffect, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { CloseIcon } from "../../../utils/icons";
import axiosClient from "../../../../axios-client";
import { ToastContainer, toast } from "react-toastify";

export const UserPrivilages = ({
  handleOpen,
  open,
  account,
  handleLoading,
}) => {
  const handleClose = () => {
    handleOpen();
  };

  // Initial state for privileges, all set to false
  const initialPrivileges = {
    Locations: false,
    Jobs: false,
    Job_Items: false,
    Transfer_Note: false,
    Items: false,
    Stocks: false,
    Grn: false,
    Suppliers: false,
    Vendors: false,
    Barcode: false,
    Users: false,
  };

  const [privileges, setPrivileges] = useState(initialPrivileges);

  useEffect(() => {
    const updatedPrivileges = {
      Locations: account.Locations === 1,
      Jobs: account.Jobs === 1,
      Job_Items: account.Job_Items === 1,
      Transfer_Note: account.Transfer_Note === 1,
      Items: account.Items === 1,
      Stocks: account.Stocks === 1,
      Grn: account.Grn === 1,
      Suppliers: account.Suppliers === 1,
      Vendors: account.Vendors === 1,
      Barcode: account.Barcode === 1,
      Users: account.Users === 1,
    };
    setPrivileges(updatedPrivileges);
  }, [account]);

  // Function to handle checkbox changes for privileges
  const handleCheckboxChange = (privilege) => {
    setPrivileges((prevPrivileges) => ({
      ...prevPrivileges,
      [privilege]: !prevPrivileges[privilege],
    }));
  };

  // Function to handle submission of updated privileges
  const handleRuleSubmit = async () => {
    try {
      // Map privileges state to 1 or 0
      const data = Object.keys(privileges).reduce((acc, key) => {
        acc[key] = privileges[key] ? 1 : 0;
        return acc;
      }, {});

      await axiosClient.post(
        `/privilages/update-privilage-details/${account.idUser}`,
        data
      );
      handleClose();
      toast.success("Privilage details updated successfully!");
      handleLoading();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update rules details. Please try again.");
    }
  };

  const createPrivilegeObject = (keys) => {
    return keys.reduce((obj, key) => {
      obj[key] = privileges[key];
      return obj;
    }, {});
  };

  const privilegeSets = [
    {
      set: Object.keys(privileges).slice(0, 6),
    },
    {
      set: Object.keys(privileges).slice(6, 11),
    },
  ];

  return (
    <>
      <Dialog
        size="lg"
        open={open}
        handler={handleClose}
        className=" bg-white shadow-none rounded-[10px] overflow-scroll scrollbar-hide  p-5"
      >
        <div className="flex justify-between align-center border-b border-[#64728C] border-opacity-20 p-0 items-center pb-3">
          <div className="font-poppins text-[24px] font-medium leading-9 text-[#64728C]">
            User Details
          </div>
          <div
            className="font-bold text-[20px] cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon />
          </div>
        </div>

        <div className=" gap-3 w-full pl-0 max-h-[500px] overflow-y-scroll font-poppins">
          <div className=" w-full  flex gap-3 items-center mt-3 ">
            <span className=" font-normal text-[#64728C] text-[15px] w-[10%]">
              Name
            </span>
            <span className=" font-normal text-[#64728C] text-[15px]">
              {account.Name}
            </span>
          </div>
          <div className=" w-full flex gap-3 items-center ">
            <span className="mb-1 font-normal text-[#64728C] text-[15px] w-[10%]">
              Role
            </span>
            <span className="mb-1 font-poppins font-normal text-[15px] text-[#64728C]">
              {account.Role === 0 && "User"}
            </span>
          </div>

          <div className="font-poppins text-[18px] font-medium mt-5 text-[#64728C]">
            Privileges
          </div>
          <div className="w-full flex items-start mt-3 justify-between border-[1px] border-gray-400 rounded-md p-3">
            {privilegeSets.slice(0, 6).map((priv, index) => (
              <CheckboxCard
                key={index}
                lists={createPrivilegeObject(priv.set)}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}

            {privilegeSets.slice(6, 11).map((priv, index) => (
              <CheckboxCard
                key={index}
                lists={createPrivilegeObject(priv.set)}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </div>
          <div className="flex w-full justify-end gap-2 mt-3 mb-3 pb-5">
            <button
              type="button"
              onClick={handleRuleSubmit}
              className="bg-[#263679] font-poppins text-[14px] font-semibold leading-[22px] px-4 py-2 rounded-[20px] min-w-[80px] hover:bg-[#374D66] hover:text-white text-white border border-[#263679] transition-all duration-300 flex items-center gap-2 justify-center"
            >
              Update
            </button>
          </div>
        </div>
        <ToastContainer />
      </Dialog>
    </>
  );
};

const CheckboxCard = ({ lists, handleCheckboxChange }) => {
  return (
    <div className="flex w-[49%] flex-col  ">
      {Object.keys(lists).map((list) => (
        <div className="flex items-center gap-4 py-1" key={list}>
          <input
            type="checkbox"
            checked={lists[list]}
            onChange={() => handleCheckboxChange(list)}
          />
          <span className="font-inter font-medium text-[14px] text-gray-600">
            {list.replace(/_/g, " ")}
          </span>
        </div>
      ))}
    </div>
  );
};
