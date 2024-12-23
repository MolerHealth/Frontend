import React, { Component } from "react";
import ImageSquareSVG from "../../../../../Assets/SVG/ImageSquareSVG.svg";

class MedicalDocsAddDocs extends Component {
  render() {
    return (
      <div className="flex flex-col max-h-[40rem] h-full pb-[8rem] gap-[1rem] py-[1rem] overflow-auto">
        <div className="flex flex-col gap-[0.1rem]">
          <div className="font-[500] font-manrope text-[1.5rem] text-[#667085]">
            Documents
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex w-full border border-[#CDD1DA] hover:border-[#4169E1] rounded-[8px] cursor-pointer">
            <div className="flex flex-col gap-[1rem] w-full px-[2rem] py-[1.5rem]">
              <div className="font-manrope font-[600] text-[1.5rem] text-[#333333]">
                X-RAY
              </div>
              <div className="flex gap-[0.5rem] font-manrope font-[500] text-[1.25rem] text-[#667085]">
                <div>Date:</div>
                <div>2024-03-15</div>
              </div>
              <div className="font-[500] font-manrope text-[1.25rem]">
                Normal chest X-ray, no abnormalities detected
              </div>
              <div className="font-[600] font-manrope text-[1.25rem]">
                Attached File
              </div>
              <div className="flex w-[8.625rem] items-center justify-center py-[0.5rem] gap-[0.2rem] bg-[#F1F2F6] rounded-[42px]">
                <img src={ImageSquareSVG} alt="Chevron Down Icon" />
                <div className="font-[400] font-manrope text-[1.25rem]">
                  x-ray
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full border border-[#CDD1DA] hover:border-[#4169E1] rounded-[8px] cursor-pointer">
            <div className="flex flex-col gap-[1rem] w-full px-[2rem] py-[1.5rem]">
              <div className="font-manrope font-[600] text-[1.5rem] text-[#333333]">
                Blood test
              </div>
              <div className="flex gap-[0.5rem] font-manrope font-[500] text-[1.25rem] text-[#667085]">
                <div>Date:</div>
                <div> 2024-03-15</div>
              </div>
              <div className="font-[500] font-manrope text-[1.25rem]">
                Cholesterol levels slightly elevatd
              </div>
              <div className="font-[600] font-manrope text-[1.25rem]">
                Attached File
              </div>
              <div className="flex w-[8.625rem] items-center justify-center py-[0.5rem] gap-[0.2rem] bg-[#F1F2F6] rounded-[42px]">
                <img src={ImageSquareSVG} alt="Chevron Down Icon" />
                <div className="font-[400] font-manrope text-[1.25rem]">
                  Sample
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicalDocsAddDocs;
