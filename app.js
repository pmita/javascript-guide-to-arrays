//Arrays is simply a collection of data in a list format
//It can hold any type of data you like provided all cells contain the same type

//Let's initiate a list
let fruitsArray = ['🍉', '🍎', '🍑', '🍌'];

//From here we can eiter access the values or index of each cell
console.log(fruitsArray[0]); //Prints 🍉
console.log(fruitsArray.indexOf('🍉')) //Prints 0

//But remember everything in Js is essentially an object
//So arrays is just an object of type array
//As such we can utilize inbuilt methods that apply to arrays
console.log(typeof fruitsArray); //Prints object


//Pop removes last item from array
fruitsArray.pop(); 
console.log(fruitsArray); //Prints ["🍉", "🍎", "🍑"]

//Adds item at the end of the array
fruitsArray.push('🍋');
console.log(fruitsArray); //Prints ["🍉", "🍎", "🍑", "🍋"]


//Shift removes first item from array
fruitsArray.shift();
console.log(fruitsArray); //Prints ["🍎", "🍑", "🍋"]

//Unshift adds item at the beginning of the array
fruitsArray.unshift('🍒');
console.log(fruitsArray); //Prints ["🍒", "🍎", "🍑", "🍋"]