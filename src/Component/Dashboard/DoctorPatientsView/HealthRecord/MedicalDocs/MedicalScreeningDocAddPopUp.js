import React, { Component } from "react";
import CancelButtonWhiteSVG from "../../../../../Assets/SVG/CancelButtonWhiteSVG.svg";

class MedicalScreeningDocAddPopUp extends Component {
  render() {
    return (
      <div className="absolute max-w-[1200px] flex justify-center items-center w-full h-full bg-opacity-20 bg-black z-20">
        <div className="w-[37.063rem] flex flex-col gap-[1rem] h-fit px-[1rem] py-[2rem] bg-white rounded-[8px] shadow-lg">
          <div className="flex justify-between">
            <div className="font-[600] font-manrope text-[1.5rem] text-[#333333]">
              Medical Screening
            </div>
            <img src={CancelButtonWhiteSVG} alt="Cancel Icon" />
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div className="font-[600] font-manrope text-[1.25rem]">
              Screening Type
            </div>
            <input
              type="text"
              className="border border-[#C4C9D3] rounded-[4px] px-[1rem] py-[0.5rem] outline-none focus:border-[#4169E1]"
              placeholder="e.g., X-Ray, Blood Test"
            />
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div className="font-[600] font-manrope text-[1.25rem]">Date</div>
            <input
              type="text"
              className="border border-[#C4C9D3] rounded-[4px] px-[1rem] py-[0.5rem] outline-none focus:border-[#4169E1]"
              placeholder="mm/dd/yyyy"
            />
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div className="font-[600] font-manrope text-[1.25rem]">
              Upload Files
            </div>
            <div className="flex">
              <button className="px-[1rem] py-[0.5rem] bg-[#EFEFEF] rounded-[5px] border border-[#667085]">
                Choose files here
              </button>
              <div className="px-[1rem] py-[0.5rem]">No file chosen</div>
            </div>
          </div>
          <button className="font-[500] font-manrope text-[1.25rem] w-full py-[0.5rem] bg-[#22C55E] text-white rounded-[5px]">
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default MedicalScreeningDocAddPopUp;
