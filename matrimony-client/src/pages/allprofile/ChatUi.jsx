import React, { useRef, useEffect } from "react";

const ChatUi = ({
  setIsChatOpen,
  handleChatSubmit,
  profileData,
  chatMessages,
  newMessage,
  setNewMessage,
}) => {
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  console.log("chatMessages",chatMessages)

  return (
    <div
      className="chatbox active"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "380px",
        height: "500px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid #e1e5e9",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid #f0f0f0",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: "#fafafa",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={profileData.profileImage || "images/profiles/2.jpg"}
            alt=""
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          {/* Online indicator */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "12px",
              height: "12px",
              backgroundColor: "#4CAF50",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h4
            style={{
              margin: "0",
              fontSize: "16px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            {profileData.userName || "User"}
          </h4>
          <span
            style={{
              fontSize: "12px",
              color: "#4CAF50",
              fontWeight: "500",
            }}
          >
            Available online
          </span>
        </div>

        <button
          onClick={() => setIsChatOpen(false)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            color: "#999",
            fontSize: "18px",
          }}
        >
          ✕
        </button>
      </div>

      {/* Messages Area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px",
          backgroundColor: "#f8f9fa",
        }}
      >
        {chatMessages.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#e3f2fd",
                padding: "12px 20px",
                borderRadius: "20px",
                color: "#1976d2",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              Start a new chat!!! now
            </div>
          </div>
        ) : (
          <div>
            {chatMessages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: "12px",
                }}
              >
                {message.sender !== "user" && (
                  <img
                    src={profileData.profileImage || "images/profiles/2.jpg"}
                    alt=""
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: "8px",
                      alignSelf: "flex-end",
                    }}
                  />
                )}

                <div
                  style={{
                    maxWidth: "70%",
                    padding: "10px 14px",
                    borderRadius:
                      message.sender === "user"
                        ? "18px 18px 4px 18px"
                        : "18px 18px 18px 4px",
                    backgroundColor:
                      message.sender === "user" ? "#007bff" : "#ffffff",
                    color: message.sender === "user" ? "white" : "#333",
                    fontSize: "14px",
                    lineHeight: "1.4",
                    boxShadow:
                      message.sender !== "user"
                        ? "0 1px 2px rgba(0,0,0,0.1)"
                        : "none",
                    position: "relative",
                  }}
                >
                  <div>{message.text}</div>
                  <div
                    style={{
                      fontSize: "11px",
                      opacity: 0.7,
                      marginTop: "4px",
                      textAlign: "right",
                    }}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div
        style={{
          padding: "16px",
          borderTop: "1px solid #f0f0f0",
          backgroundColor: "white",
        }}
      >
        <form
          onSubmit={handleChatSubmit}
          style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}
        >
          <input
            type="text"
            name="chat_message"
            placeholder="Type a message here.."
            required
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            style={{
              flex: 1,
              padding: "12px 16px",
              border: "1px solid #e1e5e9",
              borderRadius: "24px",
              outline: "none",
              fontSize: "14px",
              backgroundColor: "#f8f9fa",
              resize: "none",
              minHeight: "24px",
              maxHeight: "80px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "24px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              minWidth: "60px",
              justifyContent: "center",
            }}
          >
            SEND
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ transform: "rotate(-45deg)" }}
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatUi;
