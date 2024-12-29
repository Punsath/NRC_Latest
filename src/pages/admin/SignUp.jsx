import { useState } from "react";
import axiosClient from "../../../axios-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputItem } from "../../components/global/InputItem";
import { useNavigate } from "react-router-dom";
import signUpImage from "../../assets/images/sign-up-image.png";

export const SignUp = () => {
  const navigate = useNavigate();
  // Options for the branch selection dropdown

  // State variables for form data and form errors
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
    // User_Name: "",
    Tp: "",
    Agreement: false,
    Branch_idBranch: 1,
  });

  const [formErrors, setFormErrors] = useState({
    // User_Name: "",
    Email: "",
    Password: "",
    Tp: "",
    Branch_idBranch: 1,
  });

  // Function to handle changes in form inputs
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset error message when user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Function to handle branch selection
  const handleCustomerSelect = (selectedOption) => {
    setFormData({
      ...formData,
      Branch_idBranch: selectedOption.value,
    });
    setFormErrors({
      ...formErrors,
      Branch_idBranch: "",
    });
  };

  // Function to handle form submission
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Check if terms and conditions are accepted
    if (!formData.Agreement) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        Agreement: "Please accept the terms and conditions",
      }));
      return;
    }

    // Check for empty fields
    const newFormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (String(value).trim() === "") {
        newFormErrors[key] = `${key.replace("_", " ")} is required`;
      }
    });
    // If there are errors, set the state and return
    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      console.log(newFormErrors);
      return;
    }

    try {
      console.log("sending");
      const response = await axiosClient.post("/user/register", formData);
      if (response.status === 200) {
        toast.success("User registered successfully");
        console.log("ssda");

        // Clear form data after successful registration
        setFormData({
          // User_Name: "",
          Email: "",
          Password: "",
          Tp: "",
          Branch_idBranch: "",
        });
        navigate("/login");
      } else {
        console.log("sdsadsdsa");
        toast.error("Registration failed");
        console.error("Registration failed");
      }
    } catch (error) {
      toast.error("Error registering user");
      console.error("Error registering user:", error);
    }
  };

  const inputItems = [
    {
      name: "Email",
      inputName: "Email",
      type: "email",
      placeholder: "esteban_schiller@gmail.com",
    },
    {
      name: "First Name",
      inputName: "First Name",
      type: "text",
      placeholder: "First Name",
    },
    {
      name: "Last Name",
      inputName: "Last Name",
      type: "text",
      placeholder: "Last Name",
    },
    {
      name: "Contact Number",
      inputName: "Tp",
      type: "text",
    },
    {
      name: "Password",
      inputName: "Password",
      type: "Password",
      placeholder: "● ● ● ● ● ●",
    },
  ];

  return (
    <section className="flex justify-between items-center w-full">
      <div className="w-[47%] hidden md:flex items-center justify-center -mt-20">
        <img src={signUpImage} alt="Sign Up" />
      </div>
      <div className="w-full md:w-[47%] flex items-center">
        <div className="flex items-center flex-col w-full border border-1 border-[#B9B9B9] py-10 md:py-12 md:p-12 p-5 rounded-[15px] mb-20">
          <h3 className="font-poppins text-[#64728C] font-bold leading-9 md:leading-[20px] text-[32px] text-center">
            Create an Account
          </h3>
          <h4 className="font-nunito font-semibold text-[#64728C] leading-[24px] text-[18px] mt-2">
            Create an account to continue
          </h4>
          <div className="w-full flex justify-between flex-col gap-6 mt-5 md:mt-10">
            {inputItems.slice(0, 5).map((item, itemIndex) => (
              <div className="w-full" key={itemIndex}>
                <InputItem
                  data={formData}
                  type={item.type}
                  errors={formErrors}
                  handleChange={handleChange}
                  setErrors={setFormErrors}
                  name={item.name}
                  inputName={item.inputName}
                  placeholder={item.placeholder}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between mt-5 md:mt-8 w-full">
            <div className="flex justify-left text-start">
              <input
                type="checkbox"
                className="w-[18px]"
                checked={formData.Agreement}
                onChange={(e) => handleChange("Agreement", e.target.checked)}
              />
              <p className="font-nunito font-semibold text-[16px] md:text-[18px] leading-6 text-[#64728C] pl-3">
                I accept terms and conditions
              </p>
            </div>
            {formErrors.Agreement && (
              <span className="text-xs font-medium text-red-500 font-poppins">
                {formErrors.Agreement}
              </span>
            )}
            <div
              className="w-[80%] bg-[#FF8828] mx-auto flex justify-center p-3 text-[15px] md:text-[20px] text-white font-bold font-nunito leading-[28px] rounded-[10px] mt-5 md:mt-8 cursor-pointer"
              onClick={handleSubmit}
            >
              Sign up
            </div>
          </div>
          <div className="mt-5 md:mt-8 text-[14px] md:text-[18px] leading-[24px] font-nunito font-semibold text-[#202224]">
            Already have an account?{" "}
            <a
              className="text-[#FF8828] underline cursor-pointer"
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};
