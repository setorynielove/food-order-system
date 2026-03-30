function calculateSubtotal(order, quantity) {
    let price;

    switch (order) {
        case "Chicken meal (PHP 75)":
            price = 75;
            break;
        case "Pork meal (PHP 85)":
            price = 85;
            break;
        case "Beef meal (PHP 105)":
            price = 105;
            break;
        default:
            return 0;
    }

    return price * quantity;
}

function calculateDiscount(total, custtype) {
    if (custtype === "Student") {
        return total * 0.20;
    }
    return 0;
}

function printReceipt() {
    let fullname = document.getElementById("name").value;
    let gradesection = document.getElementById("gradesection").value;
    let meal = document.getElementById("food").value;
    let qty = parseInt(document.getElementById("qty").value);
    let customertype = document.getElementById("customertype").value;

    let subtotal = calculateSubtotal(meal, qty);
    let discount = calculateDiscount(subtotal, customertype);
    let total = subtotal - discount;

    document.getElementById("receipt").innerHTML =
        "Name: " + fullname + "<br>" +
        "Grade & Section: " + gradesection + "<br>" +
        "Order: " + meal + "<br>" +
        "Quantity: " + qty + "<br>" +
        "Subtotal: PHP " + subtotal + "<br>" +
        "Discount: PHP " + discount + "<br>" +
        "Total: PHP " + total + "<br><br>" +
        "Thank you for your patronage!";

    return false;
}