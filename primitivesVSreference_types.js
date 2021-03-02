
//Remember const applies for variables that their value remains the same
//While let should apply to variables we need them to change their values

let myFavouriteFruit = '🍉';
let myNewFavouriteFruit = myFavouriteFruit;
//Let allows us to change the value while const wouldn't
myNewFavouriteFruit = '🍑';
console.log(myFavouriteFruit, myNewFavouriteFruit); //Prints 🍉 🍑

//However arrays and objects let us utilize the const variables
//But a big difference is we're dealing with reference types data instead

const fruitsArray = ['🍉', '🍎', '🍑', '🍌'];

const favouriteFruitsArray = fruitsArray; 
console.log(favouriteFruitsArray); //Prints ['🍉', '🍎', '🍑', '🍌']
//But what happens if I change values in my favouriteFruitsArray?
favouriteFruitsArray.push('🍋');
console.log(favouriteFruitsArray); //Prints ["🍉", "🍎", "🍑", "🍌", "🍋"] as expected

//But we are also altering the original copy 
console.log(fruitsArray); //Prints ["🍉", "🍎", "🍑", "🍌", "🍋"]

//Reason why being that we never copied the values of the fruitsArray
//We instead referenced the contents of its cells
//So we only have 1 main copy where are saving the changes to
//But two variables that are referencing the same cells
//Altering either array will result in both altering the main copy
//And as such show the same values
