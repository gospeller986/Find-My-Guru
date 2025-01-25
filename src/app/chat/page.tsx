"use client";

import { IconButton } from "@mui/material";
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import userAvatar from "../../../public/user-avatar.avif";
import teacherAvatar from "../../../public/teacher1.jpg";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onResponse: () => setLoading(false),
  });
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setLoading(true); // Start loading
    await handleSubmit(e); // Handle AI response
  };

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="relative  flex flex-col bg-slate-900 min-h-screen w-full items-center px-4">
      <div className="flex flex-col w-full h-full max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 mb-20">
          {messages.length === 0 && (
            <>
              <div className="flex  shadow-2xl flex-col text-center gap-4  bg-white/30 z-10 backdrop-blur-0-[20px]  border items-center p-4 rounded-2xl">
                <p className="text-white  text-xl md:text-3xl lg:text-5xl font-semibold">
                  Welcome to FindMyTutor!
                </p>
                <p className="text-gray-400 text-sm">
                  Type your question or request and I&apos;ll help you find your
                  answers.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="p-4 bg-cyan-500/60  border-2 text-white border-cyan-500 shadow-2xl w-full rounded-2xl flex flex-wrap h-full  backdrop-blur-0-[20px]">
                    <p>
                      Summarise World War 2 and analyse the effects of the same
                    </p>
                  </div>
                  <div className="p-4 bg-cyan-500/60 border-2 text-white border-cyan-500 shadow-2xl w-full rounded-2xl flex flex-wrap h-full  backdrop-blur-0-[20px]">
                    <p>
                      Summarise World War 2 and analyse the effects of the same
                    </p>
                  </div>
                  <div className="p-4 bg-cyan-500/60 border-2 text-white border-cyan-500 shadow-2xl w-full rounded-2xl flex flex-wrap h-full  backdrop-blur-0-[20px]">
                    <p>
                      Summarise World War 2 and analyse the effects of the same
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex mb-4 ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {m.role === "assistant" && (
                <img
                  src={teacherAvatar.src}
                  alt="AI Avatar"
                  className="w-10 h-10 rounded-full mr-2 object-cover"
                />
              )}
              <div
                className={`whitespace-pre-wrap p-3 rounded-lg shadow ${
                  m.role === "user"
                    ? "bg-cyan-500 text-white text-left"
                    : "bg-gray-200 text-black text-left"
                }`}
              >
                {m.content}
              </div>
              {m.role === "user" && (
                <img
                  src={userAvatar.src}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full ml-2"
                />
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-center justify-start space-x-2">
              <img
                src={teacherAvatar.src}
                alt="AI Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-400"></div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Message input form */}
        <form
          onSubmit={handleFormSubmit}
          className="w-[340px] md:w-[680px] mt-auto fixed bottom-10"
        >
          <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
            <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
            <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-900 p-2">
              <input
                className="bg-transparent w-full rounded-2xl px-2 py-3 text-gray-500 placeholder:text-slate-700 focus:outline-none"
                value={input}
                placeholder="Say something..."
                onChange={handleInputChange}
              />
              <IconButton onClick={handleFormSubmit}>
                <SendIcon className="text-white h-10 w-10" />
              </IconButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
