import React, { Component } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import NotificationSVG from "../../../Assets/SVG/NotificationSVG.svg";
import PlaceHolderProfilePictureSVG from "../../../Assets/SVG/PlaceHolderProfilePictureSVG.svg";
import TotalPatientsSVG from "../../../Assets/SVG/TotalPatientsSVG.svg";
import AttendedPatientsSVG from "../../../Assets/SVG/AttendedPatientsSVG.svg";
import UnattendedPatientsSVG from "../../../Assets/SVG/UnattendedPatientsSVG.svg";
import Calender from "../Calender/Calender";
import BarChart from "../Graphs/BarChart";
import NewPatientAppointment from "./NewPatientAppointment";

class DashBoard extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen pt-[5%] pl-[3rem] overflow-y-auto">
        <div className="flex max-w-[75rem] h-[3.375rem] justify-between">
          <div className="flex items-center justify-center text-[1.5rem] font-[600] font-mona leading-[1.98rem] text-[#4169E1]">
            Welcome Back Dr. Mike
          </div>
          <div className="flex items-center w-[40%]">
            <div className="flex px-[1rem] py-[0.5rem] gap-[1rem] bg-highlightWhite fomt-[500] text-[0.813rem] font-mona leading-[1.073rem]">
              <div className="flex items-center">This Month</div>
              <ChevronDownIcon className="ml-2 w-[1.5rem] h-[1.5rem]" />
            </div>
          </div>

          <div className="flex items-center w-fit gap-[1rem]">
            <img src={NotificationSVG} alt="Notification" />
            <img
              src={PlaceHolderProfilePictureSVG}
              alt="Profile"
              className="ml-2"
            />
          </div>
        </div>
        <div className="flex max-w-[75rem] min-h-screen gap-[4rem] overflow-x-auto">
          <div className="flex w-[50%] flex-col mt-[2rem] gap-[3rem]">
            <div className="flex flex-col w-full h-[6.563rem] justify-between items-center flex-wrap gap-[1rem]">
              <div className="flex gap-[0.5rem] w-[31.5%] h-[6.563rem] items-center justify-center bg-highlightWhite">
                <img
                  className="w-[4.188rem] h-[3.625rem]"
                  src={TotalPatientsSVG}
                  alt="patiences"
                />
                <div>
                  <div className="font-mona font-[400] text-[0.688rem] leading-[0.97rem]">
                    Total Patients
                  </div>
                  <div className="font-mona font-[600] text-[1.25rem] leading-[1.65rem]">
                    350
                  </div>
                </div>
              </div>
              <div className="flex gap-[0.5rem] w-[31.5%] h-[6.563rem] items-center justify-center bg-highlightWhite">
                <img
                  className="w-[4.188rem] h-[3.625rem]"
                  src={AttendedPatientsSVG}
                  alt="patiences"
                />
                <div>
                  <div className="font-mona font-[400] text-[0.688rem] leading-[0.97rem]">
                    Total Patients
                  </div>
                  <div className="font-mona font-[600] text-[1.25rem] leading-[1.65rem]">
                    300
                  </div>
                </div>
              </div>
              <div className="flex gap-[0.5rem] w-[31.5%] h-[6.563rem] items-center justify-center bg-highlightWhite">
                <img
                  className="w-[4.188rem] h-[3.625rem]"
                  src={UnattendedPatientsSVG}
                  alt="patiences"
                />
                <div>
                  <div className="font-mona font-[400] text-[0.688rem] leading-[0.97rem]">
                    Total Patients
                  </div>
                  <div className="font-mona font-[600] text-[1.25rem] leading-[1.65rem]">
                    50
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit relative bg-highlightWhite p-[2rem]">
              <BarChart className="w-fit h-fit" />
            </div>
          </div>
          <div className="flex flex-col mt-[2rem] gap-[3rem]">
            <Calender />
            <NewPatientAppointment />
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
