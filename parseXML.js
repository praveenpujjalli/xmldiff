// const fs = require('fs');
// const xml2js = require('xml2js');

// // Function to read XML file and return its contents
// function readXMLFile(filePath) {
//     return fs.readFileSync(filePath, 'utf-8');
// }

// // Function to parse XML to JSON
// function parseXMLToJSON(xmlString) {
//     let result;
//     xml2js.parseString(xmlString, (err, res) => {
//         if (err) {
//             console.error('Error parsing XML:', err);
//             return;
//         }
//         result = res;
//     });
//     return result;
// }

// // Example usage
// const xmlFilePath = 'file.xml';
// const xmlContent = readXMLFile(xmlFilePath);

// // Parse XML to JSON
// const jsonData = parseXMLToJSON(xmlContent);

// // Print the parsed JSON
// console.log("Parsed JSON:");
// // console.log(jsonData);

// Object.values(jsonData).forEach(value => {
//     console.log(value);
// });


// let x = true;
// let x ={
//     flag: 1,
//     toString: function(){
//         return this.flag++;
//     }
// }

// if(x==1 && x==2 && x==3){
//     console.log("hio");
// };

// const obj = {};
// if (Object.values(obj).length === 0) {
//   console.log("The object is empty");
// } else {
//   console.log("The object is not empty");
// }

// const uniqueSymbol1 = Symbol('description');
// const uniqueSymbol2 = Symbol('description');
// if(uniqueSymbol1 == uniqueSymbol2){
//     console.log("Its true");
// }
// else{
//     console.log("in else block");
// }

// const a1 = [1, 2, 3];
// const a2 = [1, 2, 3];
// if(a1 === a2){
//     console.log("Its true");
// }
// else{
//     console.log("in else block");
// }

// let str = "hi"
// str = "ab"

// console.log(str);

// const obj ={
//     name: "hi",
//     name: "hello"
// };

// console.log(obj.name);

// console.log("i++");
// for (i=1; i<=10; i++) {
//   console.log(i);
// }
// console.log("++i");
// for (i=1; i<=10; ++i) {
//   console.log(i);
// }

function outerFunction(outerArg) {
    console.log("Outer argument:", outerArg);

    function innerFunction(innerArg) {
        console.log("Inner argument:", innerArg);
        return outerArg + innerArg;
    }

    return innerFunction; // Returns the inner function
}

const inner = outerFunction(5); // Call outerFunction
const result = inner(3); // Call innerFunction with its own argument
console.log("Result:", result); // Outputs: 8


function createCounter() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    };
  }
  
  const counter1 = createCounter();
  counter1(); // ?
  counter1(); // ?
  const counter2 = createCounter();
  counter2(); // ?
  counter1(); // ?

console.log('A');
setTimeout(() => console.log('B'), 0.5);
Promise.resolve().then(() => console.log('C'));
console.log('D');

const numbers = [1, 3, 5];
const filtered = numbers.filter(n => n % 2 === 0);
console.log(filtered); // ?


const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
  };
  
//   const { name, age, city } = person;
  console.log(name); // ?
  console.log(age); // ?
  console.log(city); // ?
  
//   Explanation: The object destructuring syntax allows you to extract properties from an object and assign them to variables.

console.log(foo()); // ?
console.log(bar()); // ?

function foo() {
  return 'Hello from foo';
}

var bar = function() {
  return 'Hello from bar';
};
