import React, { Component } from "react";
import { Link } from "react-router-dom";
import CancelIcon from "../../../../../Assets/SVG/CancelIcon.svg";
import MedicationAddMedicine from "./MedicationAddMedicine";

class MedicationNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Each medication: { name, strength, consumptionType, etc. }
      medications: [],
      newMedName: "",
    };
  }

  handleMedInputChange = (e) => {
    this.setState({ newMedName: e.target.value });
  };

  handleMedKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmed = this.state.newMedName.trim();
      if (!trimmed) return;

      // Build initial object with blank fields for the medication
      const newMedication = {
        name: trimmed,
        strength: "",
        consumptionType: "",
        timeFrame: "",
        quantityPerDosage: "",
        secondTimeFrame: "",
        dosage: "asNeeded", // could be asNeeded or asScheduled
        doseSchedules: "",
      };

      this.setState({
        medications: [...this.state.medications, newMedication],
        newMedName: "",
      });
    }
  };

  // Called by <MedicationAddMedicine> when fields are edited
  handleUpdateMedications = (updatedArray) => {
    this.setState({ medications: updatedArray });
  };

  handleSaveAndExit = () => {
    const { medications } = this.state;
    const existing = JSON.parse(localStorage.getItem("medications")) || [];
    const merged = [...existing, ...medications];
    localStorage.setItem("medications", JSON.stringify(merged));

    // Example: navigate away
    // this.props.history.push("/dashboard/patients");
    window.location.href = "#/dashboard/patients";
  };

  handleCancel = () => {
    window.location.href = "#/dashboard/patients";
  };

  render() {
    const { medications, newMedName } = this.state;

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
                  Add New Medications
                </div>
                <div className="font-[400] font-manrope text-[#333333] text-[1.5rem]">
                  Press “Enter” if you cannot find the medication on the list
                </div>
              </div>

              {/* Input for new medication */}
              <div className="flex w-full h-[3.25rem] px-[2rem]">
                <input
                  className="text-[#667085] font-[600] font-manrope text-[1.25rem] px-[1rem] w-full rounded-[3px] border border-[#E5E5E5] focus:border-[#4169E1] outline-none"
                  placeholder="Type a medication name & press Enter"
                  value={newMedName}
                  onChange={this.handleMedInputChange}
                  onKeyDown={this.handleMedKeyDown}
                />
              </div>

              {/* Tags (medication names) */}
              {medications.length > 0 && (
                <div className="flex px-[2rem] gap-[2rem] py-[1rem] flex-wrap">
                  {medications.map((med, idx) => (
                    <div
                      key={idx}
                      className="bg-[#EFEFF4] text-[1rem] text-[#667085] font-[400] font-manrope px-[1rem] py-[0.5rem] rounded-[33px]"
                    >
                      {med.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Body: pass 'medications' to <MedicationAddMedicine> */}
          <div className="h-[20rem] overflow-auto px-[2rem]">
            <MedicationAddMedicine
              medications={medications}
              onUpdateMedications={this.handleUpdateMedications}
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

export default MedicationNew;
