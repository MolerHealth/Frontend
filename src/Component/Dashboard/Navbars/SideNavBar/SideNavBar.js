import React, { Component } from "react";
import DashBoardSVG from "../../../../Assets/SVG/DasBoardSVG.svg";
import MolerHealthSVG from "../../../../Assets/SVG/MolerHealthSVG.svg";
import PatientsSVG from "../../../../Assets/SVG/PatientsSVG.svg";
import ScheduleSVG from "../../../../Assets/SVG/ScheduleSVG.svg";
import MessageSVG from "../../../../Assets/SVG/MessageSVG.svg";
import LogoutSVG from "../../../../Assets/SVG/LogoutSVG.svg";

class SideNavBar extends Component {
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
            <div className="flex w-[11.938rem] h-[2.563rem] items-center gap-[1rem] pl-[1.5rem] rounded-[0.25rem] bg-[#4169E1]">
              <img src={DashBoardSVG} className="text-black" alt="Dashboard" />
              <div className="font-[500] text-[1rem] leading-[1.65rem] font-mona text-white">
                Dashboard
              </div>
            </div>
            <div className="flex w-[11.938rem] h-[2.563rem] items-center gap-[1rem] pl-[1.5rem] rounded-[0.25rem]">
              <img src={PatientsSVG} className="text-black" alt="Dashboard" />
              <div className="font-[500] text-[1rem] leading-[1.65rem] font-mona text-[#333333]">
                Patient
              </div>
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
export default SideNavBar;
