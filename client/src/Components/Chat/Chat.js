import React from "react";
import socket from "../../socket";
function Chat(props) {
  return (
    <div className="chat-container">
      <div className="chat-field"></div>
      <div className="chat-massage">
        <input name="massage-input" />
        <button className="chat-button">отправить</button>
      </div>
    </div>
  );
}

export default Chat;
