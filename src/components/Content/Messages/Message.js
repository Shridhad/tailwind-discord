const Message = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div className="message-wrapper">
      <div className="avatar-wrapper">
        <img
          src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
          alt=""
          className="avatar"
        />
      </div>

      <div className="message-content">
        <p className="message-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className="message-text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
