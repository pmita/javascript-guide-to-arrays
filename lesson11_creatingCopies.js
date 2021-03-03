//We need to mention that .sort() does fall reference type data
//So altering multiple copies of an array will affect the original


//Let's create an array with numbers in it
const numbers = [ 92, 56, 4, 2, 22, 45.6, 10, 80];
//Let's copy that array to a new array
const numbersCopy = numbers;
//And sort new array in an ascending trend
numbersCopy.sort( (currentCell, nextCell)=>{
    return currentCell - nextCell;
});
//Let's print both arrays to see what happens
console.log(numbersCopy); //Prints [2, 4, 10, 22, 45.6, 56, 80, 92]
console.log(numbers); //Prints [2, 4, 10, 22, 45.6, 56, 80, 92]


//To counter this we can use the spread operator to copy values
//Let's create an array with numbers in it
const newNumbers = [ 103, 15, 6, 5, 18, 64, 93];
//Copy the values to a new array using the spread operator
const numbersProperCopy = [...newNumbers];
//Sort in an ascending trend
numbersProperCopy.sort( (currentCell, nextCell) =>{
    return currentCell - nextCell;
});
//Let's print both arrays to see what happens
console.log(numbersProperCopy); //Prints [5, 6, 15, 18, 64, 93, 103]
console.log(newNumbers); //Prints [103, 15, 6, 5, 18, 64, 93]

//Spead operator works on copying multiple arrays as well
const totalNumbers = [...newNumbers, ...numbers];
console.log(totalNumbers); //Prints [103, 15, 6, 5, 18, 64, 93, 2, 4, 10, 22, 45.6, 56, 80, 92]