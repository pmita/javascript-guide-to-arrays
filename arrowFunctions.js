//In many HOF we use anonymous functions as their callback functions
//quite often. The syntaxt we have used so far can get a bit cumbersome
//when dealing with many of them

//Let's create and array we can loop over again
const goals = [
    'Workout',
    'Connect on LinkedIn',
    'Practice Javscript',
];

//And apply map to it
let newGoals = goals.map(function(goal){
    console.log(goal); //Prints each array item
});

//However we can use Arrow function notation within the callback function
//This makes our code a bit simplier and avoids unnecessary characters
newGoals = goals.map((goal) =>{
    console.log(goal); //Prints each array item
});

//Essentially .map( function(){} ); becomes .map( () =>{} );
//This adjusts depending on how many arguements are passed to our callback function
//.map( function(var1, var2, var3){} ); becomes .map( (var1, var2, var3) =>{} );
//Only in case of passing one arguement then we can remove the parentheses
//.map( function(var1){} ); becomes .map( var1 =>{} );