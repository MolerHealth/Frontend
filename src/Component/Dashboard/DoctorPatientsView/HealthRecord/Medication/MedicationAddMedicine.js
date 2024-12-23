import React, { Component } from "react";
import ChevronDownIcon from "../../../../../Assets/SVG/ChevronDownSVG.svg";

class MedicationAddMedicine extends Component {
  render() {
    return (
      <div className="h-full py-[1rem] px-[2rem] overflow-auto ">
        <div className="flex flex-col gap-[0.1rem]">
          <div className="flex gap-[1rem] items-center">
            <div className="font-[600] font-manrope text-[2rem] text-[#333333]">
              Maraviroc (selzentry)
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
              <div className="flex w-[30%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope">Strength</div>
                  <input
                    className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                    placeholder="Enter dosage strength"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[30%] gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope">Consumption type</div>
                  <div className="flex w-full px-[1rem] py-[0.6rem] justify-between items-center border border-[#CDD1DA] hover:border-[#4169E1] outline-none">
                    <div className="font-[400] font-manrope text-[1.25rem]">
                      Select consumption type
                    </div>
                    <img
                      className="size-[2rem] px-[0.5rem]  "
                      src={ChevronDownIcon}
                      placeholder="Select consumption type"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-[30%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope">Time frame</div>
                  <input
                    className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                    placeholder="Input months or days"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex w-[40%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope">Quantity Per Dosage</div>
                  <input
                    className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                    placeholder="Enter dosage strength"
                  />
                </div>
              </div>

              <div className="flex w-[40%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope">Time frame</div>
                  <input
                    className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                    placeholder="Input months or days"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex w-[40%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope">Dosage</div>
                  <div className="flex w-full">
                    <button className="w-[50%] py-[0.5rem] text-[#4169E1] border border-[#4169E1]">
                      As Needed
                    </button>
                    <button className="w-[50%] py-[0.5rem] text-white bg-[#4169E1]">
                      As Scheduled
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex w-[40%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope">Dose Schedules</div>
                  <input
                    className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                    placeholder="Write intervals "
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

export default MedicationAddMedicine;
