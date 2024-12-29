import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../components/contexts/NavigationContext";
import logo from "../../assets/images/logo.png";

export const Login = () => {
  const { setUser, setToken } = useStateContext();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [formErrors, setFormErrors] = useState({
    Email: "",
    Password: "",
  });

  const validate = (loginData) => {
    const errors = {};
    if (!loginData.Email) {
      errors.Email = "Email is required";
    } else if (!loginData.Email.includes("@")) {
      errors.Email = "Enter a valid Email address";
    }
    if (!loginData.Password) {
      errors.Password = "Password is required";
    }
    setFormErrors(errors);
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      Email: emailRef.current.value,
      Password: passwordRef.current.value,
    };

    const validationErrors = validate(loginData);

    if (Object.keys(validationErrors).length === 0) {
      axiosClient
        .post("/authentication/login", loginData)
        .then(({ data }) => {
          setUser(data.user);
          setToken(data.token);
          navigate("/admin/events");
        })
        .catch(({ response }) => {
          if (response && response.status === 401) {
            setAlertMessage(
              response?.data.error || "Invalid Email or Password"
            );
            setShowAlert(true);
          } else {
            setAlertMessage(response?.data.error || "An error occurred");
            setShowAlert(true);
          }
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-5">
      <form
        className="flex flex-col items-center w-full max-w-[90%] md:max-w-[587px] p-5 md:p-12 border border-[#B9B9B9] rounded-[15px] mb-20 bg-white"
        onSubmit={handleLogin}
      >
        <h3 className="font-poppins text-[#64728C] font-bold text-[24px] md:text-[32px] mb-4">
          Welcome back
        </h3>
        <p className="font-poppins font-semibold text-[14px] md:text-[18px] leading-6 text-[#64728C] opacity-80">
          Sign In
        </p>

        <div className="flex flex-col justify-between w-full gap-4 mt-8 md:mt-10">
          <div className="w-full">
            <label
              htmlFor="email"
              className="font-nunito text-[16px] md:text-[18px] font-semibold text-[#64728C] opacity-80"
            >
              Email address:
            </label>
            <input
              id="Email"
              name="Email address"
              type="email"
              ref={emailRef}
              className="block rounded-md border-0 py-2 pl-3 text-gray-900 ring-1 ring-inset mt-3 ring-gray-300 placeholder:text-[12px] md:placeholder:text-[14px] placeholder-nunito font-semibold focus:ring-1 focus:ring-inset w-full bg-[#F1F4F9]"
            />
            {formErrors.Email && (
              <span className="text-xs font-medium text-red-500 font-poppins">
                {formErrors.Email}
              </span>
            )}
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="font-nunito text-[16px] md:text-[18px] font-semibold text-[#64728C] opacity-80"
              >
                Password
              </label>
              <a
                href="/forgot-password"
                className="font-nunito text-[14px] md:text-[18px] font-semibold text-[#202224] opacity-60"
              >
                Forget password?
              </a>
            </div>
            <input
              id="Password"
              name="Password"
              type="password"
              ref={passwordRef}
              className="block rounded-md border-0 py-2 pl-3 text-gray-900 ring-1 ring-inset mt-3 ring-gray-300 placeholder:text-[12px] md:placeholder:text-[14px] placeholder-nunito font-semibold focus:ring-1 focus:ring-inset w-full bg-[#F1F4F9]"
            />
            {formErrors.Password && (
              <span className="text-xs font-medium text-[#263679] font-poppins">
                {formErrors.Password}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between w-full mt-4">
          <div className="flex items-center text-start">
            <input
              type="checkbox"
              className="w-6 h-6 border border-gray-300 rounded"
            />
            <p className="font-nunito text-[16px] md:text-[18px] font-semibold text-[#64728C] pl-3 opacity-80">
              Remember me
            </p>
          </div>
        </div>

        <button
          className="w-full max-w-[389px] h-[56px] bg-[#4e8d3b] flex justify-center p-3 text-white font-poppins text-[16px] md:text-[20px] font-bold rounded-[10px] mt-8 cursor-pointer border border-[#37572b]"
          type="submit"
        >
          Sign In
        </button>

        {showAlert && (
          <div className="mt-4 font-semibold text-red-500">{alertMessage}</div>
        )}
      </form>
    </div>
  );
};
