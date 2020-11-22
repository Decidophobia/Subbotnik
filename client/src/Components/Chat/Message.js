import React from "react";

function Message({ oneMes, username }) {
  return (
    <div className="oneMessage">
      <span>{username}</span>
      {oneMes}
    </div>
  );
}

export default Message;
