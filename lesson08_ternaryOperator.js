//Ternary operators is a neat feature in javascript that allows us
//to write code a bit faster and simplier

//Let's create an array with following goals
const goals = [
    'Workout',
    'Connect on LinkedIn',
    'Connect even more on LinkedIn',
    'Practice Javscript',
];

//And either return the item title or no match depending on our condition
const goalsFiltered = goals.map(function(goal){
    if(goal.includes('LinkedIn')){
        return goal;
    }else{
        return 'No match';
    }
});

console.log(goalsFiltered); 
//Prints ["No match", "Connect on LinkedIn", "Connect even more on LinkedIn", "No match"]



//However we can cut down the if-else logic to one line of code
const goalsFilteredSimplier = goals.map(function(goal){
    return goal.includes('LinkedIn') ? goal : 'No match';
});


console.log(goalsFilteredSimplier); 
//Prints ["No match", "Connect on LinkedIn", "Connect even more on LinkedIn", "No match"]

//Ternary checks for our condition
// Does goal.includes('LinkedIn') equals true or false 
//If true then return goal ... or simply ? goal
//Else if false return 'No match' ... or simply : 'No match'