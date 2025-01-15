import React, { Component } from "react";
import DotMenuSVG from "../../../Assets/SVG/DotsMenuSVG.svg";

class NewPatientAppointment extends Component {
  render() {
    return (
      <div className="flex w-[32rem] h-[26.25rem] bg-highlightWhite justify-center">
        <div className="flex flex-col py-[3rem] gap-[1rem]">
          <div className="font-[600] text-[#333333] text-[1rem] font-mona leading-[1.32rem]">
            New Patient Appointment
          </div>
          <div>
            <div className="grid grid-cols-4 gap-[2rem] font-mona font-[500] text-[#4169E1] border-b h-[1.9rem]">
              <div>Patient ID</div>
              <div>Name</div>
              <div>Date</div>
              <div>Action</div>
            </div>
            <div className="grid grid-cols-4 gap-[2rem] h-[3.75rem] items-center  border-b">
              <div>888DD</div>
              <div>Jessica</div>
              <div>10/04/24</div>
              <div>
                <img src={DotMenuSVG} alt="DotMenu" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[2rem] h-[3.75rem] items-center  border-b">
              <div>888DD</div>
              <div>Jessica</div>
              <div>10/04/24</div>
              <div>
                <img src={DotMenuSVG} alt="DotMenu" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[2rem] h-[3.75rem] items-center  border-b">
              <div>888DD</div>
              <div>Jessica</div>
              <div>10/04/24</div>
              <div>
                <img src={DotMenuSVG} alt="DotMenu" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[2rem] h-[3.75rem] items-center  border-b">
              <div>888DD</div>
              <div>Jessica</div>
              <div>10/04/24</div>
              <div>
                <img src={DotMenuSVG} alt="DotMenu" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[2rem] h-[3.75rem] items-center  border-b">
              <div>888DD</div>
              <div>Jessica</div>
              <div>10/04/24</div>
              <div>
                <img src={DotMenuSVG} alt="DotMenu" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPatientAppointment;
