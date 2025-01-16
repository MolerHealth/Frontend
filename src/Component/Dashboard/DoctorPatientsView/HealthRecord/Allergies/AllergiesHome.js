import React, { Component } from "react";
import AllergyIcon from "../../../../../Assets/SVG/AlergiesIcon.svg";
import AddBotton from "../../../../../Assets/SVG/AddBotton.svg";
import TrashIcon from "../../../../../Assets/SVG/TrashIcon.svg";
import WarningIcon from "../../../../../Assets/SVG/WarningIcon.svg";
import { Link } from "react-router-dom";

class AllergiesHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allergies: [],
    };
  }

  componentDidMount() {
    // If you saved to localStorage, retrieve here:
    const stored = JSON.parse(localStorage.getItem("allergies")) || [];
    // e.g. stored = [ { name: 'Milk', reactions: ['Hives', 'Nausea'] }, ... ]
    this.setState({ allergies: stored });
  }

  handleRemoveAllergy = (index) => {
    const updatedAllergies = this.state.allergies.filter((_, i) => i !== index);
    this.setState({ allergies: updatedAllergies });
    localStorage.setItem("allergies", JSON.stringify(updatedAllergies));
  };

  render() {
    const { allergies } = this.state;

    return (
      <div className="w-[19.438rem] border border-[#C4C9D3] py-[0.5rem] rounded-[4px]">
        <div className="flex flex-col gap-[1rem]">
          {/* Header */}
          <div className="flex justify-between px-[1rem] py-[0.5rem] border-b border-[#C4C9D3]">
            <div className="flex gap-[1rem] items-center">
              <img
                className="size-[1.5rem] gap-[1rem] items-center"
                src={AllergyIcon}
                alt="Allergy Icon"
              />
              <div className="font-[500] font-manrope text-[1.25rem] items-center">
                Allergies
              </div>
            </div>
            <Link to="/dashboard/patients/allergies">
              <div className="flex gap-[1rem] items-center">
                <div className="font-[400] font-manrope text-[1.25rem] text-[#4169E1]">
                  ADD
                </div>
                <img
                  className="size-[1.25rem]"
                  src={AddBotton}
                  alt="Add Icon"
                />
              </div>
            </Link>
          </div>

          {/* Content */}
          <div className="px-[1rem] flex flex-col gap-[1rem]">
            {allergies.map((allergy, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b pb-[0.5rem]"
              >
                <div className="flex flex-col gap-[0.5rem]">
                  <div className="flex gap-[1rem]">
                    <img src={WarningIcon} alt="Warning Icon" />
                    <div className="font-[400] font-manrope text-[1rem]">
                      {allergy.name}
                    </div>
                  </div>

                  {/* Render some or all of the reactions */}
                  {allergy.reactions && allergy.reactions.length > 0 ? (
                    <div className="font-[400] font-manrope text-[1rem] text-[#667085]">
                      {allergy.reactions.join(", ")}
                    </div>
                  ) : (
                    <div className="text-gray-400 text-[0.875rem]">
                      No reactions added
                    </div>
                  )}
                </div>

                <img
                  className="size-[2rem] cursor-pointer"
                  src={TrashIcon}
                  alt="Trash Icon"
                  onClick={() => this.handleRemoveAllergy(i)}
                />
              </div>
            ))}
            {allergies.length === 0 && (
              <div className="text-gray-400 text-sm">No allergy added yet.</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AllergiesHome;
