import React, { Component } from "react";
import DotMenuSVG from "../../../Assets/SVG/DotsMenuSVG.svg";
import EditSVG from "../../../Assets/SVG/EditSVG.svg";

class LatestPatientUpdate extends Component {
  render() {
    return (
      <div className="flex w-full px-[1rem] h-fit bg-highlightWhite justify-center">
        <div className="flex w-full flex-col py-[3rem] gap-[1rem]">
          <div className="font-[600] text-[#333333] text-[1rem] font-mona leading-[1.32rem]">
            Latest Patient Update
          </div>
          <div className="flex flex-col h-fit">
            <div className="grid grid-cols-7 gap-[1rem] font-mona font-[500] text-[#4169E1] border-b h-[1.9rem]">
              <div className="w-[1rem]">ID</div>
              <div className="w-[4rem] relative left-[-2rem]">Date In</div>
              <div className="w-[7rem] relative left-[-3rem]">Name</div>
              <div className="w-[2.5rem] relative left-[-1rem]">Age</div>
              <div className="relative left-[-2rem]">Country</div>
              <div className="relative left-[-1rem]">Gender</div>
              <div>Modify</div>
            </div>
            <div className="grid grid-cols-7 gap-[1rem] h-[3.75rem] items-center justify-center  border-b">
              <div className="w-[3rem]">888DD</div>
              <div className="w-[4rem] relative left-[-2rem]">10/04/24</div>
              <div className="w-[7rem] relative left-[-3rem]">
                James Mitchel
              </div>
              <div className="w-[2.5rem] relative left-[-1rem]">42yrs</div>
              <div className="relative left-[-2rem]">USA</div>
              <div className="relative left-[-1rem]">Male</div>
              <div className="flex size-[1rem] items-center justify-center relative left-[1rem]">
                <img src={EditSVG} alt="Edit" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-[1rem] h-[3.75rem] items-center justify-center  border-b">
              <div className="w-[3rem]">888DD</div>
              <div className="w-[4rem] relative left-[-2rem]">10/04/24</div>
              <div className="w-[7rem] relative left-[-3rem]">
                James Mitchel
              </div>
              <div className="w-[2.5rem] relative left-[-1rem]">42yrs</div>
              <div className="relative left-[-2rem]">USA</div>
              <div className="relative left-[-1rem]">Male</div>
              <div className="flex size-[1rem] items-center justify-center relative left-[1rem]">
                <img src={EditSVG} alt="Edit" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-[1rem] h-[3.75rem] items-center justify-center  border-b">
              <div className="w-[3rem]">888DD</div>
              <div className="w-[4rem] relative left-[-2rem]">10/04/24</div>
              <div className="w-[7rem] relative left-[-3rem]">
                James Mitchel
              </div>
              <div className="w-[2.5rem] relative left-[-1rem]">42yrs</div>
              <div className="relative left-[-2rem]">USA</div>
              <div className="relative left-[-1rem]">Male</div>
              <div className="flex size-[1rem] items-center justify-center relative left-[1rem]">
                <img src={EditSVG} alt="Edit" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-[1rem] h-[3.75rem] items-center justify-center  border-b">
              <div className="w-[3rem]">888DD</div>
              <div className="w-[4rem] relative left-[-2rem]">10/04/24</div>
              <div className="w-[7rem] relative left-[-3rem]">
                James Mitchel
              </div>
              <div className="w-[2.5rem] relative left-[-1rem]">42yrs</div>
              <div className="relative left-[-2rem]">USA</div>
              <div className="relative left-[-1rem]">Male</div>
              <div className="flex size-[1rem] items-center justify-center relative left-[1rem]">
                <img src={EditSVG} alt="Edit" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-[1rem] h-[3.75rem] items-center justify-center  border-b">
              <div className="w-[3rem]">888DD</div>
              <div className="w-[4rem] relative left-[-2rem]">10/04/24</div>
              <div className="w-[7rem] relative left-[-3rem]">
                James Mitchel
              </div>
              <div className="w-[2.5rem] relative left-[-1rem]">42yrs</div>
              <div className="relative left-[-2rem]">USA</div>
              <div className="relative left-[-1rem]">Male</div>
              <div className="flex size-[1rem] items-center justify-center relative left-[1rem]">
                <img src={EditSVG} alt="Edit" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-[1rem] h-[3.75rem] items-center justify-center  border-b">
              <div className="w-[3rem]">888DD</div>
              <div className="w-[4rem] relative left-[-2rem]">10/04/24</div>
              <div className="w-[7rem] relative left-[-3rem]">
                James Mitchel
              </div>
              <div className="w-[2.5rem] relative left-[-1rem]">42yrs</div>
              <div className="relative left-[-2rem]">USA</div>
              <div className="relative left-[-1rem]">Male</div>
              <div className="flex size-[1rem] items-center justify-center relative left-[1rem]">
                <img src={EditSVG} alt="Edit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestPatientUpdate;
