import React, { Component } from "react";
import GoogleLogo from "../../Assets/googleLogo.png";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div className="w-full h-lvh flex justify-center items-center">
        <div className="w-[37.313rem] h-[41.5rem] flex flex-col items-center justify-center gap-[2rem]">
          <div className="w-[17.688rem] h-[4.5rem] flex flex-col gap-[0.563rem]">
            <h1 className="font-mona font-[700] text-[2rem] leading-[2.64rem] text-center">
              Login
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
                placeholder="Enter Your Email"
              />
              <input
                className="w-[29.563rem] h-[3.438rem] rounded-[12px] px-[1rem] border-[0.5px] focus:outline-none focus:border-[#4169E1]"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="flex flex-col gap-[1.313rem]">
              <button className="w-[29.563rem] h-[3.438rem] rounded-[12px] bg-[#4169E1] text-white font-[700] text-[1.5rem] font-mona leading-[1.98rem]">
                Login
              </button>
              <button className="w-[29.563rem] h-[3.438rem] rounded-[12px] flex justify-center items-center gap-2 border-[0.5px] border-black text-[1.5rem] font-[600] font-sans text-[#3C3C3C]">
                <img src={GoogleLogo} />
                Google
              </button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Link className="text-[#174ef1]">Forgot Password?</Link>
              <Link to="/signup" className="text-[#174ef1] text-center">
                Don't have an account? <br />
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
