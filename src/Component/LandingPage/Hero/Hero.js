import React from "react";
import GroupPhoto from "../../../Assets/GroupPhoto.png";

function Hero() {
  return (
    <div className="w-full h-fit flex justify-center">
      <div className="w-[90rem] h-fit flex flex-col gap-[2rem]">
        <div className="w-full  justify-between ">
          <div className="w-full h-[297px] flex items-center gap-[1.5rem]">
            <div className="w-1/2 h-[143px] ml-[8rem] font-mona font-[700] text-[36px] leading-[47.52px]">
              <span className="text-[#4169E1]">Molerhealth</span> Open Source
              Partner For Seamless Health Management
            </div>
            <div className="w-1/2 h-[143px] mr-[8rem]">
              <p className=" w-[80%] h-[84px] font-mona font-[400] text-[16px] leading-[21.12px] text-[#1E1E1E] pt-2">
                Discover a new level of healthcare empowerment with Molar
                health, a heartfelt and open-source Electronic Medical Records
                system crafted to place you firmly in command of your
                well-being.
              </p>
              <div className="w-[402px] h-[62px] flex gap-[19px] mt-[3rem]">
                <button className="w-[178px] h-[52px] rounded-[13px] border-[7px] border-[#75D79E] flex justify-center items-center bg-[#26BF47]">
                  <p className="w-fit h-fit text-white font-[700] text-[24px] leading-[31.68px] font-mona">
                    Login
                  </p>
                </button>
                <div className="w-[205px] h-[62px] flex justify-center items-center">
                  <p className="h-fit w-fix font-[700] text-[22px] leading-[29.04px] font-mona text-[#4169E1]">
                    How it works
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[844px]">
          <img className="w-full h-full" src={GroupPhoto} alt="Group Photo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
