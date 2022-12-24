"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var productName = "tote bag";
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress;
shippingAddress = "America";
var product = product_1["default"].filter(function (product) { return product.name === productName; })[0];
{
    if (product.preOrder === "true") {
        console.log("We will send you a message when your product is on its way.");
    }
    if (product.price > "25") {
        shipping = 0;
        console.log("We Provide Free Shipping on this Order");
    }
    else {
        shipping = 5;
    }
    if (shippingAddress.match('New York')) {
        taxPercent = 0.1;
    }
    else {
        taxPercent = 0.05;
    }
    taxTotal = Number(product.price) * taxPercent;
    total = Number(product.price) + taxTotal + shipping;
    console.log(total);
}
