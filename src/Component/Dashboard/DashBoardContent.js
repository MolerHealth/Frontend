import React from "react";
import { Route, Routes } from "react-router-dom";
import SideNavBar from "./Navbars/SideNavBar/SideNavBar";
import DashBoardPage from "./DashBoardPage/DashBoardPage";
import Void from "./Void/Void";
import DoctorPatientsViewHome from "./DoctorPatientsView/DoctorPatientsViewHome";
import AllergiesNew from "./DoctorPatientsView/HealthRecord/Allergies/AllergiesNew";

export function DashBoardContent() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <div className="flex min-w-screen min-h-screen bg-backgroundGrey overflow-x-scroll ">
              <Void />
              <div className="relative flex w-full h-full">
                <DashBoardPage />
              </div>
              <SideNavBar />
            </div>
          </div>
        }
      />
      <Route
        path="/patients"
        element={
          <div>
            <div className="flex min-w-screen min-h-screen bg-backgroundGrey overflow-x-scroll ">
              <Void />
              <div className="relative flex w-full h-full">
                <DoctorPatientsViewHome />
              </div>
              <SideNavBar />
            </div>
          </div>
        }
      />
      <Route
        path="/patients/allergies"
        element={
          <div>
            <div className="flex min-w-screen min-h-screen bg-backgroundGrey overflow-x-scroll ">
              <Void />
              <div className="relative flex w-full h-full">
                <AllergiesNew />
              </div>
              <SideNavBar />
            </div>
          </div>
        }
      />
    </Routes>
  );
}
