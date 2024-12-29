import { Typography } from "@material-tailwind/react";
import React from "react";

export const InputItem = ({
  name,
  data,
  inputName,
  handleChange,
  errors,
  type,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <p className="font-nunito text-[14px] md:text-[18px] leading-[24px] font-semibold text-[#64728C]">
        {name}
      </p>
      <input
        name={inputName}
        type={type}
        className="block rounded-md border-0 py-3 pl-3 text-gray-900 ring-1 ring-inset mt-3 ring-gray-300 placeholder:text-[#A6A6A6]-600 placeholder:text-[14px] md:placeholder:text-[18px] placeholder:nunito focus:ring-1 focus:ring-inset sm:leading-6 w-full bg-[#F1F4F9] text-[16px] md:text-[20px] font-semibold font-nunito"
        value={data[inputName]}
        onChange={(e) => handleChange(inputName, e.target.value)}
        placeholder={placeholder}
      />
      {errors[inputName] && (
        <Typography className="text-red-500 font-inter font-medium text-xs pt-1">
          {errors[inputName]}
        </Typography>
      )}
    </div>
  );
};
