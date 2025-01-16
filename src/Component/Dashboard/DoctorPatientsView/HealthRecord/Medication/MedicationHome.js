import React, { Component } from "react";
import MedicationIcon from "../../../../../Assets/SVG/MedicationIcon.svg";
import AddBotton from "../../../../../Assets/SVG/AddBotton.svg";
import TrashIcon from "../../../../../Assets/SVG/TrashIcon.svg";
import { Link } from "react-router-dom";

class MedicationHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medications: [],
    };
  }

  componentDidMount() {
    // Read from localStorage on load
    const stored = JSON.parse(localStorage.getItem("medications")) || [];
    this.setState({ medications: stored });
  }

  handleRemoveMedication = (index) => {
    const updated = this.state.medications.filter((_, i) => i !== index);
    this.setState({ medications: updated });
    localStorage.setItem("medications", JSON.stringify(updated));
  };

  render() {
    const { medications } = this.state;

    return (
      <div className="w-[19.438rem] border border-[#C4C9D3] py-[0.5rem] rounded-[4px]">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex justify-between px-[1rem] py-[0.5rem] border-b border-[#C4C9D3]">
            <div className="flex gap-[1rem] items-center">
              <img
                className="size-[1.5rem] gap-[1rem] items-center"
                src={MedicationIcon}
                alt="Allergy Icon"
              />
              <div className="font-[500] font-manrope text-[1.25rem]">
                Medications
              </div>
            </div>
            <Link to="/dashboard/patients/medication">
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

          <div className="px-[1rem] flex flex-col gap-[1rem]">
            {medications.map((med, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex flex-col gap-[0.5rem]">
                  <div className="flex gap-[1rem]">
                    <div className="font-[400] font-manrope text-[1rem]">
                      {med.name}
                    </div>
                  </div>
                </div>
                <img
                  className="size-[2rem] cursor-pointer"
                  src={TrashIcon}
                  alt="Trash Icon"
                  onClick={() => this.handleRemoveMedication(index)}
                />
              </div>
            ))}

            {/* If no meds yet, show fallback */}
            {medications.length === 0 && (
              <div className="text-gray-400 text-sm">
                No medications added yet.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MedicationHome;
