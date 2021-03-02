//Arrays is a collection of data in a list format
//It can hold any type of data you like provided all cells contain the same type

//Let's initiate a list
let fruitsArray = ['🍉', '🍎', '🍑', '🍌'];

//We can grab each cell value by the corresponding cell number fruitsArray[cellNumber] 
console.log(fruitsArray[0]); //Prints 🍉
//Or grab the cell number by the corresponding call value fruitsArray.indexOf(cellValue)
console.log(fruitsArray.indexOf('🍉')) //Prints 0

//But remember everything in Js is essentially an object
//So any array is in the end just an object of type array
console.log(typeof fruitsArray); //Prints object


//As such we can utilize a bunch of inbuilt methods that apply to arrays


fruitsArray.pop(); //Pop removes last item from array
console.log(fruitsArray); //Prints ["🍉", "🍎", "🍑"]


fruitsArray.push('🍋');//Adds item at the end of the array
console.log(fruitsArray); //Prints ["🍉", "🍎", "🍑", "🍋"]



fruitsArray.shift();//Shift removes first item from array
console.log(fruitsArray); //Prints ["🍎", "🍑", "🍋"]


fruitsArray.unshift('🍒');//Unshift adds item at the beginning of the array
console.log(fruitsArray); //Prints ["🍒", "🍎", "🍑", "🍋"]