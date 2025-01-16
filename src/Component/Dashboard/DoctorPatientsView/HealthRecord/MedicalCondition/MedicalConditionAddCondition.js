import React, { Component } from "react";
import ChevronDownIcon from "../../../../../Assets/SVG/ChevronDownSVG.svg";

class MedicalConditionAddCondition extends Component {
  // Date Diagnosed
  handleDateDiagnosedChange = (index, e) => {
    const updated = [...this.props.conditions];
    updated[index].dateDiagnosed = e.target.value;
    this.props.onUpdateConditions(updated);
  };

  // Severity
  handleSeverityChange = (index, e) => {
    const updated = [...this.props.conditions];
    updated[index].severity = e.target.value;
    this.props.onUpdateConditions(updated);
  };

  // Symptoms
  handleSymptomsChange = (index, e) => {
    const updated = [...this.props.conditions];
    updated[index].symptoms = e.target.value;
    this.props.onUpdateConditions(updated);
  };

  // Delete
  handleRemove = (index) => {
    const updated = this.props.conditions.filter((_, i) => i !== index);
    this.props.onUpdateConditions(updated);
  };

  render() {
    const { conditions } = this.props;

    // If none
    if (!conditions || conditions.length === 0) {
      return (
        <div className="h-full py-[1rem] px-[2rem] overflow-auto ">
          <div className="font-[600] font-manrope text-[1.5rem] text-[#333333]">
            No conditions yet. Add one above!
          </div>
        </div>
      );
    }

    return (
      <div className="h-full py-[1rem] px-[2rem] overflow-auto ">
        {conditions.map((cond, index) => (
          <div key={index} className="flex flex-col gap-[0.1rem] mb-[1rem]">
            {/* Top Row: Condition Name + Delete */}
            <div className="flex gap-[1rem] items-center">
              <div className="font-[600] font-manrope text-[2rem] text-[#333333]">
                {cond.name}
              </div>
              <button
                className="font-[600] font-manrope tex-[1.25rem] text-[#FF0000]"
                onClick={() => this.handleRemove(index)}
              >
                Delete
              </button>
            </div>

            <div className="font-[600] font-manrope text-[#667085] text-[1.25rem]">
              Reactions
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-[2rem] w-full h-auto py-[1rem]">
              <div className="flex justify-between w-full">
                {/* Date Diagnosed */}
                <div className="flex w-[30%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Date Diagosed</div>
                    <input
                      className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                      placeholder="Enter date"
                      value={cond.dateDiagnosed || ""}
                      onChange={(e) => this.handleDateDiagnosedChange(index, e)}
                    />
                  </div>
                </div>

                {/* Severity */}
                <div className="flex w-[30%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Severity</div>
                    <input
                      className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                      placeholder="e.g. Mild, Moderate, Severe"
                      value={cond.severity || ""}
                      onChange={(e) => this.handleSeverityChange(index, e)}
                    />
                  </div>
                </div>

                {/* Symptoms */}
                <div className="flex w-[30%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Symptoms</div>
                    <input
                      className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                      placeholder="e.g. Redness, Pain"
                      value={cond.symptoms || ""}
                      onChange={(e) => this.handleSymptomsChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* If you have more fields, replicate the same pattern here */}
          </div>
        ))}
      </div>
    );
  }
}

export default MedicalConditionAddCondition;
