import React, { useState } from "react";
import styles from "./ChatHistory.module.css";
import ChatElement from "./ChatElement/ChatElement";
import { randomStrings } from "../../../../Data/fakeStringsJson";

function ChatHistory(props) {
  const [chatHistory, setChatHistory] = useState(randomStrings);

  function deleteElementById(id) {
    setChatHistory((prevChatHistory) => {
      return prevChatHistory.filter((element, index) => index !== id);
    });
  }

  return (
    <>
      <div className={styles.ChatHistoryElementscontainer}>
        {chatHistory.map((element, index) => {
          return (
            <ChatElement
              key={index}
              id={index + 1}
              data={element}
              deleteElementById={deleteElementById}
            />
          );
        })}
      </div>
    </>
  );
}

export default ChatHistory;
