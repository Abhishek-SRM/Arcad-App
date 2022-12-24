import products from "./product";

const productName: string = "tote bag";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string;

shippingAddress = "America";


const product = products.filter((product) => product.name === productName)[0];
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
    if (shippingAddress.match('New York'))
    {
        taxPercent = 0.1;
    }
    else
    {
        taxPercent = 0.05;
    }

    taxTotal = Number(product.price) * taxPercent;

    total = Number(product.price) + taxTotal + shipping;

    console.log(total);

}
