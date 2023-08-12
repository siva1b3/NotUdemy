const header = document.querySelector(".header")

const COLORFLIPPER = document.querySelector("#COLORFLIPPER")
const NAMED = document.querySelector("#NAMED")
const HEX = document.querySelector("#HEX")
const RGB = document.querySelector("#RGB")
const HSL = document.querySelector("#HSL")
const WITHALPHA = document.querySelector("#WITHALPHA")

COLORFLIPPER.addEventListener("click", () => toggleButton("COLORFLIPPER"))
NAMED.addEventListener("click", () => toggleButton("NAMED"))
HEX.addEventListener("click", () => toggleButton("HEX"))
RGB.addEventListener("click", () => toggleButton("RGB"))
HSL.addEventListener("click", () => toggleButton("HSL"))
WITHALPHA.addEventListener("click", () => toggleButton("WITHALPHA"))

function toggleButton(buttonName) {
    switch (buttonName) {
        case "COLORFLIPPER":
            COLORFLIPPER.classList.toggle("btn-outline-primary")
            COLORFLIPPER.classList.toggle("btn-primary")
            break;
        case "NAMED":
            NAMED.classList.toggle("btn-outline-secondary")
            NAMED.classList.toggle("btn-secondary")
            break;
        case "HEX":
            HEX.classList.toggle("btn-outline-success")
            HEX.classList.toggle("btn-success")
            break;
        case "RGB":
            RGB.classList.toggle("btn-outline-info")
            RGB.classList.toggle("btn-info")
            break;
        case "HSL":
            HSL.classList.toggle("btn-outline-dark")
            HSL.classList.toggle("btn-dark")
            break;
        case "WITHALPHA":
            WITHALPHA.classList.toggle("btn-outline-warning")
            WITHALPHA.classList.toggle("btn-warning")
            break;
        default:
            break;
    }
}

COLORFLIPPER.addEventListener("mouseover", () => showToolTip("COLORFLIPPER"))
NAMED.addEventListener("mouseover", () => showToolTip("NAMED"))
HEX.addEventListener("mouseover", () => showToolTip("HEX"))
RGB.addEventListener("mouseover", () => showToolTip("RGB"))
HSL.addEventListener("mouseover", () => showToolTip("HSL"))
WITHALPHA.addEventListener("mouseover", () => showToolTip("WITHALPHA"))


COLORFLIPPER.addEventListener("mouseout", () => hideToolTip("COLORFLIPPER"))
NAMED.addEventListener("mouseout", () => hideToolTip("NAMED"))
HEX.addEventListener("mouseout", () => hideToolTip("HEX"))
RGB.addEventListener("mouseout", () => hideToolTip("RGB"))
HSL.addEventListener("mouseout", () => hideToolTip("HSL"))
WITHALPHA.addEventListener("mouseout", () => hideToolTip("WITHALPHA"))

function showToolTip(buttonName) {
    const tooltip = document.createElement("span")
    tooltip.textContent = buttonName
    tooltip.setAttribute("id", "delete")
    tooltip.classList.toggle("coupontooltip")
    const button = document.querySelector(`#${buttonName}`)
    const computedStyles = getComputedStyle(button)
    if (button.classList.value.includes("outline")) {
        tooltip.style.backgroundColor = "red"
    }
    else {
        tooltip.style.backgroundColor =
            computedStyles.backgroundColor !== "rgba(0, 0, 0, 0)" ?
                computedStyles.backgroundColor : "red"
    }
    button.classList.toggle("couponcode")
    button.appendChild(tooltip)
}

function hideToolTip(buttonName) {
    const button = document.querySelector(`#${buttonName}`)
    button.classList.toggle("couponcode")
    const tooltip = document.querySelector(`#delete`)
    tooltip.remove()
}