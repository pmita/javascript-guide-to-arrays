//.sort method works in a strange way in javascript

//Let's create and array with strings in wit
const fruits = ['watermelon', 'apple', 'peach', 'banana'];
//And apply .sort method on it
fruits.sort();
//fruits array is now sorted alphabetically
console.log(fruits); //Prints ["apple", "banana", "peach", "watermelon"]

//However this dones't work with number arrays

//Let's create an array with numbers in it
const numbers = [ 92, 56, 4, 2, 22, 45.6, 10, 80];
//And apply .sort method on it
numbers.sort();
//.sort turns our numbers into strings and then sorts them
//But this isn't what we want
console.log(numbers); //Prints [10, 2, 22, 4, 45.6, 56, 80, 92]



//To counter this we need to pass in an anonymous function that compares
//each cell item value with the next cell item value. 

//use .sort with an arrow function in it
numbers.sort( (currentCell, nextCell) =>{
    //Checks if first cell is larger than next cell
    //If yes then currentCell will switch places with nextCell
    //Else they are already sorted correctly and needs no ammendment
    return currentCell - nextCell;
});
console.log(numbers); //Prints [2, 4, 10, 22, 45.6, 56, 80, 92]

//To sort the array in descending way we simply switch the order of the cell
numbers.sort( (currentCell, nextCell) =>{
    //Checks if next cell is larger than previous cell
    //If yes then currentCell will switch places with nextCell
    //Else they are already sorted correctly and needs no ammendment
    return nextCell - currentCell;
});
console.log(numbers); //Prints [92, 80, 56, 45.6, 22, 10, 4, 2]