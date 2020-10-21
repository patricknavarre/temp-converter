const convertToC = require('./f2c.js');
const convertToF = require('./c2f.js');

// this is our front-end file
// it is in charge of user interaction ONLY

// here's how the date goes through our app:

// 1. user types 'node main.js' + some arguments 
// 2. when they hit enter, NODE puts their inputs 
//    into process.argv
// 3. we're going to send that input to our back end 
//    function.  
// 4. the back end function will return an answer
// 5. we'll print out that answer to the user

// grab the temperature from the user
const temp = process.argv[2]

// grab the unit from the user
const unit = process.argv[3];

// if the unit is 'c' (for celsius), go get the answer from convertToC
if (unit === 'c') {
    const celsius = convertToC(temp);
    console.log(celsius)
}   else {
    // otherwise go get the answer from convertToF, then print it
    const fahrenheit = convertToF(temp)
    console.log(fahrenheit); 
}


