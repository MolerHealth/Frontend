import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"; // Import useLocation
import SideNavBar from "../Dashboard/Navbars/SideNavBar/SideNavBar";
import Void from "../Dashboard/Void/Void";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";

export function ChatArea() {
  const [selectedChatId, setSelectedChatId] = useState(null); // State for selected chat ID

  // useEffect(() => {
  //   const storedChatId = localStorage.getItem("selectedChatId"); // Retrieve from local storage
  //   if (storedChatId) {
  //     setSelectedChatId(storedChatId); // Set state if there's a stored chat ID
  //   }
  // }, []);

  const handleSelectChat = (chatId) => {
    // localStorage.setItem("selectedChatId", chatId); // Store in local storage
    setSelectedChatId(chatId); // Update state with new chat ID
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <div className="flex bg-backgroundGrey min-w-screen min-h-screen ">
              <Void />
              <div className="relative flex w-full m-4 bg-white rounded-xl shadow-md ">
                <ChatList onSelectChat={handleSelectChat} /> {/* Pass function to set chat ID */}
                <div className="flex-grow">
                  {selectedChatId && <ChatBox chatId={selectedChatId} />} {/* Render ChatBox if a chat is selected */}
                </div>
              </div>
              <SideNavBar />
            </div>
          </div>
        }
      />
    </Routes>
  );
}
