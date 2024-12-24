import React, { useEffect, useState, useRef } from "react";
import api from "../../axiosInstance";
import sendSVG from "../../Assets/SVG/SendSVG.svg";



function ChatBox({ chatId }) {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState(""); // State for the input message
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null);

  // Utility function to format date labels
  const getDateLabel = (dateString) => {
    const messageDate = new Date(dateString);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (messageDate.toDateString() === today.toDateString()) {
      return "Today";
    } else if (messageDate.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      return messageDate.toLocaleDateString([], {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
  };

  // Fetch chat data on component mount
  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await api.get(`messaging/messages/${chatId}/`);
        setUser(response.data.user);
        setChats(response.data.chats);
      } catch (error) {
        console.error("Error fetching chat data:", error);
        setError("Failed to load chat data.");
      } finally {
        setLoading(false);
      }
    };

    fetchChatData();
  }, [chatId]);

  // Scroll to the bottom whenever chats are updated
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  // Handle message sending
  const handleSendMessage = async () => {
    if (!message.trim()) return; // Prevent sending empty messages

    try {
      const newMessage = {
        chat_id: chatId,
        content: message,
      };

      const response = await api.post(`/messaging/messages/send/`, newMessage);

      // Update the state with the new message
      setChats((prevChats) => [
        ...prevChats,
        {
          id: response.data.id, // Assuming the response contains the new message's ID
          message: response.data.content, // Message content
          timestamp: response.data.timestamp, // Timestamp
          sentByMe: true, // Indicate the sender is the current user
        },
      ]);

      // Clear the input field
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Group chats by date
  const groupedChats = chats.reduce((acc, chat) => {
    const dateKey = new Date(chat.timestamp).toDateString();
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(chat);
    return acc;
  }, {});

  return (
    <div className="flex flex-col h-full pb-7 font-inter">
      {/* Header Section */}
      <div className="flex items-center px-4 py-3 border-b">
        <div className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center text-xl font-medium">
          {user.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{user.name}</h2>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        {Object.keys(groupedChats).map((dateKey) => (
          <div key={dateKey}>
            {/* Date Separator */}
            <div className="flex justify-center my-4">
              <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                {getDateLabel(dateKey)}
              </span>
            </div>

            {/* Chats for that date */}
            {groupedChats[dateKey].map((chat) => (
              <div
                key={chat.id}
                className={`flex ${
                  chat.sentByMe ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 mb-3 rounded-lg max-w-xs ${
                    chat.sentByMe
                      ? "bg-backgroundBlue text-black"
                      : "bg-backgroundGrey text-black"
                  }`}
                >
                  <p className="text-sm">{chat.message}</p>
                  <div className="text-xs text-gray-400 mt-1">
                    {new Date(chat.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Section */}
      <div className="flex items-center px-4 py-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring bg-backgroundLightGrey"
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 px-4 py-2 text-white text-sm"
        >
          <img src={sendSVG} alt="Send Icon" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
