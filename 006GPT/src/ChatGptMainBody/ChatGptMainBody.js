import React from "react";
import styles from "./ChatGptMainBody.module.css";
import SideBar from "./SideBar/SideBar";
import ChatContainer from "./ChatContainer/ChatContainer";

function ChatGptMainBody(props) {
  return (
    <>
      <div className={styles.SideBar}>
        <SideBar />
      </div>
      <div className={styles.ChatContainer}>
        <ChatContainer />
      </div>
    </>
  );
}

export default ChatGptMainBody;
