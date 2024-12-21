import React, { Component } from "react";

class AllergiesAddSymptoms extends Component {
  render() {
    return (
      <div className="py-[1rem] px-[2rem]">
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
          <div>
            <div>
              <div className="">
                <div></div>
                <div></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllergiesAddSymptoms;
