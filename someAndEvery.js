//.some and .every work again similarly to filter, howver they only return
//a boolean depending on whether the condition was met or not, True or False


//Let's use our previous example again'
const goalsList = [
    {toDo: 'Workout', difficulty: 2},
    {toDo: 'Connect on LinkedIn', difficulty: 1},
    {toDo: 'Connect more on LinkedIn', difficulty: 2},
    {toDo: 'Practice Javascript', difficulty: 3}
];

//And loop each item, .every checks if each item meets our condition
const checkDifficulty = goalsList.every(function(goalItem){
    return goalItem.difficulty >2;
});

//Similar to filter, .every loops over all items regardless of outcome
console.log(checkDifficulty); //Prints false


//Alternatively we can use .some to check if at least once our conidion is met
const checkToDo = goalsList.some(function(goalItem){
    return goalItem.toDo.includes('Workout');
});

//Again, .some loops over all items regardless of outcome
console.log(checkToDo); //Prints true