import React, { useState, useEffect } from "react";
import {
  CloseIcon,
  CustomersIcon,
  MailIcon,
  ShieldIcon,
  Status,
} from "../../utils/icons";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import axiosClient from "../../../axios-client";

export const ViewUser = ({ isOpen, onClose, userId }) => {
  const [user, setUser] = useState(null);
  console.log("user", userId);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosClient.get(`/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user", error);
      }
      setLoading(false);
    };
    if (userId) fetchUser();
  }, [userId]);

  return (
    <Dialog
      size="lg"
      open={isOpen}
      handler={onClose}
      className="bg-white shadow-none rounded-[10px] overflow-scroll scrollbar-hide font-inter p-5"
    >
      <DialogHeader className="flex justify-between align-center border-b border-[#ececec] pb-3">
        <div className="flex align-center">
          <div className="mr-3">
            <CustomersIcon />
          </div>
          <div>
            <p className="font-poppins text-[18px] font-semibold leading-[28px] text-[#000000]">
              User Details
            </p>
            <p className="font-poppins text-[14px] font-medium leading-[22px] text-[#667281]">
              All information about this user
            </p>
          </div>
        </div>
        <div onClick={onClose} className="cursor-pointer">
          <CloseIcon />
        </div>
      </DialogHeader>
      <DialogBody className="p-5">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <span>Loading...</span>
          </div>
        ) : user ? (
          <>
            <div className="flex items-center pb-2 mt-5">
              <div className="mr-4">
                <CustomersIcon />
              </div>
              <div>
                <p className="font-poppins text-[14px] font-medium leading-[22px] text-[#000000] pb-1">
                  User Name
                </p>
                <p className="font-inter text-[14px] font-normal leading-[24px] text-[#667281]">
                  {user.Name}
                </p>
              </div>
            </div>
            <div className="flex items-center pb-2 mt-5">
              <div className="mr-4">
                <ShieldIcon />
              </div>
              <div>
                <p className="font-poppins text-[14px] font-medium leading-[22px] text-[#000000] pb-1">
                  Role
                </p>
                <p className="font-inter text-[14px] font-normal leading-[24px] text-[#667281]">
                  {user.Role === 1 ? (
                    <p>Admin</p>
                  ) : user.Role === 0 ? (
                    <p>User</p>
                  ) : null}
                </p>
              </div>
            </div>
            <div className="flex items-center pb-2 mt-5">
              <div className="mr-4">
                <MailIcon />
              </div>
              <div>
                <p className="font-poppins text-[14px] font-medium leading-[22px] text-[#000000] pb-1">
                  Email
                </p>
                <p className="font-inter text-[14px] font-normal leading-[24px] text-[#667281]">
                  {user.Email}
                </p>
              </div>
            </div>
            <div className="flex items-center pb-2 mt-5">
              <div className="mr-4">
                <Status />
              </div>
              <div>
                <p className="font-poppins text-[14px] font-medium leading-[22px] text-[#000000] pb-1">
                  Status
                </p>
                <p className="font-inter text-[14px] font-normal leading-[24px] text-[#667281]">
                  {user.Status === 1 ? (
                    <p>Active</p>
                  ) : user.Status === 0 ? (
                    <p>Inactive</p>
                  ) : null}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <span>No user data available</span>
          </div>
        )}
      </DialogBody>
    </Dialog>
  );
};
