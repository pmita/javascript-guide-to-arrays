# Arrays in Javascript

Full breakdown of what array are and how they work in javascript.

## Getting Started

Simply link each javascript lesson you are working on in your html

### Lessons covered include

Array basics

```
//Let's initiate a list
let fruitsArray = ['🍉', '🍎', '🍑', '🍌'];

//From here we can eiter access the values or index of each cell
console.log(fruitsArray[0]); //Prints 🍉
console.log(fruitsArray.indexOf('🍉')) //Prints 0
```

Primitives and reference data types

```
//Remember const applies for variables that their value remains the same
//While let should apply to variables we need them to change their values

let myFavouriteFruit = '🍉';
let myNewFavouriteFruit = myFavouriteFruit;
//Let allows us to change the value while const wouldn't
myNewFavouriteFruit = '🍑';
console.log(myFavouriteFruit, myNewFavouriteFruit); //Prints 🍉 🍑
```

CallBack functions and Higher Order Functions

```
//High Order Functions are essentially functions
//that takes functions as a parameter

//Create a HOF that takes another function as an arguement
//Callback function is the function that is excetured later
function highOrderFunction(callBackFunction){
    callBackFunction();
}
```

.map() method

```
//Let's create and array we can loop over
const goals = [
    'Workout',
    'Connect on LinkedIn',
    'Practice Javscript',
];

//And try to console log each item
let newGoals = goals.map(function(goal){
    console.log(goal); //This functionality still works
});
```

.find() method

```
//Let's create and array we can loop over
const goals = [
    'Workout',
    'Connect on LinkedIn',
    'Practice Javscript',
];

//And loop each item until we find a specific keyword
const searchGoal = goals.find(function(goal){
    return goal.includes('LinkedIn');
});
```

.filter() method

```
//Let's create an array with following goals
const goals = [
    'Workout',
    'Connect on LinkedIn',
    'Connect even more on LinkedIn',
    'Practice Javscript',
];

//If we try same functionality as in .find() example what would be the difference?
const searchGoals = goals.filter(function(goal){
    return goal.includes('LinkedIn');
});
```

.some() VS .every() method

```
//.some and .every work again similarly to filter, howver they only return
//a boolean depending on whether the condition was met or not, True or False


//Let's use our previous example again'
const goalsList = [
    {toDo: 'Workout', difficulty: 2},
    {toDo: 'Connect on LinkedIn', difficulty: 1},
    {toDo: 'Connect more on LinkedIn', difficulty: 2},
    {toDo: 'Practice Javascript', difficulty: 3}
];
```

ternary operator

```
//Ternary operators is a neat feature in javascript that allows us
//to write code a bit faster and simplier

//Let's create an array with following goals
const goals = [
    'Workout',
    'Connect on LinkedIn',
    'Connect even more on LinkedIn',
    'Practice Javscript',
];
```

arrow functions

```
//In many HOF we use anonymous functions as their callback functions
//quite often. The syntaxt we have used so far can get a bit cumbersome
//when dealing with many of them

//Let's create and array we can loop over again
const goals = [
    'Workout',
    'Connect on LinkedIn',
    'Practice Javscript',
];

```

.sort() method

```
//.sort method works in a strange way in javascript

//Let's create and array with strings in wit
const fruits = ['watermelon', 'apple', 'peach', 'banana'];
//And apply .sort method on it
fruits.sort();
```

Creating array copies

```
//We need to mention that .sort() does fall reference type data
//So altering multiple copies of an array will affect the original
```




