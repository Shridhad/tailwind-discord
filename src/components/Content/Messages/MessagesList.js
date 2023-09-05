import Message from "./Message";
import { messages } from "./data";
console.log("json ", messages);

function MessagesList() {
  console.log("messages ", messages);

  return (
    <div className="messages-list">
      {messages.map((message) => {
        return (
          <Message
            key={message.timestamp}
            name={message.name}
            timestamp={message.timestamp}
            text={message.text}
          />
        );
      })}
    </div>
  );
}

export default MessagesList;
