// TODO: Create a multiline string using template literals
// TODO: Create a function that uses template literals for HTML generation
// TODO: Convert regular functions to arrow functions
// TODO: Use arrow functions with array method

const multiple = `Welcome 
to
my
site`;

const numbers = [14,6,4,2,7,7]


function addHTMLBoilerplate() {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>`
}


//old way
function sum(num1, num2) {
    return num1 + num2;
}
//new way
const add = (num1, num2) => num1 + num2; 

const doubled = numbers.map(n => n * 2);

const addArray = (arr) => {
    let total = 0;
    for (let i = 0;i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(multiple);
console.log(addHTMLBoilerplate());
console.log("Old sum:", sum(5, 10));
console.log("New sum:", add(5, 10));
console.log("Doubled array:", doubled);
console.log("Array sum:", addArray(numbers));
