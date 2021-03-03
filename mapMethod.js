//Similar to .forEach; .map is also a HOF that applies to arrays
//Difference being that .map loops over each item, applies some
//functionality and always tries to return something back

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

//But printing the entire array doesn't work as exected
console.log(newGoals); //Prints [undefined, undefined, undefined]


//Like we said .map method applies an anonymous functions to each
//element but then it always tries to return something at the end
//of each loop!

//Instead let's try this
newGoals = goals.map(function(goal){
    return goal.toUpperCase();
});

//Now printing the entire array works as expected
console.log(newGoals); //Prints ["WORKOUT", "CONNECT ON LINKEDIN", "PRACTICE JAVSCRIPT"]


//.map is also a great way to copy arrays without having to worry
//about reference data types

//Let copy goals array to a new array with map
const goalsStartingFromMonday = goals.map(function(goal){
    return goal;
});

//Let's modify the newly created array
goalsStartingFromMonday.push('Eat more fruits');

//And see what both arrays have in them
console.log(goalsStartingFromMonday); //Prints ["Workout", "Connect on LinkedIn", "Practice Javscript", "Eat more fruits"]
console.log(goals); //Prints ["Workout", "Connect on LinkedIn", "Practice Javscript"]