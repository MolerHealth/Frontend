import React, { Component } from "react";
import { Link } from "react-router-dom";
import CancelIcon from "../../../../../Assets/SVG/CancelIcon.svg";
import MedicalConditionAddCondition from "./MedicalConditionAddCondition";

class MedicalConditionNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Each condition: { name, dateDiagnosed, severity, symptoms }
      conditions: [],
      newConditionName: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ newConditionName: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmed = this.state.newConditionName.trim();
      if (!trimmed) return;

      // Build an object with blank fields for severity, symptoms, etc.
      const newCond = {
        name: trimmed,
        dateDiagnosed: "",
        severity: "",
        symptoms: "",
      };

      this.setState({
        conditions: [...this.state.conditions, newCond],
        newConditionName: "",
      });
    }
  };

  /**
   * This gets called from <MedicalConditionAddCondition>
   * whenever user changes "Date Diagnosed," "Severity," etc.
   */
  handleUpdateConditions = (updated) => {
    this.setState({ conditions: updated });
  };

  handleSaveAndExit = () => {
    const { conditions } = this.state;

    // If you want to merge with existing localStorage
    const existing =
      JSON.parse(localStorage.getItem("medicalConditions")) || [];
    const updated = [...existing, ...conditions];

    localStorage.setItem("medicalConditions", JSON.stringify(updated));

    // e.g. navigate away or close
    // this.props.history.push("/dashboard/patients");
    window.location.href = "#/dashboard/patients";
  };

  handleCancel = () => {
    window.location.href = "#/dashboard/patients";
  };
  render() {
    const { conditions, newConditionName } = this.state;

    return (
      <div className="flex w-full h-screen px-[4rem] py-[2rem] bg-black bg-opacity-40 justify-center">
        <div className="relative w-full max-w-[1200px] max-h-full bg-[#FFFFFF] rounded-[8px] shadow-lg box-border">
          {/* Header */}
          <div className="h-fit pb-[2rem] w-full">
            <div className="flex flex-col w-full z-20 gap-[1rem]">
              <div className="flex bg-[#4169E1] h-[4.25rem] justify-between items-center px-[2rem]">
                <div className="flex gap-[4rem] text-white font-manrope font-[500] text-[1.5rem]">
                  <div className="font-[600]">Daniel George</div>
                  <div className="flex gap-[0.2rem]">
                    <div>Hospital ID:</div>
                    <div>122530</div>
                  </div>
                  <div className="flex gap-[0.2rem]">
                    <div>Sex:</div>
                    <div>Male</div>
                  </div>
                </div>
                <Link to="/dashboard/patients">
                  <img
                    className="size-[2rem]"
                    src={CancelIcon}
                    alt="Cancel Icon"
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="px-[2rem]">
                <div className="font-[600] font-manrope text-[2.25rem]">
                  Add New Medical Conditions
                </div>
                <div className="font-[400] font-manrope text-[#333333] text-[1.5rem]">
                  press “tab” if you cannot find the medical condition on the
                  list
                </div>
              </div>

              {/* Input Field */}
              <div className="flex w-full h-[3.25rem] px-[2rem]">
                <input
                  className="text-[#667085] font-[600] font-manrope text-[1.25rem] px-[1rem] w-full rounded-[3px] border border-[#E5E5E5] focus:border-[#4169E1] outline-none"
                  placeholder="Select one or type here"
                  value={newConditionName}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleKeyDown}
                />
              </div>

              {/* Tags */}
              {conditions.length > 0 && (
                <div className="flex px-[2rem] gap-[2rem] py-[1rem] flex-wrap">
                  {conditions.map((cond, idx) => (
                    <div
                      key={idx}
                      className="bg-[#EFEFF4] text-[1rem] text-[#667085] font-[400] font-manrope px-[1rem] py-[0.5rem] rounded-[33px]"
                    >
                      {cond.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Body: pass conditions to MedicalConditionAddCondition */}
          <div className="h-[20rem] overflow-auto px-[2rem]">
            <MedicalConditionAddCondition
              conditions={conditions}
              onUpdateConditions={this.handleUpdateConditions}
            />
          </div>

          {/* Footer */}
          <div className="absolute h-[8rem] bottom-0 py-[2rem] w-full flex justify-center gap-[1rem] bg-white">
            <button
              onClick={this.handleCancel}
              className="border border-[#4169E1] px-[1rem] py-[0.5rem] font-[600] font-manrope text-[#667085] text-[2rem] rounded-[42px]"
            >
              Cancel
            </button>
            <button
              onClick={this.handleSaveAndExit}
              className="px-[1rem] py-[0.5rem] font-[600] font-manrope text-[#667085] text-[2rem] bg-[#E5E5E5] rounded-[42px]"
            >
              Save & Exit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicalConditionNew;
