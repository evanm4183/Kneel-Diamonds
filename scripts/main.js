import { KneelDiamonds } from "./KneelDiamonds.js"

document.addEventListener("orderPlaced", event => {
    //window.alert("works 2")
    renderAllHTML()
})

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

// left off on 5.8
// question about second argument on CustomEvent
// question about using elements instead of document
// querySelector vs getElementById