//.filter method works similar to .find. It loops over each element
//and return a variable once a conditions is met. However the loop
//doesn't break once the condition is met. It instead loops over the
//entire array

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

//Like expected, searchGoals now contains all elements with the word LinkedIn in them
console.log(searchGoals); //Prints ["Connect on LinkedIn", "Connect even more on LinkedIn"]



//We can also use .filter method for an array containing objects 
//Let modify our goals array to be an array of objects
const goalsList = [
    {toDo: 'Workout', difficulty: 2},
    {toDo: 'Connect on LinkedIn', difficulty: 1},
    {toDo: 'Connect more on LinkedIn', difficulty: 2},
    {toDo: 'Practice Javascript', difficulty: 3}
];

//Leat's loop over each goal on the list and filter goals
//That have a difficulty over 2
const searchGoalsList = goalsList.filter(function(goalListItem){
    return goalListItem.difficulty > 2; //Returns entire array cell
});

console.log(searchGoalsList); //Prints {toDo: "Practice Javascript", difficulty: 3}
