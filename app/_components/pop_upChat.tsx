"use client";

import { useState, useRef, useEffect } from "react";


type Message = {
  id: string;
  role: "user" | "ai";
  content: string;
};

export default function AIChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "ai", content: "Xin chào! Tôi là AI Support của HCMUT Tutor. Tôi có thể giúp gì cho bạn?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);


  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);


    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: "Cảm ơn bạn đã đặt câu hỏi. Đây là câu trả lời mẫu từ AI.",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
   
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
       
          <div className="bg-blue-900 text-white p-3 flex justify-between items-center">
            <h3 className="font-bold text-sm">AI Support Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300"
            >
              ✕
            </button>
          </div>

      
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-500 text-xs p-2 rounded-lg rounded-bl-none">
                  AI đang nhập...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

    
          <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập câu hỏi..."
              className="flex-1 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
            />
            <button
              onClick={handleSend}
              className="bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}


      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-blue-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-800 transition-transform hover:scale-105"
      >
        {isOpen ? (
           <span className="text-xl font-bold">✕</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}