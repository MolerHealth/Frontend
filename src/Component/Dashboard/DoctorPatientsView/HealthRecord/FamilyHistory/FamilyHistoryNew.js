import React, { Component } from "react";
import { Link } from "react-router-dom";
import CancelIcon from "../../../../../Assets/SVG/CancelIcon.svg";
import FamilyHistoryAddHistory from "./FamilyHistoryAddHistory";

class FamilyHistoryNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatives: [], // e.g. [{ name: 'Grandfather', alive: '', ageAtDeath: '', causeOfDeath: '' }, ...]
      newRelativeName: "",
    };
  }

  handleRelativeInputChange = (e) => {
    this.setState({ newRelativeName: e.target.value });
  };

  handleRelativeKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmed = this.state.newRelativeName.trim();
      if (!trimmed) return;

      // Create an object with default fields
      const newPerson = {
        name: trimmed,
        alive: "",
        ageAtDeath: "",
        causeOfDeath: "",
      };

      this.setState({
        relatives: [...this.state.relatives, newPerson],
        newRelativeName: "",
      });
    }
  };

  /**
   * Called by <FamilyHistoryAddHistory> whenever user updates
   * alive/deceased, ageAtDeath, causeOfDeath, etc.
   */
  handleUpdateRelatives = (updatedRelatives) => {
    this.setState({ relatives: updatedRelatives });
  };

  /**
   * Merge our newly added relatives into localStorage
   */
  handleSaveAndExit = () => {
    const { relatives } = this.state;

    // Read what's in localStorage
    const existing = JSON.parse(localStorage.getItem("familyHistory")) || [];

    // Merge
    const updated = [...existing, ...relatives];

    // Save
    localStorage.setItem("familyHistory", JSON.stringify(updated));

    // Navigate or close
    // this.props.history.push("/dashboard/patients");
    window.location.href = "#/dashboard/patients";
  };

  handleCancel = () => {
    window.location.href = "#/dashboard/patients";
  };

  render() {
    const { relatives, newRelativeName } = this.state;

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
                  Add New Family History
                </div>
                <div className="font-[400] font-manrope text-[#333333] text-[1.5rem]">
                  Press “Enter” if you cannot find the relative on the list
                </div>
              </div>

              {/* Relative Input */}
              <div className="flex w-full h-[3.25rem] px-[2rem]">
                <input
                  className="text-[#667085] font-[600] font-manrope text-[1.25rem] px-[1rem] w-full rounded-[3px] border border-[#E5E5E5] focus:border-[#4169E1] outline-none"
                  placeholder="Type relative name & press Enter"
                  value={newRelativeName}
                  onChange={this.handleRelativeInputChange}
                  onKeyDown={this.handleRelativeKeyDown}
                />
              </div>

              {/* Tags area */}
              {relatives.length > 0 && (
                <div className="flex px-[2rem] gap-[2rem] py-[1rem] flex-wrap">
                  {relatives.map((person, idx) => (
                    <div
                      key={idx}
                      className="bg-[#EFEFF4] text-[1rem] text-[#667085] font-[400] font-manrope px-[1rem] py-[0.5rem] rounded-[33px]"
                    >
                      {person.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Family History Section */}
          <div className="h-[20rem] overflow-auto px-[2rem]">
            <FamilyHistoryAddHistory
              relatives={relatives}
              onUpdateRelatives={this.handleUpdateRelatives}
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

export default FamilyHistoryNew;
