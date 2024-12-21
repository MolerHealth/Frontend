import React, { Component } from "react";
import ArrowLeft from "../../../Assets/SVG/ArrowLeft.svg";
import PrinterIcon from "../../../Assets/SVG/PrinterIcon.svg";
import AllergiesHome from "./HealthRecord/Allergies/AllergiesHome";
import MedicationHome from "./HealthRecord/Medication/MedicationHome";
import MedicalConditionHome from "./HealthRecord/MedicalCondition/MedicalConditionHome";
import FamilyHistoryHome from "./HealthRecord/FamilyHistory/FamilyHistoryHome";
import SurgeriesHome from "./HealthRecord/Surgeries/SurgeriesHome";
import MedicalDocs from "./HealthRecord/MedicalDocs/MedicalDocs";

class DoctorPatientsViewHome extends Component {
  render() {
    return (
      <div className="flex flex-col w-full h-screen px-[1rem] items-center pt-[4rem]">
        <div className="flex flex-col w-full gap-[1rem]">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-[1rem]">
              <div className="flex gap-[2rem]">
                <img src={ArrowLeft} alt="Arrow Left" />
                <div className="font-[600] font-manrope text-[2rem] text-[#667085]">
                  Daniel George
                </div>
              </div>
              <div className="flex pl-[4rem] gap-[1rem] items-center">
                <div className="font-[700] font-manrope text-[1.2rem] text-[#333333]">
                  Hospital ID:
                </div>
                <div className="font-[500] font-manrope text-[#333333] text-[1.25rem]">
                  122530
                </div>
              </div>
              <div className="flex pl-[4rem] gap-[1rem] items-center">
                <div className="font-[700] font-manrope text-[1.2rem] text-[#333333]">
                  Phone number:
                </div>
                <div className="font-[500] font-manrope text-[#333333] text-[1.25rem]">
                  0709988343
                </div>
              </div>
              <div className="flex pl-[4rem] gap-[1rem] items-center">
                <div className="font-[700] font-manrope text-[1.2rem] text-[#333333]">
                  D.O.B:
                </div>
                <div className="font-[500] font-manrope text-[#333333] text-[1.25rem]">
                  July 8, 1978
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-[1rem] items-center">
                <div className="font-[700] font-manrope text-[1.2rem] text-[#333333]">
                  Sex:
                </div>
                <div className="font-[500] font-manrope text-[#333333] text-[1.25rem]">
                  Male
                </div>
              </div>
              <div className="flex gap-[1rem] items-center">
                <div className="font-[700] font-manrope text-[1.2rem] text-[#333333]">
                  Blood Type:
                </div>
                <div className="font-[500] font-manrope text-[#333333] text-[1.25rem]">
                  AB
                </div>
              </div>
              <div className="flex gap-[1rem] items-center">
                <div className="font-[700] font-manrope text-[1.2rem] text-[#333333]">
                  Genotype:
                </div>
                <div className="font-[500] font-manrope text-[#333333] text-[1.25rem]">
                  AA
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex items-center gap-[1rem]">
              <div className="flex">
                <div className="font-[500] font-manrope text-[#667085] text-[1.625rem]">
                  Date Record Created:
                </div>
                <div className="font-[500] font-manrope text-[#667085] text-[1.625rem]">
                  9/9/24
                </div>
              </div>
              <div className="flex items-center border border-[#BBCAF6] px-[2rem] py-[0.5rem]">
                <div className="font-[500] font-manrope text-[1.25rem] text-[#333333]">
                  Print:
                </div>
                <img src={PrinterIcon} alt="Printer Icon" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[2rem]">
              <div>Health Record</div>
              <div>Medical Notes</div>
              <div>Vitals</div>
            </div>
            <div className="flex w-full h-[0.25rem] bg-[#D9D9D9]">
              <div className="w-[11%] h-[0.25rem] bg-[#4169E1]"></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[2rem]">
            <AllergiesHome />
            <MedicationHome />
            <MedicalConditionHome />
            <FamilyHistoryHome />
            <SurgeriesHome />
            <MedicalDocs />
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorPatientsViewHome;
