var name = "Saroj Shrestha";
name = "Sarozz Shrestha";

//After ES 6

//const = which value won't be changed and remains fixed
const constName = "Saroj Shrestha"; //(Here, variable name constName can't be change afterthen any where in file)

//let = let stay's within its surrounding scope
if (true) {
    let letName = "Saroj Shrestha";
    alert(letName); //letName can be call with in if statement only
}

alert(letName); //cannot call letName here because letName variable is within if conditon only