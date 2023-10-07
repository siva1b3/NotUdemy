import React from 'react';
import styles from './ChatElement.module.css';

function ChatElement(props) {
  function handleClick(id) {
    const index = id - 1;
    props.deleteElementById(index);
  }

  return (
    <div className={styles.ChatElement}>
      <div className={styles.textelement}>
        {props.id}.{props.data}
      </div>
      <div
        className={styles.deleteButton}
        onClick={() => handleClick(props.id)}
      >
        <div className={styles.trashIconContainer}>
          <svg
            width="16"
            height="16"
            fill="black"
            viewBox="0 0 16 16"
            className={styles.trashIcon}
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ChatElement;
