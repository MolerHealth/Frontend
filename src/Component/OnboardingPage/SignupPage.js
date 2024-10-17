import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpPage extends Component {
  render() {
    return (
      <div className="w-full h-lvh flex justify-center items-center">
        <div className="w-[37.313rem] h-[41.5rem] flex flex-col items-center justify-center gap-[2rem]">
          <div className="w-[17.688rem] h-[4.5rem] flex flex-col gap-[0.563rem]">
            <h1 className="font-mona font-[700] text-[2rem] leading-[2.64rem] text-center">
              Sign Up
            </h1>
            <div className="font-mona font-[300] text-[1rem]">
              Sign into Your MolerHealth Account
            </div>
          </div>
          <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-[1.313rem]">
              <input
                className="w-[29.563rem] h-[3.438rem] rounded-[12px] px-[1rem] border-[0.5px] focus:outline-none focus:border-[#4169E1]"
                type="text"
                name="uniqueEmail"
                placeholder="Enter Your Name"
                autoComplete="off"
              />
              <input
                className="w-[29.563rem] h-[3.438rem] rounded-[12px] px-[1rem] border-[0.5px] focus:outline-none focus:border-[#4169E1]"
                type="text"
                name="uniqueUsername"
                placeholder="Enter Your Username"
                autoComplete="new-username"
              />
              <div className="relative w-[29.563rem] h-[3.438rem]">
                <select
                  className="w-full h-full appearance-none rounded-[12px] px-[1rem] border-[0.5px] focus:outline-none focus:border-[#4169E1] bg-white"
                  name="userType"
                >
                  <option value="" disabled selected>
                    Select User Type
                  </option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
                <div className="pointer-events-none absolute top-1/2 right-[1rem] transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <input
                className="w-[29.563rem] h-[3.438rem] rounded-[12px] px-[1rem] border-[0.5px] focus:outline-none focus:border-[#4169E1]"
                type="password"
                name="newPassword"
                placeholder="Enter Your Password"
                autoComplete="new-password"
              />
              <input
                className="w-[29.563rem] h-[3.438rem] rounded-[12px] px-[1rem] border-[0.5px] focus:outline-none focus:border-[#4169E1]"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                autoComplete="new-password"
              />
            </div>
            <div className="font-[300] font-mona text-[1.rem] leading-[1.485rem] text-[#333333]">
              By Registering You agree to our{" "}
              <span className="text-[#4169E1]">terms and conditions</span>
            </div>
          </div>
          <div className="flex flex-col gap-[1.313rem]">
            <button className="w-[29.563rem] h-[3.438rem] rounded-[12px] bg-[#4169E1] text-white font-[700] text-[1.5rem] font-mona leading-[1.98rem]">
              Sign Up
            </button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Link className="text-[#174ef1] text-center">
              Already have an account? <br />
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
