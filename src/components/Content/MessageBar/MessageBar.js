import PlusIcon from "./PlusIcon";

const MessageBar = () => (
  <div className="message-bar">
    <PlusIcon />
    <input
      type="text"
      placeholder="Enter message..."
      className="message-bar-input"
    />
  </div>
);

export default MessageBar;
