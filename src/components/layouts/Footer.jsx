import React, { useEffect, useState, useRef } from "react";
import { useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { navigationItems } from "../../utils/dataArrays";
import logo from "../../assets/images/logo.png";
import emailjs from "@emailjs/browser";


export const Footer = ({ scrollRefs }) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm("service_e7dxk5d", "template_ptg630s", form.current, {
      publicKey: "wYjfz5YZkra8PpHDp",
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,
    config: {
      duration: 800,
    },
  });
  useEffect(() => {
    const loaderDelay = 200;
    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  const currentYear = new Date().getFullYear();
  return (
    <section style={fadeScreen} className="flex flex-col items-center w-full ">
      <div className="w-full py-[15%] md:py-[5%] bg-[#041B25] px-[5%] md:px-[7%] border-b-2 inline-block flex flex-col md:flex-row justify-between items-start">
      <div className="flex flex-col gap-5 md:w-[28%]">
  {/* Logo Image aligned to the left */}
  <img 
    src={logo}  // Replace with the actual logo image path
    alt="Logo"
    className="w-[80px] h-[80px] object-contain" // Increased size and aligned left
  />

  {/* Text content */}
  <span className="font-montserrat font-normal text-lg -mt-4 leading-8 text-[#ffffff] pt-6">
  Negambo Recycling Club (NRC) transforms plastic waste into value-added raw materials and upcycled products. Committed to sustainability, NRC empowers communities to actively participate in collecting, sorting, and recycling, fostering a cleaner environment.
  </span>
</div>


        <div className="flex flex-row gap-16 md:gap-8">
        <div className="flex flex-col gap-5 mt-8 md:gap-5 md:mt-0">
          <span className=" font-montserrat font-[600] md:text-lg text-[16px] text-[#ffffff]">
          Company
          </span>
          {navigationItems.map((item, itemIndex) => {
  return (
    <Link
      key={itemIndex}
      to={item.link}
      className={`${
        currentUrl === item.link ? "text-[#ffffff]" : "text-[#ffffff]"
      } font-montserrat font-medium md:text-[16px] md:leading-[29px] text-[16px] leading-5`}
    >
      {item.title}
    </Link>
  );
})}

        </div>
        <div className=" flex flex-col md:gap-5  gap-5 md:w-[70%] md:mt-0 mt-[14%]">
          <span className=" font-montserrat font-semibold md:text-[20px] text-lg md:leading-[29px] leading-3 text-[#ffffff]">
          Join with us
          </span>
          <a href="https://www.facebook.com/profile.php?id=100086047466166" target="_blank" rel="noopener noreferrer">
  <span className="font-montserrat font-normal md:text-[16px] text-[16px] md:leading-[23px] leading-7 text-[#ffffff]">
    Facebook
  </span>
</a>

<a href="https://www.instagram.com/negombo_recycling_club/" target="_blank" rel="noopener noreferrer">
  <span className="font-montserrat font-normal md:text-[16px] text-[16px] md:leading-[23px] leading-7 text-[#ffffff]">
    Instagram
  </span>
</a>

<a href="https://wa.me/94767486159" target="_blank" rel="noopener noreferrer">
  <span className="font-montserrat font-normal md:text-[16px] text-[16px] md:leading-[23px] leading-7 text-[#ffffff]">
    WhatsApp
  </span>
</a>
<a href="https://www.linkedin.com/company/negombo-recycling-club/" target="_blank" rel="noopener noreferrer">
  <span className="font-montserrat font-normal md:text-[16px] text-[16px] md:leading-[23px] leading-7 text-[#ffffff]">
    Linked In
  </span>
</a>

          <span className="font-montserrat font-normal md:text-[16px] text-[16px] md:leading-[23px] leading-7  text-[#ffffff]">
          TikTok
          </span>
         

        </div>
        </div>
        <form className="flex flex-col md:gap-5 gap-3 md:w-[25%] w-full md:mt-0 mt-8" ref={form} onSubmit={sendEmail}>
      <span className="font-montserrat font-semibold text-lg text-[#ffffff]">
        Mail Us
      </span>
      <input 
        type="message" 
        name="message"
        placeholder="Type here..." 
        className="w-full md:w-auto font-montserrat font-normal md:text-lg text-[16px] bg-transparent border border-[#FFFFFF] leading-5 text-[#ffffff] p-2 rounded-md" 
      />
      <span>
    <button type="submit" value="Send" 
  className="font-montserrat font-normal md:text-lg text-[16px] leading-5 text-[#ffffff] bg-[#041B25] p-2 rounded-md mt-2 w-[30%] md:w-auto md:px-6 border border-white shadow-[0_4px_6px_rgba(255,255,255,0.25)] 
             hover:shadow-[0_6px_8px_rgba(255,255,255,0.4)] hover:border-[#ffffff] transition-all duration-300"
>
  Send
</button>



      </span>
    </form>
       
      </div>
      <div className="w-full py-3 bg-[#041B25] px-[5%] md:px-[10%] md-h:[38px] text-center justify-between  text-[14px] leading-[18px] text-white">
        © {currentYear} Negombo Recycling club. All Rights Reserved.
      </div>
    </section>
  );
};
