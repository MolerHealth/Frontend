import React, { useEffect, useState } from "react";
import searchSVG from "../../Assets/SVG/searchSVG.svg";
import api from "../../axiosInstance";


const token = "7145db4a6e4db9903f87e06b985c7ae562b7d489"; 
localStorage.setItem("token", token);


// Utility function to format time
const formatTime = (time) => {
  const date = new Date(time);
  const now = new Date();
  
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Check if the date is today
  if (date >= today && date < now) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } 
  // Check if the date is yesterday
  else if (date >= yesterday && date < today) {
    return "Yesterday";
  } 
  // For other days, return the formatted date
  else {
    return date.toLocaleDateString();
  }
};


const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [searchResults, setSearchResults] = useState([]); // Results for the dropdown

  // useEffect(() => {
    // Simulate fetching chat data from an API
  //   const fetchChats = async () => {
  //     const data = [
  //       {
  //         id: 1,
  //         name: "Leslie Micheal",
  //         lastMessage: "Available tomorrow?",
  //         time: "2024-12-18T12:30:00",
  //       },
  //       {
  //         id: 2,
  //         name: "Samuel Kelvin",
  //         lastMessage: "Doctor I have a headache",
  //         time: "2024-12-17T10:15:00",
  //       },
  //       {
  //         id: 3,
  //         name: "Mary Jane",
  //         lastMessage: "Feeling better now",
  //         time: "2024-12-17T18:45:00",
  //       },
  //     ];
  //     setChats(data);
  //   };

  //   fetchChats();
  // }, []);
  useEffect(() => {
    // Fetch chat data from the API
    const fetchChats = async () => {
      try {
        const response = await api.get("messaging/chats/"); // Use the configured Axios instance
        setChats(response.data.chats); // Set chats from API response
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };

    fetchChats();
  }, []);

  useEffect(() => {
    // Filter chats for the dropdown based on search query
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const results = chats.filter((chat) =>
        chat.name.toLowerCase().includes(lowerCaseQuery)
      );
      setSearchResults(results);
    }
  }, [searchQuery, chats]);

  const handleChatClick = (chatId) => {
    // localStorage.setItem("selectedChatId", chatId); // Store in local storage
    onSelectChat(chatId); // Call onSelectChat with chat.id
  };

  return (
    <div className="w-full max-w-sm pl-3 pr-2 border-r font-inter relative">
      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full border-2 border-searchBorder my-4 px-4 py-2 w-full max-w-sm">
        <img src={searchSVG} alt="Search Icon" className="w-5 h-5 mr-2" />
        <input
          type="text"
          className="flex-1 bg-transparent border-none outline-none text-gray-700 text-sm placeholder-gray-400"
          placeholder="Search for Patient"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input
        />
      </div>

      {/* Dropdown for Search Results */}
      {searchResults.length > 0 && (
        <div className="absolute top-16 left-0 bg-white border border-gray-300 rounded-md shadow-md w-full max-w-sm z-10">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="flex items-center justify-between px-4 py-3 border-b border-gray-200 last:border-none hover:bg-chathoverGrey cursor-pointer"
              onClick={() => handleChatClick(result.id)}
            >
              <div className="flex items-center space-x-3">
                {/* User Avatar Placeholder */}
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                  {result.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {result.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate max-w-[13rem]">
                    {result.lastMessage}
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">
                {formatTime(result.time)}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Chat List */}
      <div className="mt-8">
        {chats.map((chat) => (
          <div
          key={chat.id}
          className="flex items-center justify-between font-inter px-4 py-3 border-b border-gray-200 last:border-none hover:bg-chathoverGrey cursor-pointer"
          onClick={() => handleChatClick(chat.id)}
          >
            <div className="flex items-center space-x-3">
              {/* User Avatar Placeholder */}
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                {chat.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {chat.name}
                </p>
                <p className="text-xs text-gray-500 truncate max-w-[13rem]">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{formatTime(chat.time)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
