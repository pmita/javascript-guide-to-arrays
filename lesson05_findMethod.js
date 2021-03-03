//Again, similarly .find is also a HOF but unlike .map
//It only returns something when a condition is met however

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

console.log(searchGoal); //Prints Connect on LinkedIn


//However as soon as the .find condition is met the loop breaks
//And it returns the item. 

//So if we had the following array for example
const goalsOf2021 = [
    'Workout',
    'Connect on LinkedIn',
    'Connect even more on LinkedIn',
    'Practice Javscript',
];

//And search for LinkedIn keyword
const searchGoal2021 = goalsOf2021.find(function(goal){
    return goal.includes('LinkedIn');
});

//We are only getting the first occurence since the loops breaks
//after condition is met
console.log(searchGoal2021); //Prints Connect on LinkedIn