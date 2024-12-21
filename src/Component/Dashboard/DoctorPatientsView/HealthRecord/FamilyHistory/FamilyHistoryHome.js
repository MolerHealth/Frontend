import React, { Component } from "react";
import AddBotton from "../../../../../Assets/SVG/AddBotton.svg";
import TrashIcon from "../../../../../Assets/SVG/TrashIcon.svg";
import FamilyHistory from "../../../../../Assets/SVG/FamilyHistoryIcon.svg";

class FamilyHistoryHome extends Component {
  render() {
    return (
      <div className="w-[19.438rem] border border-[#C4C9D3] py-[0.5rem] rounded-[4px]">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex justify-between px-[1rem] py-[0.5rem] border-b border-[#C4C9D3]">
            <div className="flex gap-[1rem] items-center">
              <img
                className="size-[1.5rem] gap-[1rem] items-center"
                src={FamilyHistory}
                alt="Allergy Icon"
              />
              <div className="font-[500] font-manrope text-[1.25rem]">
                Family History
              </div>
            </div>
            <div className="flex gap-[1rem] items-center">
              <div className="font-[400] font-manrope text-[1.25rem] text-[#4169E1]">
                ADD
              </div>
              <img
                className="size-[1.25rem]"
                src={AddBotton}
                alt="Allergy Icon"
              />
            </div>
          </div>
          <div className="px-[1rem] flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[0.5rem]">
                <div className="flex gap-[1rem]">
                  <div className="font-[400] font-manrope text-[1rem]">
                    Artrial Fibrillation
                  </div>
                </div>
              </div>
              <img className="size-[2rem]" src={TrashIcon} alt="Trash Icon" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[0.5rem]">
                <div className="flex gap-[1rem]">
                  <div className="font-[400] font-manrope text-[1rem]">
                    Asthma
                  </div>
                </div>
              </div>
              <img className="size-[2rem]" src={TrashIcon} alt="Trash Icon" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[0.5rem]">
                <div className="flex gap-[1rem]">
                  <div className="font-[400] font-manrope text-[1rem]">
                    Diuresis
                  </div>
                </div>
              </div>
              <img className="size-[2rem]" src={TrashIcon} alt="Trash Icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FamilyHistoryHome;
