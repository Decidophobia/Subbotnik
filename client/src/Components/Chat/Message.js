import React from "react";
import styles from "./Message.module.css";
function Message({ oneMes, username }) {
  return (
    <div className={styles.message}>
      <div className={styles.authorMessage}>{username}:</div>
      <div className={styles.messageText}>{oneMes}</div>
    </div>
  );
}

export default Message;
