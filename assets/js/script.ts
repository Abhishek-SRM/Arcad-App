export{}
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



import restaurants from "./restaurants";

const dollarSigns: string = "$$";
const deliveryTimeMax: Number = 90;
const maxDistance: number = 10;
let result;

const priceBracket: number = dollarSigns.length;

const filteredRestaurants  = restaurants.filter((restaurant) => {
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
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
