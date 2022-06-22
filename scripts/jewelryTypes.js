import { getTypes, setType } from "./database.js"

document.addEventListener("change", event => {
    if (event.target.name === "jewelryType") {
        setType(parseInt(event.target.value))
    }
})

const types = getTypes()

export const JewelryTypes = () => {
    return types.map(type => `<input type="radio" name="jewelryType" value=${type.id}>${type.name}`).join("")
}