
let data1: [number, string , boolean] = [10, "hello", true];

let [a, b, c] = data1; // structure ekakat tiyene data set ekak tawa array ekakta wagy  wena karla dagan eka destructuring kiyne 
console.log('a: ', a);
console.log('b: ', b);
console.log('c: ', c);

// ---------------------------------

let user2 = {
    id: 'U001',
    name: 'John',
    email: 'john@ijse.lk'
}

let {id, name, email} = user2; // object ekaka tiyene data set ekak unth wena wenm argan puluwan
console.log('id: ', id);
console.log('name: ', name);
console.log('email: ', email);







export default {}