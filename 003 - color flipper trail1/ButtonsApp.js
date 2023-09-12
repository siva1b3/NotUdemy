const header = document.querySelector(".header");

const COLORFLIPPER = document.querySelector("#COLORFLIPPER");
const NAMED = document.querySelector("#NAMED");
const HEX = document.querySelector("#HEX");
const RGB = document.querySelector("#RGB");
const HSL = document.querySelector("#HSL");
const WITHALPHA = document.querySelector("#WITHALPHA");

COLORFLIPPER.addEventListener("click", () =>
  toggleButtonClass(COLORFLIPPER, "btn-outline-primary", "btn-primary")
);
NAMED.addEventListener("click", () =>
  toggleButtonClass(NAMED, "btn-outline-secondary", "btn-secondary")
);
HEX.addEventListener("click", () =>
  toggleButtonClass(HEX, "btn-outline-success", "btn-success")
);
RGB.addEventListener("click", () =>
  toggleButtonClass(RGB, "btn-outline-info", "btn-info")
);
HSL.addEventListener("click", () =>
  toggleButtonClass(HSL, "btn-outline-dark", "btn-dark")
);
WITHALPHA.addEventListener("click", () =>
  toggleButtonClass(WITHALPHA, "btn-outline-warning", "btn-warning")
);

function toggleButtonClass(button, classToRemove, classToAdd) {
  button.classList.toggle(classToRemove);
  button.classList.toggle(classToAdd);
  if (button.classList.value.includes("outline")) {
    button.classList.toggle("without-outline");
    button.classList.toggle("with-outline");
  } else {
    button.classList.toggle("without-outline");
    button.classList.toggle("with-outline");
  }
  button.clicked = true;
  console.log(button.clicked);
}

COLORFLIPPER.addEventListener("mouseout", () => firstClick(COLORFLIPPER));
NAMED.addEventListener("mouseout", () => firstClick(NAMED));
HEX.addEventListener("mouseout", () => firstClick(HEX));
RGB.addEventListener("mouseout", () => firstClick(RGB));
HSL.addEventListener("mouseout", () => firstClick(HSL));
WITHALPHA.addEventListener("mouseout", () => firstClick(WITHALPHA));

function firstClick(button) {
  if (button.clicked) {
    button.clicked = false;
    console.log("click happened");
  } else {
    console.log("only mosuse out no click");
  }
}

// COLORFLIPPER.addEventListener("mouseover", () => showToolTip("COLORFLIPPER"));
// NAMED.addEventListener("mouseover", () => showToolTip("NAMED"));
// HEX.addEventListener("mouseover", () => showToolTip("HEX"));
// RGB.addEventListener("mouseover", () => showToolTip("RGB"));
// HSL.addEventListener("mouseover", () => showToolTip("HSL"));
// WITHALPHA.addEventListener("mouseover", () => showToolTip("WITHALPHA"));

// COLORFLIPPER.addEventListener("mouseout", () => hideToolTip("COLORFLIPPER"));
// NAMED.addEventListener("mouseout", () => hideToolTip("NAMED"));
// HEX.addEventListener("mouseout", () => hideToolTip("HEX"));
// RGB.addEventListener("mouseout", () => hideToolTip("RGB"));
// HSL.addEventListener("mouseout", () => hideToolTip("HSL"));
// WITHALPHA.addEventListener("mouseout", () => hideToolTip("WITHALPHA"));
