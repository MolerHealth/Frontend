import React, { Component } from "react";
import ChevronDownIcon from "../../../../../Assets/SVG/ChevronDownSVG.svg";

class MedicationAddMedicine extends Component {
  // Handle each field change:

  handleStrengthChange = (index, e) => {
    const updated = [...this.props.medications];
    updated[index].strength = e.target.value;
    this.props.onUpdateMedications(updated);
  };

  handleConsumptionTypeChange = (index, val) => {
    const updated = [...this.props.medications];
    updated[index].consumptionType = val;
    this.props.onUpdateMedications(updated);
  };

  handleTimeFrameChange = (index, e) => {
    const updated = [...this.props.medications];
    updated[index].timeFrame = e.target.value;
    this.props.onUpdateMedications(updated);
  };

  handleQuantityChange = (index, e) => {
    const updated = [...this.props.medications];
    updated[index].quantityPerDosage = e.target.value;
    this.props.onUpdateMedications(updated);
  };

  handleSecondTimeFrameChange = (index, e) => {
    const updated = [...this.props.medications];
    updated[index].secondTimeFrame = e.target.value;
    this.props.onUpdateMedications(updated);
  };

  handleDosageToggle = (index, dosageOption) => {
    // dosageOption: "asNeeded" or "asScheduled"
    const updated = [...this.props.medications];
    updated[index].dosage = dosageOption;
    this.props.onUpdateMedications(updated);
  };

  handleDoseSchedulesChange = (index, e) => {
    const updated = [...this.props.medications];
    updated[index].doseSchedules = e.target.value;
    this.props.onUpdateMedications(updated);
  };

  handleRemoveMedication = (index) => {
    const updated = this.props.medications.filter((_, i) => i !== index);
    this.props.onUpdateMedications(updated);
  };

  render() {
    const { medications } = this.props;

    if (!medications || medications.length === 0) {
      return (
        <div className="h-full py-[1rem] px-[2rem] overflow-auto ">
          <div className="flex flex-col gap-[0.1rem]">
            <div className="font-[600] font-manrope text-[2rem] text-[#333333]">
              No medications yet. Add one above!
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full py-[1rem] px-[2rem] overflow-auto ">
        {/* Map over each medication */}
        {medications.map((med, index) => (
          <div key={index} className="flex flex-col gap-[0.1rem] mb-[2rem]">
            {/* Header row: med name + delete */}
            <div className="flex gap-[1rem] items-center">
              <div className="font-[600] font-manrope text-[2rem] text-[#333333]">
                {med.name}
              </div>
              <button
                className="font-[600] font-manrope tex-[1.25rem] text-[#FF0000]"
                onClick={() => this.handleRemoveMedication(index)}
              >
                Delete
              </button>
            </div>

            <div className="font-[600] font-manrope text-[#667085] text-[1.25rem]">
              Reactions
            </div>

            {/* Fields layout exactly as your snippet */}
            <div className="flex flex-col gap-[2rem] w-full h-auto py-[1rem]">
              <div className="flex justify-between w-full">
                <div className="flex w-[30%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Strength</div>
                    <input
                      className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                      placeholder="Enter dosage strength"
                      value={med.strength || ""}
                      onChange={(e) => this.handleStrengthChange(index, e)}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-[30%] gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Consumption type</div>
                    {/* A simple dropdown or clickable area */}
                    <div
                      className="flex w-full px-[1rem] py-[0.6rem] justify-between items-center border border-[#CDD1DA] hover:border-[#4169E1] outline-none cursor-pointer"
                      onClick={() =>
                        // For simplicity, let’s just toggle between "Oral" or "IV"
                        this.handleConsumptionTypeChange(
                          index,
                          med.consumptionType === "Oral" ? "IV" : "Oral"
                        )
                      }
                    >
                      <div className="font-[400] font-manrope text-[1.25rem]">
                        {med.consumptionType
                          ? med.consumptionType
                          : "Select consumption type"}
                      </div>
                      <img
                        className="size-[2rem] px-[0.5rem]"
                        src={ChevronDownIcon}
                        alt="Chevron Icon"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex w-[30%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Time frame</div>
                    <input
                      className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                      placeholder="Input months or days"
                      value={med.timeFrame || ""}
                      onChange={(e) => this.handleTimeFrameChange(index, e)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between w-full">
                <div className="flex w-[40%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Quantity Per Dosage</div>
                    <input
                      className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                      placeholder="Enter dosage strength"
                      value={med.quantityPerDosage || ""}
                      onChange={(e) => this.handleQuantityChange(index, e)}
                    />
                  </div>
                </div>

                <div className="flex w-[40%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Time frame</div>
                    <input
                      className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                      placeholder="Input months or days"
                      value={med.secondTimeFrame || ""}
                      onChange={(e) =>
                        this.handleSecondTimeFrameChange(index, e)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between w-full">
                <div className="flex w-[40%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Dosage</div>
                    <div className="flex w-full">
                      {/* Toggle "As Needed" or "As Scheduled" */}
                      <button
                        className={`w-[50%] py-[0.5rem] ${
                          med.dosage === "asNeeded"
                            ? "text-white bg-[#4169E1]"
                            : "text-[#4169E1] border border-[#4169E1]"
                        }`}
                        onClick={() =>
                          this.handleDosageToggle(index, "asNeeded")
                        }
                      >
                        As Needed
                      </button>
                      <button
                        className={`w-[50%] py-[0.5rem] ${
                          med.dosage === "asScheduled"
                            ? "text-white bg-[#4169E1]"
                            : "text-[#4169E1] border border-[#4169E1]"
                        }`}
                        onClick={() =>
                          this.handleDosageToggle(index, "asScheduled")
                        }
                      >
                        As Scheduled
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex w-[40%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                  <div className="flex gap-[1rem] flex-col w-full justify-between">
                    <div className="font-manrope">Dose Schedules</div>
                    <input
                      className="w-full border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                      placeholder="Write intervals"
                      value={med.doseSchedules || ""}
                      onChange={(e) => this.handleDoseSchedulesChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End of fields for this medication */}
          </div>
        ))}
      </div>
    );
  }
}

export default MedicationAddMedicine;
