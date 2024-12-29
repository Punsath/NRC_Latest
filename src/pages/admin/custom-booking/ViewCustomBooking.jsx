import React from "react";
import { Card, Dialog } from "@material-tailwind/react";
import { CloseIcon } from "../../../utils/icons";
import StarRatings from "react-star-ratings";

export const ViewCustomBooking = ({ handleOpen, open, booking }) => {
  const handleClose = () => {
    handleOpen();
  };
  return (
    <>
      <Dialog
        size="sm"
        open={open}
        // handler={handleClose}
        className="bg-transparent shadow-none rounded-[10px] overflow-y-scroll scrollbar-hide overflow-x-hidden font-poppins"
      >
        <Card className="w-full p-5 mx-auto rounded-sm text-[#64728C]">
          <div className="flex justify-between mb-4 border-b align-center border-[#64728C] border-opacity-15">
            <div className="pb-3 text-lg font-medium font-poppins ">
              Custom Booking Details
            </div>
            <div
              className="font-bold text-[20px] cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
          </div>

          <div className="flex text-[14px]">
            <div className=" w-[50%]">
              <div className="font-semibold">Full Name</div>
              <div>{booking.FirstName + " " + booking.LastName}</div>
            </div>

            <div className=" w-[50%]">
              <div className="font-semibold">Email</div>
              <div>{booking.Email}</div>
            </div>
          </div>

          <div className="flex mt-3 text-[14px]">
            <div className=" w-[50%]">
              <div className="font-semibold">Phone</div>
              <div>{booking.Phone}</div>
            </div>

            <div className=" w-[50%]">
              <div className="font-semibold">Destinations</div>
              <div>{booking.Destinations}</div>
            </div>
          </div>
          <div className="flex mt-3 text-[14px]">
            <div className=" w-[50%]">
              <div className="font-semibold">Rating</div>
              <div>
                <StarRatings
                  rating={parseFloat(booking.Rating)}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="1px"
                />
              </div>
            </div>
            <div className=" w-[50%]">
              <div className="font-semibold">Date</div>
              <div>{booking.Date}</div>
            </div>
          </div>
          <div className="flex mt-3 text-[14px]">
            <div className=" w-[50%]">
              <div className="font-semibold">Duration</div>
              <div>{booking.Duration}</div>
            </div>
          </div>
          <div className="font-semibold mt-3">Who is traveling ?</div>
          <div className="flex  text-[14px]">
            <div className=" w-[50%]">
              <div className="font-semibold">Adult Count</div>
              <div>{booking.AdultCount}</div>
            </div>
            <div className=" w-[50%]">
              <div className="font-semibold">Children Count</div>
              <div>{booking.ChildrenCount}</div>
            </div>
          </div>
          <div className="flex mt-3 text-[14px]">
            <div className=" w-[100%]">
              <div className="font-semibold">Special Requests</div>
              <div>{booking.SpecialRequests}</div>
            </div>
          </div>
        </Card>
      </Dialog>
    </>
  );
};
