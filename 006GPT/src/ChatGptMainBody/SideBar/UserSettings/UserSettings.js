import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./UserSettings.css";

function UserSettings() {
  function Button(text, type) {
    return <AwesomeButton type={type}>{text}</AwesomeButton>;
  }
  return (
    <>
      <div className="NewChat">{Button("New Chat", "primary")}</div>
      <div className="CustomInstructions">
        {Button("Custom Instructions", "secondary")}
      </div>
      <div className="ClearHistory">{Button("Clear History", "danger")}</div>
    </>
  );
}

export default UserSettings;
