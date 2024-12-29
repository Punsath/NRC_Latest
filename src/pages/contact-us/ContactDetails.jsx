import React from "react";

function ContactDetails() {
  return (
    <div className="md:mb-20 md:mt-20 mb-10 mt-0">
      <h1 className="text-[#004AAD] font-Nunito text-[30px] font-[300] leading-[70px] text-center">
        Contact Details
      </h1>
      <p className="text-center md:mb-20 mb-10">
        For further assistance, you can reach out to the following offices
      </p>

      <div className="flex flex-wrap justify-center md:gap-10 gap-5">
        <div className="bg-white border  border-contact-table-border rounded-[10px] flex-none sm:w-1/3 md:w-1/4 max-w-[calc(50%-1rem)] md:max-w-[calc(25%-1rem)] md:mb-[40px] mb-[20px]">
          <h3 className="text-[16px]  border-b pb-2 mb-2 font-nunito p-4">
            Director General's Office
          </h3>
          <p className="text-[12px] font-nunito pl-4 pr-2">
            <p>Phone: +94 112 426 916 / +94 112 426 907 / +94 112 437 953</p>
          </p>

          <p className="text-[12px] font-nunito pl-4 p-2 mt-5">
            <p>Email: dg@srilanka.travel</p>
          </p>
        </div>
        <div className="bg-white border border-contact-table-border  p-4 rounded-[10px] flex-none sm:w-1/3 md:w-1/4 max-w-[calc(50%-1rem)] md:max-w-[calc(25%-1rem)] md:mb-[40px] mb-[20px]">
          <h3 className="text-[16px]  border-b pb-2 mb-2 font-nunito">
            Chairman's Office
          </h3>
          <p className="text-[12px] font-nunito">
            <p>Phone: +94 112 437 759 / +94 112 437 953</p>
          </p>
          <br />
          <p className="text-[12px] font-nunito">
            <p>Email: chairman@srilanka.travel</p>
          </p>
        </div>
        <div className="bg-white border  border-contact-table-border  rounded-[10px] flex-none sm:w-1/3 md:w-1/4 max-w-[calc(50%-1rem)] md:max-w-[calc(25%-1rem)] md:mb-[40px] mb-[20px] font-nunito">
          <h3 className="text-[16px] p-4 border-b pb-2 mb-2">
            Sri Lanka Tourism Promotion Bureau
          </h3>
          <p className="text-[12px] pl-4">
            <p>Phone : +94 112 426 900 / +94 112 440 001 </p>
          </p>
          <br />
          <p className="text-[12px] pl-4">
            <p>Email : info@srilanka.travel</p>
          </p>
        </div>
        <div className="bg-white border border-contact-table-border rounded-[10px] flex-none sm:w-1/3 md:w-1/4 max-w-[calc(50%-1rem)] md:max-w-[calc(25%-1rem)]  md:mb-[40px] mb-[20px] font-nunito">
          <h3 className="text-[16px] border-b pb-2 mb-2 p-4">
            Sri Lanka Tourism Development Authority
          </h3>
          <p className="text-[12px] pl-4">
            <p>Phone:+94 112 426 900 / +94 112 440 001</p>
          </p>
          <br />
          <p className="text-[12px] pl-4">
            <p>Email:authority@srilanka.travel</p>
          </p>
        </div>
        <div className="bg-white border   border-contact-table-border  rounded-[10px] flex-none sm:w-1/3 md:w-1/4 max-w-[calc(50%-1rem)] md:max-w-[calc(25%-1rem)]  md:mb-[40px] mb-[20px] font-nunito">
          <h3 className="text-[16px] border-b pb-2 mb-2 p-4">
            Senior Superintendent of Police - Sri Lanka Tourism Police
          </h3>
          <p className="text-[12px] pl-4">
            <p>Phone: +94 11 242 1052 / +94 11 242 1451 / +94 11 238 2209</p>
          </p>

          <p className="text-[12px] pl-4 mt-3 p-2">
            <p>Email: suptd@srilanka.travel</p>
          </p>
        </div>
        <div className="bg-white border  border-contact-table-border rounded-[10px] flex-none sm:w-1/3 md:w-1/4 max-w-[calc(50%-1rem)] md:max-w-[calc(25%-1rem)]  md:mb-[40px] mb-[20px] font-nunito">
          <h3 className="text-[16px] border-b pb-2 mb-2 p-4">
            Managing Director's Office
          </h3>
          <p className="text-[12px] pl-4 mt-3">
            <p>Phone : +94 11 242 6900</p>
          </p>

          <p className="text-[12px] pl-4 mt-5">
            <p>Email: md@srilanka.travel</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
