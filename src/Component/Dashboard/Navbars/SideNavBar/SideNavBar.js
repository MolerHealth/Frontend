import React, { Component } from "react";
import DashBoardSVG from "../../../../Assets/SVG/DasBoardSVG.svg";
import DashboardIconDark from "../../../../Assets/SVG/DashboardIconDark.svg";
import MolerHealthSVG from "../../../../Assets/SVG/MolerHealthSVG.svg";
import PatientsSVG from "../../../../Assets/SVG/PatientsSVG.svg";
import PatientsIconWhite from "../../../../Assets/SVG/PatientsIconWhite.svg";
import ScheduleSVG from "../../../../Assets/SVG/ScheduleSVG.svg";
import MessageSVG from "../../../../Assets/SVG/MessageSVG.svg";
import LogoutSVG from "../../../../Assets/SVG/LogoutSVG.svg";
import { Link } from "react-router-dom";
import { withRouterHooks } from "../../../../withRouter/withRouterHook";
import { connect } from "react-redux";

class SideNavBar extends Component {
  followPath = () => {
    const { pathname } = this.props.location;
    if (pathname === "/dashboard") return "dashboard";
    if (pathname.includes("/dashboard/patients")) return "patients";
    if (pathname.includes("/dashboard/schedule")) return "schedule";
    if (pathname.includes("/dashboard/message")) return "message";
    return "";
  };

  render() {
    return (
      <div className="fixed flex flex-col h-full w-full max-w-[16.25rem] p-4 shadow-xl overflow-x-auto justify-between bg-white">
        <div>
          <div className="w-[13.625rem] h-[2.875rem] flex justify-center items-center gap-[1rem] mt-[3.688rem]">
            <img src={MolerHealthSVG} alt="Moler Health" />
            <div className="font-[700] text-[1.25rem] leading-[1.65rem] font-mona text-[#333333]">
              MolerHealth
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[13.625rem] h-fit py-[1rem] gap-[2rem]">
            <div
              className={`flex w-[11.938rem] h-[2.563rem] items-center gap-[1rem] pl-[1.5rem] rounded-[0.25rem] ${
                this.followPath() === "dashboard" ? "bg-[#4169E1]" : ""
              }`}
            >
              <img
                src={
                  this.followPath() === "dashboard"
                    ? DashBoardSVG
                    : DashboardIconDark
                }
                className="text-black"
                alt="Dashboard"
              />

              <Link to="/dashboard">
                <div
                  className={`font-[500] text-[1rem] leading-[1.65rem] font-mona ${
                    this.followPath() === "dashboard"
                      ? "text-white"
                      : "text-[#333333]"
                  }`}
                >
                  Dashboard
                </div>
              </Link>
            </div>
            <div
              className={`flex w-[11.938rem] h-[2.563rem] items-center gap-[1rem] pl-[1.5rem] rounded-[0.25rem] ${
                this.followPath() === "patients" ? "bg-[#4169E1]" : ""
              }`}
            >
              <img
                src={
                  this.followPath() === "patients"
                    ? PatientsIconWhite
                    : PatientsSVG
                }
                className="text-black"
                alt="Dashboard"
              />
              <Link to="/dashboard/patients">
                <div
                  className={`font-[500] text-[1rem] leading-[1.65rem] font-mona ${
                    this.followPath() === "patients"
                      ? "text-white"
                      : "text-[#333333]"
                  }`}
                >
                  Patient
                </div>
              </Link>
            </div>
            <div className="flex w-[11.938rem] h-[2.563rem] items-center gap-[1rem] pl-[1.5rem] rounded-[0.25rem]">
              <img src={ScheduleSVG} className="text-black" alt="Dashboard" />
              <div className="font-[500] text-[1rem] leading-[1.65rem] font-mona text-[#333333]">
                Schedule
              </div>
            </div>
            <div className="flex w-[11.938rem] h-[2.563rem] items-center gap-[1rem] pl-[1.5rem] rounded-[0.25rem]">
              <img src={MessageSVG} className="text-black" alt="Dashboard" />
              <div className="font-[500] text-[1rem] leading-[1.65rem] font-mona text-[#333333]">
                Message
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[11.938rem] h-[2.563rem] items-center gap-[1rem] pl-[1.5rem] rounded-[0.25rem]">
          <img src={LogoutSVG} className="text-black" alt="Dashboard" />
          <div className="font-[500] text-[1rem] leading-[1.65rem] font-mona text-[#333333]">
            Logout
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default withRouterHooks(connect(mapStateToProps, {})(SideNavBar));