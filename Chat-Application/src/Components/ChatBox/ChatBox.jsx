import { useState } from "react";

function ChatBox() {
  const [message, setMessage] =
    useState("");

  return (
    <div className="flex-1 flex flex-col">

      <div className="navbar bg-base-100 border-b">
        <h2 className="text-xl font-bold">
          Real Chat App
        </h2>
      </div>

      <div className="flex-1 p-5 overflow-y-auto">

        <div className="chat chat-start">
          <div className="chat-bubble">
            Hello
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-primary">
            Hi
          </div>
        </div>

      </div>

      <div className="p-4 border-t flex gap-3">
        <input
          type="text"
          className="input input-bordered flex-1"
          placeholder="Type message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;