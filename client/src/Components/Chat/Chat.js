import React, { useEffect, useState } from "react";
import socket from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageAC } from "../../redux/actionCreators";
import Message from "./Message";
import styles from "./Chat.module.css";

function Chat(room) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.messages);
  const username = JSON.parse(localStorage.getItem("name"));
  const messageText = (e) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    dispatch(sendMessageAC(message));
    socket.emit("NEW_MESSAGE", message, room);
    setMessage("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode == 13) sendMessage();
  };

  useEffect(() => {
    socket.on("NEW_MESSAGE:CLIENT", (message) => {
      dispatch(sendMessageAC(message));
    });
    socket.emit("CONNECT_ROOM", room);
  }, []);
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatField}>
        {chat &&
          chat.map((oneMes, i) => (
            <Message oneMes={oneMes} key={oneMes + i} username={username} />
          ))}
      </div>
      <div className={styles.chatMassage}>
        <input
          name="massage-input"
          value={message}
          onChange={messageText}
          onKeyDown={onKeyDown}
        />
        <button className={styles.chatButton} onClick={sendMessage}>
          отправить
        </button>
      </div>
    </div>
  );
}

export default Chat;
