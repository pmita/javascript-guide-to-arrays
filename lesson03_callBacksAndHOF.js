//High Order Functions are essentially functions
//that takes functions as a parameter

//Create a HOF that takes another function as an arguement
//Callback function is the function that is excetured later
function highOrderFunction(callBackFunction){
    callBackFunction();
}

//Define a few callBack function we can pass in on our HOF
function callBackFunction_One(){
    console.log('Function One Executes');
}
function callBackFunction_Two(){
    console.log('Function Two Executes');
}
function callBackFunction_Three(){
    console.log('Function Three Executes');
}

//Invoke HOF with any of our callback example functions
highOrderFunction(callBackFunction_One); //Prints Function One Executes
highOrderFunction(callBackFunction_Two); //Prints Function Two Executes
highOrderFunction(callBackFunction_Three); //Prints Function Three Executes


//But we have already seen something similar before with a few methods
//Event listeners, .forEach, and .map are all HOF that take and anonymous function
//Anonymous functions are only executed within the context of its HOF
//Anonymous functions are essentially disposal functions that we
//don't need to define them since we won't use the again  

//Let's create and array we can loop over
const goals = [
    'Workout',
    'Connect on LinkedIn',
    'Practice Javscript',
];

//And loop over each cell with .forEach method
goals.forEach( function(goal){
    console.log(`${goal} is my current goal`);
    //Prints 
    //Workout is my current goal
    //Connect on LinkedIn is my current goal
    //Practice Javascript is my current goal
});







