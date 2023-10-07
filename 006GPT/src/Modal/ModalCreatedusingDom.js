import React, { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    const openButton = document.querySelector("#data-open-modal");
    const closeButton = document.querySelector("#data-close-modal");
    const modal = document.querySelector("#data-modal");

    const openModal = () => {
      modal.showModal();
    };

    const closeModal = () => {
      modal.close();
    };

    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

    return () => {
      openButton.removeEventListener("click", openModal);
      closeButton.removeEventListener("click", closeModal);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "aquamarine",
        height: "100vh",
        width: "100vw",
        margin: "0%",
        padding: "0%",
        boxSizing: "border-box",
      }}
    >
      <button id="data-open-modal">Open the modal</button>

      <dialog id="data-modal">
        <p>This is the content of the modal.</p>
        <button id="data-close-modal">Close</button>
      </dialog>
    </div>
  );
};

export default Modal;
