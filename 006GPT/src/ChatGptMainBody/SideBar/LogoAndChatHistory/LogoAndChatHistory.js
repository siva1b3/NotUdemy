import React from "react";
import styles from "./LogoAndChatHistory.module.css";
import LogoAndTitle from "./LogoAndTitle/LogoAndTitle";
import ChatHistory from "./ChatHistory/ChatHistory";

function LogoAndChatHistory(props) {
  return (
    <>
      <div className={styles.LogoAndTitle}>
        <LogoAndTitle />
      </div>
      <div className={styles.ChatHistory}>
        <ChatHistory />
      </div>
    </>
  );
}

export default LogoAndChatHistory;
