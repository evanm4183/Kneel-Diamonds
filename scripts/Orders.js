import { getOrders, getMetals, getSizes, getStyles, getTypes } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()

const buildOrderListItem = (order) => {
    let foundMetal = metals.find(metal => metal.id === order.metalId)
    let foundSize = sizes.find(size => size.id === order.sizeId)
    let foundStyle = styles.find(style => style.id === order.styleId)
    let foundType = types.find(type => type.id === order.typeId)

    let totalCost = (foundMetal.price + foundSize.price + foundStyle.price) * foundType.multiplier
    let totalCostStr = totalCost.toLocaleString("en-us", {style: "currency", currency: "USD"})

    return `<li>
        Order #${order.id} was placed on ${totalCostStr}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

