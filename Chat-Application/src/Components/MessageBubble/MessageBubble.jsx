function MessageBubble({
  message,
  ownMessage,
}) {
  return (
    <div
      className={`chat ${
        ownMessage
          ? "chat-end"
          : "chat-start"
      }`}
    >

      <div
        className={`chat-bubble ${
          ownMessage
            ? "chat-bubble-primary"
            : ""
        }`}
      >
        {message}
      </div>

    </div>
  );
}

export default MessageBubble;