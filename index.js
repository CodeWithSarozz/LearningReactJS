//var name = "Saroj Shrestha";
//name = "Sarozz Shrestha"; //varaible name can be changed later on too..

//After ES 6

//const = which value won't be changed and remains fixed
//const constName = "Saroj Shrestha"; //(Here, variable name constName can't be change afterthen any where in file)

//let = let stay's within its surrounding scope
//if (true) {
//let letName = "Saroj Shrestha";
//alert(letName); //letName can be call with in if statement only
//}

//alert(letName); //cannot call letName here because letName variable is within if conditon only

//let fname = "Saroj";
//let lname = "Shrestha";
//let age = prompt('Enter Age ?');

//old way
//let oldResult = fname + ' ' + lname + ' is ' + age + ' years old. (result using old ways)';

//using template string //also added in ES6
//let newResult = `${fname} ${lname} is ${age} years old. (result using template string)`; // use of backticks(`) and ${varaiable name}

//alert(newResult);

function welcome(user = "User", message = "Good Morning !") {
    alert(`Hello ${user}, ${message}`);
}

// welcome("Saroj", "How are you?");
welcome();