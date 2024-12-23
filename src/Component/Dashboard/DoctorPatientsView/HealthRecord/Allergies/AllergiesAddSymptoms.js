import React, { Component } from "react";

class AllergiesAddSymptoms extends Component {
  render() {
    return (
      <div className="h-full py-[1rem] px-[2rem] overflow-auto ">
        <div className="flex flex-col gap-[0.1rem]">
          <div className="flex gap-[1rem] items-center">
            <div className="font-[600] font-manrope text-[2rem] text-[#333333]">
              Milk
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
              <div className="flex w-[45%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex w-full justify-between">
                  <div>Hives</div>
                  <div className="size-[1.5rem] border"></div>
                </div>
                <div className="border border-b-[1px] "></div>
              </div>
              <div className="flex w-[45%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex w-full justify-between">
                  <div>Hives</div>
                  <div className="size-[1.5rem] border"></div>
                </div>
                <div className="border border-b-[1px] "></div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex w-[45%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex w-full justify-between">
                  <div>Hives</div>
                  <div className="size-[1.5rem] border"></div>
                </div>
                <div className="border border-b-[1px] "></div>
              </div>
              <div className="flex w-[45%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex w-full justify-between">
                  <div>Hives</div>
                  <div className="size-[1.5rem] border"></div>
                </div>
                <div className="border border-b-[1px] "></div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex w-[45%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex w-full justify-between">
                  <div>Hives</div>
                  <div className="size-[1.5rem] border"></div>
                </div>
                <div className="border border-b-[1px] "></div>
              </div>
              <div className="flex w-[45%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                <div className="flex w-full justify-between">
                  <div>Hives</div>
                  <div className="size-[1.5rem] border"></div>
                </div>
                <div className="border border-b-[1px] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllergiesAddSymptoms;
