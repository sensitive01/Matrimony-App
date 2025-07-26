import React, { useEffect, useState } from "react";
import profile1 from "../assets/images/profiles/1.jpg";
import profile2 from "../assets/images/profiles/2.jpg";
import profile3 from "../assets/images/profiles/3.jpg";
import user1 from "../assets/images/user/1.jpg";

import UserSideBar from "../components/UserSideBar";
import LayoutComponent from "../components/layouts/LayoutComponent";
import Footer from "../components/Footer";
import CopyRights from "../components/CopyRights";
import ChatUi from "../pages/allprofile/ChatUi";
import {
  getMyChatList,
  getChatMessages,
  sendChatMessage,
} from "../api/axiosService/userAuthService.js";

const UserChatPage = () => {
  const userId = localStorage.getItem("userId");
  const [chatList, setChatList] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        setLoading(true);
        const response = await getMyChatList(userId);
        if (response.status === 200) {
          setChatList(response.data.chatList);
        }
      } catch (error) {
        console.error("Error fetching chat list:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchChatList();
    }
  }, [userId]);

  const handleChatClick = async (chat) => {
    try {
      setMessagesLoading(true);
      setSelectedChat(chat);
      setIsChatOpen(true);

      // Open chatbox
      const chatbox = document.querySelector(".chatbox");
      if (chatbox) {
        chatbox.classList.add("open");
      }

      // Fetch messages for this chat
      const response = await getChatMessages(chat.chatId);
      if (response.status === 200) {
        setMessages(response.data.messages || []);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setMessagesLoading(false);
    }
  };

  const handleCloseChatbox = () => {
    const chatbox = document.querySelector(".chatbox");
    if (chatbox) {
      chatbox.classList.remove("open");
    }
    setSelectedChat(null);
    setMessages([]);
    setIsChatOpen(false);
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedChat) return;

    try {
      // Add optimistic update
      const tempMessage = {
        id: Date.now(), // temporary ID
        senderId: userId,
        sender: "user",
        text: newMessage,
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, tempMessage]);
      await sendChatMessage(userId, tempMessage, profileData.receiverId);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatLastMessageTime = (timestamp) => {
    const now = new Date();
    const messageDate = new Date(timestamp);
    const diffInHours = (now - messageDate) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return formatTime(timestamp);
    } else {
      return messageDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  // Transform messages to match ChatUi expected format
  const transformedMessages = messages.map((msg) => ({
    id: msg.id || msg._id || Date.now() + Math.random(),
    sender: msg.senderId === userId ? "user" : "profile",
    text: msg.message || msg.text,
    timestamp: msg.timestamp
      ? msg.timestamp
      : formatTime(new Date()),
  }));

  // Profile data for ChatUi
  const profileData = selectedChat
    ? {
        userName: selectedChat.participant.name,
        profileImage: selectedChat.participant.profileImage || profile1,
        receiverId: selectedChat.participant._id,
      }
    : {
        userName: "User",
        profileImage: profile1,
      };

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <LayoutComponent />
        </div>
        <div
          className="pt-16 d-flex justify-content-center align-items-center"
          style={{ minHeight: "50vh" }}
        >
          <div>Loading chats...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <LayoutComponent />
      </div>

      <div className="pt-16">
        <div className="db">
          <div className="container">
            <div className="row">
              <UserSideBar />

              <div className="col-md-8 col-lg-9">
                <div className="row">
                  <div className="col-md-12 db-sec-com">
                    <h2 className="db-tit">Chat list</h2>
                    <div className="db-pro-stat">
                      <div className="db-chat">
                        <ul>
                          {chatList.length === 0 ? (
                            <li
                              style={{ textAlign: "center", padding: "20px" }}
                            >
                              No chats available
                            </li>
                          ) : (
                            chatList.map((chat) => (
                              <li
                                key={chat.chatId}
                                className="db-chat-trig"
                                onClick={() => handleChatClick(chat)}
                                style={{ cursor: "pointer" }}
                              >
                                <div className="db-chat-pro">
                                  <img
                                    src={
                                      chat.participant.profileImage || profile1
                                    }
                                    alt={chat.participant.name}
                                    onError={(e) => {
                                      e.target.src = profile1; // Fallback image
                                    }}
                                  />
                                </div>
                                <div className="db-chat-bio">
                                  <h5>{chat.participant.name}</h5>
                                  <span>{chat.lastMessage.message}</span>
                                </div>
                                <div className="db-chat-info">
                                  <div className="time">
                                    <span className="timer">
                                      {formatLastMessageTime(
                                        chat.lastMessage.timestamp
                                      )}
                                    </span>
                                    {/* You can add unread count here if available in your API */}
                                    {/* <span className="cont">3</span> */}
                                  </div>
                                </div>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CopyRights />

      {/* ChatUi with proper props */}
      {isChatOpen && selectedChat && (
        <ChatUi
          setIsChatOpen={setIsChatOpen}
          handleChatSubmit={handleChatSubmit}
          profileData={profileData}
          chatMessages={transformedMessages}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
        />
      )}
    </div>
  );
};

export default UserChatPage;
