import React from 'react';
import styles from './SideBar.module.css';
import LogoAndChatHistory from './LogoAndChatHistory/LogoAndChatHistory';
import UserSettings from './UserSettings/UserSettings';

function SideBar(props) {
  return (
    <>
      <div className={styles.LogoChatHistory}>
        <LogoAndChatHistory />
      </div>
      <div className={styles.UserSettings}>
        <UserSettings />
      </div>
    </>
  );
}

export default SideBar;
