import React, { Component } from "react";
import { Link } from "react-router-dom";
import CancelIcon from "../../../../../Assets/SVG/CancelIcon.svg";
import AllergiesAddSymptoms from "./AllergiesAddSymptoms";

class AllergiesNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // An array of allergen objects: { name: string, reactions: string[] }
      allergies: [],

      // For typing a new allergen
      newAllergyName: "",
    };
  }

  /**
   * When user presses Enter in the allergen input field,
   * create a new allergen (with empty reactions) and add it to state.
   */
  handleAllergenKeyDown = (event) => {
    if (event.key === "Enter") {
      const trimmed = this.state.newAllergyName.trim();
      if (!trimmed) return; // do nothing if empty

      const newAllergen = { name: trimmed, reactions: [] };
      this.setState({
        allergies: [...this.state.allergies, newAllergen],
        newAllergyName: "",
      });
    }
  };

  handleAllergenInputChange = (event) => {
    this.setState({ newAllergyName: event.target.value });
  };

  /**
   * This is a callback that <AllergiesAddSymptoms> will call
   * whenever it adds or removes a reaction for a particular allergen.
   * 'updatedAllergies' is the entire updated array of allergens.
   */
  handleUpdateAllergies = (updatedAllergies) => {
    this.setState({ allergies: updatedAllergies });
  };

  handleSaveAndExit = () => {
    // 1. Grab the array of allergies in the component’s state
    const { allergies } = this.state;

    // 2. Fetch existing data from localStorage (if any)
    const existingData = JSON.parse(localStorage.getItem("allergies")) || [];

    // 3. Merge or combine the arrays
    //    (If you only want to overwrite, you can skip merging)
    const updatedData = [...existingData, ...allergies];

    // 4. Convert to JSON and store in localStorage
    localStorage.setItem("allergies", JSON.stringify(updatedData));

    // 5. Navigate away, close modal, or do whatever
    // this.props.history.push("/dashboard/patients");
    window.location.href = "#/dashboard/patients";
  };

  handleCancel = () => {
    window.location.href = "#/dashboard/patients";
  };

  render() {
    const { allergies, newAllergyName } = this.state;

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
                  Add New Allergies
                </div>
                <div className="font-[400] font-manrope text-[#333333] text-[1.5rem]">
                  Type an allergen name and press Enter to add it.
                </div>
              </div>

              {/* Allergen input */}
              <div className="flex w-full h-[3.25rem] px-[2rem]">
                <input
                  className="text-[#667085] font-[600] font-manrope text-[1.25rem] px-[1rem] w-full rounded-[3px] border border-[#E5E5E5] focus:border-[#4169E1] outline-none"
                  placeholder="e.g. Milk"
                  value={newAllergyName}
                  onChange={this.handleAllergenInputChange}
                  onKeyDown={this.handleAllergenKeyDown}
                />
              </div>

              {/* Allergy Tags (preview) */}
              {allergies.length > 0 && (
                <div className="flex px-[2rem] gap-[1rem] py-[1rem] flex-wrap">
                  {allergies.map((a, idx) => (
                    <div
                      key={idx}
                      className="bg-[#EFEFF4] text-[1rem] text-[#667085] font-[400] font-manrope px-[1rem] py-[0.5rem] rounded-[33px]"
                    >
                      {a.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Allergy Symptoms Section */}
          <div className="h-[20rem] overflow-auto px-[2rem]">
            {/**
             * Pass the 'allergies' array down to <AllergiesAddSymptoms>,
             * along with a callback to update it.
             */}
            <AllergiesAddSymptoms
              allergies={allergies}
              onUpdateAllergies={this.handleUpdateAllergies}
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

export default AllergiesNew;
