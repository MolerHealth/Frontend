import React, { Component } from "react";
import DashBoard from "./DashBoard";

class DashBoardPage extends Component {
  render() {
    return (
      <div className="w-full min-h-screen overflow-y-auto">
        <DashBoard />
      </div>
    );
  }
}

export default DashBoardPage;
