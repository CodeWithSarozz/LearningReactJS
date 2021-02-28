//---Variables---

var varName = "Saroj Shrestha";
varName = "Sarozz Shrestha"; //varaible name can be changed later on too..

//After ES 6

//const = which value won't be changed and remains fixed
const constName = "Saroj Shrestha"; //(Here, variable name constName can't be change afterthen any where in file)

//let = let stay's within its surrounding scope
// if (true) {
//     let letName = "Saroj Shrestha";
//     //alert(letName); //letName can be call with in if statement only
// }

//alert(letName); //cannot call letName here because letName variable is within if conditon only

// let fname = "Saroj";
// let lname = "Shrestha";
//let age = prompt('Enter Age ?');

//---template-string---

//old way
// let oldResult = fname + ' ' + lname + ' is ' + age + ' years old. (result using old ways)';

//using template string //also added in ES6
// let newResult = `${fname} ${lname} is ${age} years old. (result using template string)`; // use of backticks(`) and ${varaiable name}

//alert(newResult);

//---default parameter--

// function welcome(user = "User", message = "Good Morning !") {
//     alert(`Hello ${user}, ${message}`);
// }

// welcome("Saroj", "How are you?");
//welcome();

//---arrow-function---

// function greeting(message) {
//     return alert(`${message} everyone!`);
// }

//greeting('Good Morning');

//in arrow function
// let arrowFunctionGreeting = message => alert(`${message} everyone!`);

//arrowFunctionGreeting('Good Evening');

// let createBlog = (title, body) => {
//     if (!title) {
//         throw new Error('Title is required');
//     }

//     if (!body) {
//         throw new Error('Body is required');
//     }

//     return alert(`${title} - ${body}`);
// };

//createBlog('This is title', 'This is body for an arrow function.');

//in javascript, this refers to enclosing context
// console.log(this);

let nepal = {
    //add property
    mountains: ['Everest', 'Fish Tail', 'Annapurna'],

    //add method
    printWithDash: function() {
        // console.log('inside printWithDash', this);
        //setTimeout(function() {
        // console.log('inside time out', this);
        //console.log(this.mountains.join(" - "));
        //}, 3000);

        setTimeout(() => console.log(this.mountains.join(" - ")), 3000);
    }
};

//nepal.printWithDash();

//---Destructuring Object---

let thingsToDo = {
    morning: "Excersise",
    afternoon: "Work",
    evening: "Code",
    night: ["Sleep", "Dream"]
};

let { morning, afternoon, evening, night } = thingsToDo; //Destructuring

morning = 'Run';

// console.log(morning, ' - ', evening);

// let uniStudent = student => {
//     let { name, university } = student;
//     alert(`${name} from ${university}`);
// };

let uniStudent = ({ name, university }) => {
    // alert(`${name} from ${university}`);
};

uniStudent({
    name: 'Sarozz Shrestha',
    university: 'Leeds Beckett University'
});

let [, secondMountain, , fourthMountain] = ['Everest', 'Fish Tail', 'Annapurna', 'Langtang'];

console.log(secondMountain, '-', fourthMountain);