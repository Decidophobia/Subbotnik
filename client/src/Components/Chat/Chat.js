import React, { useEffect, useState } from "react";
import socket from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageAC } from "../../redux/actionCreators";
import Message from "./Message";

function Chat(room) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.messages);

  const messageText = (e) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    dispatch(sendMessageAC(message));
    socket.emit("NEW_MESSAGE", message, room);
    setMessage("");
  };
  useEffect(() => {
    socket.on("NEW_MESSAGE:CLIENT", (message) => {
      dispatch(sendMessageAC(message));
    });
    socket.emit("CONNECT_ROOM", room) 

  }, []);
  return (
    <div className="chat-container">
      <div className="chat-field">
        {chat &&
          chat.map((oneMes, i) => <Message oneMes={oneMes} key={oneMes + i} />)}
      </div>
      <div className="chat-massage">
        <input name="massage-input" value={message} onChange={messageText} />
        <button className="chat-button" onClick={sendMessage}>
          отправить
        </button>
      </div>
    </div>
  );
}

export default Chat;
