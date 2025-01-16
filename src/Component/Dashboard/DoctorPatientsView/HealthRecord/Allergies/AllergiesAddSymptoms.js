import React, { Component } from "react";

class AllergiesAddSymptoms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // We'll store temporary inputs for each allergen
      // e.g. { 0: "Hives", 1: "Rashes", ... } keyed by allergen index
      reactionInputs: {},
    };
  }

  /**
   * Handle text changes for a reaction input
   * e.g. if user is editing allergenIndex=0, reactionInputs[0] = "Hives"
   */
  handleReactionChange = (allergenIndex, event) => {
    const { reactionInputs } = this.state;
    this.setState({
      reactionInputs: {
        ...reactionInputs,
        [allergenIndex]: event.target.value,
      },
    });
  };

  /**
   * On pressing Enter in the reaction input:
   * 1. Pull the text from reactionInputs[allergenIndex].
   * 2. Append it to that allergen's "reactions" array in parent's state.
   * 3. Clear that input field.
   */
  handleReactionKeyDown = (allergenIndex, event) => {
    if (event.key === "Enter") {
      const reactionText =
        this.state.reactionInputs[allergenIndex]?.trim() || "";
      if (!reactionText) return;

      // Make a copy of the parent's allergies array
      const updatedAllergies = [...this.props.allergies];

      // Append the new reaction to the correct allergen
      updatedAllergies[allergenIndex].reactions.push(reactionText);

      // Notify parent that allergies have changed
      this.props.onUpdateAllergies(updatedAllergies);

      // Clear this input from local state
      this.setState((prevState) => ({
        reactionInputs: {
          ...prevState.reactionInputs,
          [allergenIndex]: "",
        },
      }));
    }
  };

  /**
   * If we want a "Delete" button for each reaction
   */
  handleRemoveReaction = (allergenIndex, reactionIndex) => {
    const updatedAllergies = [...this.props.allergies];
    updatedAllergies[allergenIndex].reactions.splice(reactionIndex, 1);
    this.props.onUpdateAllergies(updatedAllergies);
  };

  /**
   * If we want to remove the entire allergen from the parent's list
   */
  handleRemoveAllergen = (allergenIndex) => {
    const updatedAllergies = this.props.allergies.filter(
      (_, i) => i !== allergenIndex
    );
    this.props.onUpdateAllergies(updatedAllergies);
  };

  render() {
    const { allergies } = this.props;
    const { reactionInputs } = this.state;

    if (!allergies || allergies.length === 0) {
      return (
        <div className="text-center text-gray-500 mt-[1rem]">
          No allergens yet. Add one above!
        </div>
      );
    }

    return (
      <div className="h-full py-[1rem] px-[2rem] overflow-auto">
        {allergies.map((allergen, allergenIndex) => (
          <div
            key={allergenIndex}
            className="flex flex-col gap-[1rem] mb-[1rem]"
          >
            {/* Allergen Header */}
            <div className="flex items-center justify-between">
              <div className="font-[600] font-manrope text-[2rem] text-[#333333]">
                {allergen.name}
              </div>
              <button
                className="font-[600] font-manrope text-[1rem] text-[#FF0000]"
                onClick={() => this.handleRemoveAllergen(allergenIndex)}
              >
                Delete Allergen
              </button>
            </div>

            {/* "Reactions" label */}
            <div className="font-[600] font-manrope text-[#667085] text-[1.25rem]">
              Reactions
            </div>

            {/* Reaction List */}
            <div className="flex flex-col gap-[0.5rem] w-full h-auto">
              {allergen.reactions.map((reaction, rIdx) => (
                <div
                  key={rIdx}
                  className="flex items-center justify-between bg-[#EFEFF4] rounded px-[1rem] py-[0.5rem]"
                >
                  <div className="font-[400] font-inter text-[1rem]">
                    {reaction}
                  </div>
                  <button
                    onClick={() =>
                      this.handleRemoveReaction(allergenIndex, rIdx)
                    }
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Reaction Input for this allergen */}
            <input
              className="border border-[#E5E5E5] px-[1rem] py-[0.5rem] rounded text-[1rem]"
              placeholder="Type a reaction (e.g. 'Hives') and press Enter"
              value={reactionInputs[allergenIndex] || ""}
              onChange={(e) => this.handleReactionChange(allergenIndex, e)}
              onKeyDown={(e) => this.handleReactionKeyDown(allergenIndex, e)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default AllergiesAddSymptoms;
