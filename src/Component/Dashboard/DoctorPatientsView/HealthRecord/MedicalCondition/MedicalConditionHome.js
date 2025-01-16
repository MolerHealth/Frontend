import React, { Component } from "react";
import MedicalCondition from "../../../../../Assets/SVG/MedicalConditionSVG.svg";
import AddBotton from "../../../../../Assets/SVG/AddBotton.svg";
import TrashIcon from "../../../../../Assets/SVG/TrashIcon.svg";
import { Link } from "react-router-dom";

class MedicalConditionHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditions: [],
    };
  }

  componentDidMount() {
    // Read from localStorage on load
    const stored = JSON.parse(localStorage.getItem("medicalConditions")) || [];
    this.setState({ conditions: stored });
  }

  handleRemoveCondition = (index) => {
    const updated = this.state.conditions.filter((_, i) => i !== index);
    this.setState({ conditions: updated });
    localStorage.setItem("medicalConditions", JSON.stringify(updated));
  };

  render() {
    const { conditions } = this.state;

    return (
      <div className="w-[19.438rem] border border-[#C4C9D3] py-[0.5rem] rounded-[4px]">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex justify-between px-[1rem] py-[0.5rem] border-b border-[#C4C9D3]">
            <div className="flex gap-[1rem] items-center">
              <img
                className="size-[1.5rem] gap-[1rem] items-center"
                src={MedicalCondition}
                alt="Allergy Icon"
              />
              <div className="font-[500] font-manrope text-[1.25rem]">
                Med Conditions
              </div>
            </div>
            <Link to="/dashboard/patients/medical-condition">
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
            {conditions.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex flex-col gap-[0.5rem]">
                  <div className="flex gap-[1rem]">
                    <div className="font-[400] font-manrope text-[1rem]">
                      {item.name}
                    </div>
                  </div>
                  {/* If you want to show details: Date Diagnosed, Severity, Symptoms */}
                  <div className="font-[400] font-manrope text-[0.9rem] text-[#667085]">
                    {item.dateDiagnosed && (
                      <div>Date Diagnosed: {item.dateDiagnosed}</div>
                    )}
                    {item.severity && <div>Severity: {item.severity}</div>}
                    {item.symptoms && <div>Symptoms: {item.symptoms}</div>}
                  </div>
                </div>
                <img
                  className="size-[2rem] cursor-pointer"
                  src={TrashIcon}
                  alt="Trash Icon"
                  onClick={() => this.handleRemoveCondition(index)}
                />
              </div>
            ))}

            {conditions.length === 0 && (
              <div className="text-gray-400 text-sm">
                No medical conditions found.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MedicalConditionHome;
