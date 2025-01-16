import React, { Component } from "react";

class FamilyHistoryAddHistory extends Component {
  handleStatusChange = (index, status) => {
    const updated = [...this.props.relatives];
    updated[index].alive = status;

    // If switching to "alive," clear out ageAtDeath & causeOfDeath
    if (status === "alive") {
      updated[index].ageAtDeath = "";
      updated[index].causeOfDeath = "";
    }

    this.props.onUpdateRelatives(updated);
  };

  handleAgeChange = (index, e) => {
    const updated = [...this.props.relatives];
    updated[index].ageAtDeath = e.target.value;
    this.props.onUpdateRelatives(updated);
  };

  handleCauseChange = (index, e) => {
    const updated = [...this.props.relatives];
    updated[index].causeOfDeath = e.target.value;
    this.props.onUpdateRelatives(updated);
  };

  handleRemoveRelative = (index) => {
    const updated = this.props.relatives.filter((_, i) => i !== index);
    this.props.onUpdateRelatives(updated);
  };

  render() {
    const { relatives } = this.props;

    if (!relatives || relatives.length === 0) {
      return (
        <div className="h-full py-[1rem] px-[2rem] overflow-auto ">
          <div className="flex flex-col gap-[0.1rem]">
            <div className="font-[600] font-manrope text-[1.5rem] text-[#333333]">
              No relatives added yet.
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full py-[1rem] px-[2rem] overflow-auto">
        {relatives.map((person, index) => (
          <div key={index} className="flex flex-col gap-[0.1rem] mb-[1rem]">
            {/* Name + Remove */}
            <div className="flex gap-[1rem] items-center">
              <div className="font-[600] font-manrope text-[2rem] text-[#333333]">
                {person.name}
              </div>
              <button
                className="font-[600] font-manrope tex-[1.25rem] text-[#FF0000]"
                onClick={() => this.handleRemoveRelative(index)}
              >
                Delete
              </button>
            </div>

            <div className="font-[600] font-manrope text-[#667085] text-[1.25rem]">
              Is this relative alive or deceased?
            </div>

            {/* Alive or Deceased */}
            <div className="flex gap-[1rem] items-center mb-[1rem]">
              <button
                className={`${
                  person.alive === "alive"
                    ? "bg-[#4169E1] text-white"
                    : "border border-[#4169E1] text-[#4169E1]"
                } px-[1rem] py-[0.5rem] rounded`}
                onClick={() => this.handleStatusChange(index, "alive")}
              >
                Alive
              </button>
              <button
                className={`${
                  person.alive === "deceased"
                    ? "bg-[#4169E1] text-white"
                    : "border border-[#4169E1] text-[#4169E1]"
                } px-[1rem] py-[0.5rem] rounded`}
                onClick={() => this.handleStatusChange(index, "deceased")}
              >
                Deceased
              </button>
            </div>

            {/* If Deceased, show Age + Cause */}
            {person.alive === "deceased" && (
              <div className="flex flex-col gap-[2rem] w-full h-auto py-[1rem]">
                <div className="flex justify-between w-full">
                  <div className="flex w-[45%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                    <div className="flex flex-col w-full gap-[0.5rem]">
                      <div className="font-manrope">
                        How old was this relative?
                      </div>
                      <input
                        className="border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                        placeholder="e.g. 85"
                        value={person.ageAtDeath}
                        onChange={this.handleAgeChange.bind(this, index)}
                      />
                    </div>
                  </div>
                  <div className="flex w-[45%] flex-col gap-[1rem] font-[400] font-inter text-[1.5rem]">
                    <div className="flex flex-col w-full gap-[0.5rem]">
                      <div className="font-manrope">Cause of death?</div>
                      <input
                        className="border px-[0.5rem] py-[0.5rem] border-[#CDD1DA] focus:border-[#4169E1] outline-none"
                        placeholder="e.g. Heart Attack"
                        value={person.causeOfDeath}
                        onChange={this.handleCauseChange.bind(this, index)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="border-b border-[#E5E5E5] mt-[1rem]" />
          </div>
        ))}
      </div>
    );
  }
}

export default FamilyHistoryAddHistory;
