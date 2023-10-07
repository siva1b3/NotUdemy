import React from 'react';
import styles from './LogoAndTitle.module.css';

function LogoAndTitle(props) {
  return (
    <>
      <div className={styles.logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png"
          alt="ChatGpt"
        />
      </div>
      <div className={styles.title}>Chat GPT</div>
    </>
  );
}

export default LogoAndTitle;
