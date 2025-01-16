import React, { Component } from "react";
import { Link } from "react-router-dom";

import AllergyIcon from "../../../../../Assets/SVG/AlergiesIcon.svg";
import AddBotton from "../../../../../Assets/SVG/AddBotton.svg";
import TrashIcon from "../../../../../Assets/SVG/TrashIcon.svg";
import WarningIcon from "../../../../../Assets/SVG/WarningIcon.svg";

class FamilyHistoryHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We'll store relatives from localStorage here
      relatives: [],
    };
  }

  componentDidMount() {
    // 1. Read from localStorage under the key "familyHistory"
    const storedRelatives =
      JSON.parse(localStorage.getItem("familyHistory")) || [];
    this.setState({ relatives: storedRelatives });
  }

  // Remove an item from state & localStorage
  handleRemoveRelative = (index) => {
    const updated = this.state.relatives.filter((_, i) => i !== index);
    this.setState({ relatives: updated });
    localStorage.setItem("familyHistory", JSON.stringify(updated));
  };

  render() {
    return (
      <div className="w-[19.438rem] border border-[#C4C9D3] py-[0.5rem] rounded-[4px]">
        <div className="flex flex-col gap-[1rem]">
          {/* HEADER SECTION */}
          <div className="flex justify-between px-[1rem] py-[0.5rem] border-b border-[#C4C9D3]">
            <div className="flex gap-[1rem] items-center">
              <img
                className="size-[1.5rem] gap-[1rem] items-center"
                src={AllergyIcon}
                alt="Allergy Icon"
              />
              <div className="font-[500] font-manrope text-[1.25rem] items-center">
                Family History
              </div>
            </div>
            <Link to="/dashboard/patients/family-history">
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
            </Link>
          </div>

          {/* BODY SECTION */}
          <div className="px-[1rem]">
            {/** Render each relative exactly like your placeholders did **/}
            {this.state.relatives.map((rel, index) => (
              <div key={index} className="flex items-center justify-between">
                {/* Left side (Icon, Relative Name, and details) */}
                <div className="flex flex-col gap-[0.5rem]">
                  <div className="flex gap-[1rem]">
                    <img src={WarningIcon} alt="Warning Icon" />
                    <div className="font-[400] font-manrope text-[1rem]">
                      {rel.name}
                    </div>
                  </div>
                  <div className="font-[400] font-manrope text-[1rem] text-[#667085]">
                    {/* Example: if 'alive' === 'alive', show 'Alive'; if 'deceased', show cause, etc. */}
                    {rel.alive === "alive" && <>Still alive</>}
                    {rel.alive === "deceased" && (
                      <>
                        Age at death: {rel.ageAtDeath || "—"}, Cause:{" "}
                        {rel.causeOfDeath || "—"}
                      </>
                    )}
                  </div>
                </div>

                {/* Trash icon to remove from the list */}
                <img
                  className="size-[2rem] cursor-pointer"
                  src={TrashIcon}
                  alt="Trash Icon"
                  onClick={() => this.handleRemoveRelative(index)}
                />
              </div>
            ))}

            {/* If no relatives, you can show a fallback or keep it empty */}
            {this.state.relatives.length === 0 && (
              <div className="text-gray-400 text-sm mt-[1rem]">
                No family history added yet
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FamilyHistoryHome;
