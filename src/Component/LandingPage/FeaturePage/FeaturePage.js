import React from "react";
import CMSReporting from "../../../Assets/CMSReporting.png";
import EPrescription from "../../../Assets/EPrescription.png";

function FeaturePage() {
  return (
    <div className="w-full h-[586px] flex justify-center">
      <div className="w-[90rem] h-full flex items-center justify-center">
        <div className="flex gap-[5rem] flex-col items-center">
          <div className="w-[1169px] font-mona font-[700] text-[40px] leading-[38.68px]">
            Unlock the Power of MolerHealth: Cutting-Edge Features for
            Comprehensive Health Management
          </div>
          <div className="flex gap-[3rem] w-[1169px]">
            <div className="w-1/3 h-[296px] flex gap-[2rem] flex-col justify-center">
              <div className="w-80% h-[65px] flex gap-[1rem] pl-[1rem] items-center">
                <img src={EPrescription} alt="E Prescription" />
                <div className="font-[700] text-[24px] leading-[31.68px] font-mona">
                  E prescription
                </div>
              </div>
              <div className="font-[350] text-[20px] font-Niramala leading-[26.4px]">
                Receive your prescriptions directly to your device, eliminating
                the need for paper hassles and saving you time.
              </div>
            </div>
            <div className="w-1/3 h-[296px] flex gap-[2rem] flex-col justify-center">
              <div className="w-80% h-[65px] flex gap-[1rem] pl-[1rem] items-center">
                <img src={CMSReporting} alt="E Prescription" />
                <div className="font-[700] text-[24px] leading-[31.68px] font-mona">
                  E prescription
                </div>
              </div>
              <div className="font-[350] text-[20px] font-Niramala leading-[26.4px]">
                Access comprehensive reports on your medical history, treatment
                progress, and wellness trends, empowering you with a 360-degree
                view of your health.
              </div>
            </div>
            <div className="w-1/3 h-[296px] flex gap-[2rem] flex-col justify-center">
              <div className="w-80% h-[65px] flex gap-[1rem] pl-[1rem] items-center">
                <img src={EPrescription} alt="E Prescription" />
                <div className="font-[700] text-[24px] leading-[31.68px] font-mona">
                  E prescription
                </div>
              </div>
              <div className="font-[350] text-[20px] font-Niramala leading-[26.4px]">
                Receive your prescriptions directly to your device, eliminating
                the need for paper hassles and saving you time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturePage;
