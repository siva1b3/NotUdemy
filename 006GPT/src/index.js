import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import styles from "./index.module.css";
import ChatGptMainBody from "./ChatGptMainBody/ChatGptMainBody";
import BasicModal from "./Modal/BasicModal";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className={styles.ChatGptMainBody}>
      <ChatGptMainBody />
      {/* <BasicModal /> */}
    </div>
  </StrictMode>
);
