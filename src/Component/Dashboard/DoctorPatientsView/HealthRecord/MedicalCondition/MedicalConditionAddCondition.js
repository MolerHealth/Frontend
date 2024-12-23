import React, { Component } from "react";
import ChevronDownIcon from "../../../../../Assets/SVG/ChevronDownSVG.svg";

class MedicalConditionAddCondition extends Component {
  render() {
    return (
      <div className="h-full py-[1rem] px-[2rem] overflow-auto ">
        <div className="flex flex-col gap-[0.1rem]">
          <div className="flex gap-[1rem] items-center">
            <div className="font-[600] font-manrope text-[2rem] text-[#333333]">
              Acne
            </div>
            <button className="font-[600] font-manrope tex-[1.25rem] text-[#FF0000]">
              Delete
            </button>
          </div>
          <div className="font-[600] font-manrope text-[#667085] text-[1.25rem]">
            Reactions
          </div>
          <div className="flex flex-col gap-[2rem] w-full h-auto py-[1rem]">
            <div className="flex justify-between w-full">
              <div className="flex w-full flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope">Date Diagosed</div>
                  <input
                    className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                    placeholder="Enter dosage strength"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicalConditionAddCondition;
