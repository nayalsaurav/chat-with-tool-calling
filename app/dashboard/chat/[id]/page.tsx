"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { User, Bot } from "lucide-react";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-6 space-y-6 max-w-4xl w-full mx-auto">
        {messages.map((message) => {
          const isUser = message.role === "user";

          return (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                isUser ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`flex items-center justify-center h-10 w-10 rounded-full shadow-md ${
                  isUser
                    ? "bg-blue-500 text-white"
                    : "bg-emerald-500 text-white"
                }`}
              >
                {isUser ? <User size={18} /> : <Bot size={18} />}
              </div>

              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-md whitespace-pre-wrap ${
                  isUser
                    ? "bg-blue-500 text-white rounded-bl-none"
                    : "bg-white dark:bg-zinc-800 dark:text-zinc-100 rounded-br-none"
                }`}
              >
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case "text":
                      return <div key={`${message.id}-${i}`}>{part.text}</div>;

                    case "tool-weather":
                    case "tool-f1Matches":
                    case "tool-stockPrice":
                      return (
                        <div
                          key={`${message.id}-${i}`}
                          className="mt-2 p-2 text-xs bg-black/5 dark:bg-white/5 rounded-md"
                        >
                          {JSON.stringify(part.output, null, 2)}
                        </div>
                      );

                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          );
        })}

        {status === "streaming" && (
          <div className="flex items-center gap-3 flex-row-reverse">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-500 text-white">
              <Bot size={18} />
            </div>
            <div className="bg-white dark:bg-zinc-800 px-4 py-3 rounded-2xl rounded-br-none shadow-md text-sm animate-pulse">
              Thinking...
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim()) return;
          sendMessage({ text: input });
          setInput("");
        }}
        className="border-t bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-4"
      >
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition shadow-md"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
