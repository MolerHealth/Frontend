import React, { Component } from "react";
import CancelIcon from "../../../../../Assets/SVG/CancelIcon.svg";
import FamilyHistoryAddHistory from "./FamilyHistoryAddHistory";
import { Link } from "react-router-dom";

class FamilyHistoryNew extends Component {
  render() {
    return (
      <div className="flex w-full h-screen px-[4rem] py-[2rem] bg-black bg-opacity-40 justify-center">
        <div className="relative w-full max-w-[1200px] max-h-full bg-[#FFFFFF] rounded-[8px] shadow-lg box-border">
          {/* Header */}
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

              {/* Content */}
              <div className="px-[2rem]">
                <div className="font-[600] font-manrope text-[2.25rem]">
                  Add Family History
                </div>
                <div className="font-[400] font-manrope text-[#333333] text-[1.5rem]">
                  press “tab” if you cannot find the family member on the list
                </div>
              </div>
              <div className="flex w-full h-[3.25rem] px-[2rem]">
                <input
                  className="text-[#667085] font-[600] font-manrope text-[1.25rem] px-[1rem] w-full rounded-[3px] border border-[#E5E5E5] focus:border-[#4169E1] outline-none"
                  placeholder="Select one or type here"
                />
              </div>

              {/* Allergy Tags */}
              <div className="flex px-[2rem] gap-[2rem] py-[1rem] flex-wrap">
                <div className="bg-[#EFEFF4] text-[1rem] text-[#667085] font-[400] font-manrope px-[1rem] py-[0.5rem] rounded-[33px]">
                  Grandfather
                </div>
                <div className="bg-[#EFEFF4] text-[1rem] text-[#667085] font-[400] font-manrope px-[1rem] py-[0.5rem] rounded-[33px]">
                  Mother
                </div>
                <div className="bg-[#EFEFF4] text-[1rem] text-[#667085] font-[400] font-manrope px-[1rem] py-[0.5rem] rounded-[33px]">
                  Father
                </div>
              </div>
            </div>
          </div>

          {/* Allergy Symptoms Section */}
          <div className="h-[20rem] overflow-auto px-[2rem]">
            <FamilyHistoryAddHistory />
          </div>

          {/* Footer */}
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

export default FamilyHistoryNew;
