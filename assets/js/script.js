"use strict";
exports.__esModule = true;
// var myName:string = 'Abhishek';
// var namLen :number;
// namLen = myName.length;
// console.log(namLen)
// console.log(`My Name is ${myName}`);
// let arrnum :number[] = [1,2,3];
// let arrnum2 :Array<number> = [1,2,3];  
// let Person1:[string,number] = ['Chris',22];
// enum Color {Red,Green,Blue};
// let c:Color = Color.Green;
// function add(var1:number, var2:number) {
//   return var1+var2;
// }
// console.log(add(2,4));
var restaurants_1 = require("./restaurants");
var dollarSigns = "$$";
var deliveryTimeMax = 90;
var maxDistance = 10;
var result;
var priceBracket = dollarSigns.length;
var filteredRestaurants = restaurants_1["default"].filter(function (restaurant) {
    if (Number(restaurant.priceBracket) > priceBracket) {
        return false;
    }
    if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
        return false;
    }
    if (Number(restaurant.distance) > maxDistance) {
        return false;
    }
    return restaurant;
});
if (filteredRestaurants.length === 0) {
    result = "There are no restaurants available right now.";
}
else {
    result = "We found ".concat(filteredRestaurants.length, " restaurants, the first is ").concat(filteredRestaurants[0].name, ".");
}
console.log(result);
