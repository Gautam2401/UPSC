import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    // Simulate bot reply
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: "bot", text: "Sorry, I am a demo bot. Please contact support for real queries." }
      ]);
    }, 800);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 999,
          background: "#23376d",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 56,
          height: 56,
          fontSize: 28,
          boxShadow: "0 4px 16px #23376d33",
          cursor: "pointer"
        }}
        aria-label="Open chatbot"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{
          position: "fixed",
          bottom: 96,
          right: 28,
          width: 320,
          maxWidth: "95vw",
          height: 420,
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 8px 32px #23376d33",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000
        }}>
          <div style={{
            background: "#23376d",
            color: "#fff",
            padding: "14px 18px",
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            fontWeight: 700,
            fontSize: "1.13rem"
          }}>
            UPSC Chatbot
            <button
              onClick={() => setOpen(false)}
              style={{
                float: "right",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 20,
                cursor: "pointer"
              }}
              aria-label="Close chatbot"
            >×</button>
          </div>
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "14px 10px",
            background: "#f7f9fc"
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                margin: "8px 0",
                textAlign: msg.from === "user" ? "right" : "left"
              }}>
                <span style={{
                  display: "inline-block",
                  background: msg.from === "user" ? "#e3eaf7" : "#23376d",
                  color: msg.from === "user" ? "#23376d" : "#fff",
                  borderRadius: 12,
                  padding: "8px 13px",
                  maxWidth: "80%",
                  fontSize: ".99rem"
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div style={{
            display: "flex",
            borderTop: "1px solid #e3eaf2",
            padding: "8px"
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Type your message…"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "1rem",
                padding: "8px 10px",
                borderRadius: 8,
                background: "#f3f6fa"
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: "#23376d",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                marginLeft: 8,
                padding: "8px 16px",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >Send</button>
          </div>
        </div>
      )}
    </>
  );
}
