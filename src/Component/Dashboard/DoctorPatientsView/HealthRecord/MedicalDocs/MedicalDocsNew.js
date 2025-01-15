import React, { Component } from "react";
import CancelIcon from "../../../../../Assets/SVG/CancelIcon.svg";
import MedicalDocsAddDocs from "./MedicalDocsAddDocs";
import MedicalScreeningDocAddPopUp from "./MedicalScreeningDocAddPopUp";
import { Link } from "react-router-dom";

class MedicalDocsNew extends Component {
  render() {
    return (
      <div className="relative flex w-full h-screen px-[4rem] py-[2rem] bg-black bg-opacity-40 justify-center">
        {/* <MedicalScreeningDocAddPopUp /> */}
        <div className="relative w-full max-w-[1200px] max-h-[1000px] overflow-hidden bg-[#FFFFFF] rounded-[8px] shadow-lg box-border">
          <div className="h-fit pb-[2rem] w-full">
            <div className="flex flex-col w-full z-20 gap-[1rem]">
              <div className="flex bg-[#4169E1] h-[4.25rem] justify-between items-center px-[2rem]">
                <div className="flex gap-[4rem] text-white font-manrope font-[500] text-[1.5rem]">
                  <div className="font-[600]">Daniel George</div>
                  <div className="flex gap-[0.2rem]">
                    <div>Hospital ID:</div>
                    <div>122530</div>
                  </div>
                  <div className="flex gap-[0.2rem]">
                    <div>Sex:</div>
                    <div>Male</div>
                  </div>
                </div>
                <Link to="/dashboard/patients">
                  <img
                    className="size-[2rem]"
                    src={CancelIcon}
                    alt="Cancel Icon"
                  />
                </Link>
              </div>

              <div className="flex w-full justify-between px-[2rem]">
                <div className="font-[600] font-manrope text-[2.25rem]">
                  Add New Medical Document
                </div>
                <button className="font-[400] font-manrope bg-[#4169E1] text-white text-[1.5rem] px-[1rem] py-[0.5rem] rounded-[42px]">
                  Add Medical Docs
                </button>
              </div>
            </div>
          </div>

          <div className="max-h-[40rem] h-full overflow-auto px-[2rem]">
            <MedicalDocsAddDocs />
          </div>

          <div className="absolute h-[8rem] bottom-0 py-[2rem] w-full flex justify-center gap-[1rem] bg-white">
            <button className="border border-[#4169E1] px-[1rem] py-[0.5rem] font-[600] font-manrope text-[#667085] text-[2rem] rounded-[42px]">
              Cancel
            </button>
            <button className="px-[1rem] py-[0.5rem] font-[600] font-manrope text-[#667085] text-[2rem] bg-[#E5E5E5] rounded-[42px]">
              Save & Exit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicalDocsNew;
