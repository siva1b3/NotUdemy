const body = document.querySelector("#container")

for (let i = 0; i < 5; i++) {
    const emptyContainer = document.createElement("div")
    emptyContainer.classList.add("empty")
    body.appendChild(emptyContainer)
}

body.firstChild.appendChild(document.createElement("div"))
body.firstChild.firstChild.classList.add("fill")

const fill = document.querySelector(".fill")
const empty = document.querySelector(".empty")

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

function dragStart() {
    console.log("start")
}

function dragEnd() {
    console.log("End")
}