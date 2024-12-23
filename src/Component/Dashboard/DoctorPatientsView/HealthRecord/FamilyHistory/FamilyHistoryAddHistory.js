import React, { Component } from "react";

class FamilyHistoryAddHistory extends Component {
  render() {
    return (
      <div className="h-full py-[1rem] px-[2rem] overflow-auto ">
        <div className="flex flex-col gap-[0.1rem]">
          <div className="flex gap-[1rem] items-center">
            <div className="font-[600] font-manrope text-[2rem] text-[#333333]">
              Father
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
                  <div className="font-manrope font-[400] text-[1.5rem] text-[#333333]">
                    This Relative is
                  </div>
                  <div className="flex w-full">
                    <button className="w-[50%] border border-[#4169E1] py-[1rem]">
                      Alive
                    </button>
                    <button className="w-[50%] py-[1rem] bg-[#4169E1] text-white">
                      Deceased
                    </button>
                  </div>
                </div>
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope font-[400] text-[1.5rem] text-[#333333]">
                    How old was this relative?
                  </div>
                  <div className="flex w-full">
                    <input
                      className="w-full border outline-none focus:border-[#4169E1] py-[1rem] px-[1rem]"
                      placeholder="Enter Age"
                    />
                  </div>
                </div>
                <div className="flex gap-[1rem] flex-col w-full justify-between">
                  <div className="font-manrope font-[400] text-[1.5rem] text-[#333333]">
                    What was the cause of death?
                  </div>
                  <div className="flex w-full">
                    <input
                      className="w-full border outline-none focus:border-[#4169E1] py-[1rem] px-[1rem]"
                      placeholder="Enter cause of death"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FamilyHistoryAddHistory;
