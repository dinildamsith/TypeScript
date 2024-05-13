

// 1. parameter type annotation method
function greet(name: string) { // methan karne me name kiyana parameter ekat String type ekak pass karna kiyana eka
    console.log("hello " + name.toUpperCase());
}

// greet(43);  // Illegal, would be a runtime error if this executed
greet("Matheve");

// -----------------

// 2. return type annotation
function getRandomNumber(): number { // methan karne me name kiyana parameter ekat Number type ekak pass karna kiyana eka
    return Math.random();
    // return "Hello";
    // return 10 > 5;
}


// Arrow Funtion
const data = (): number => { // methan karne me name kiyana parameter ekat Number type ekak pass karna kiyana eka
    // return 'a';
    return 10;
}

const data2 = (): number => 10 + 10;  // Arrow Funtion eken mehmth return karn puluwan 

// -----------------

// 3. Annonymous functions
const marks: number[] = [10, 20, 30, 40, 50];

    // please give me a callaback function

marks.forEach(function (mark) {  // methan foreach ekat api dene one annonymous funtion ekak
    console.log(mark + ' -');   
});

console.log('-------------------------');


marks.forEach((mark) => { // for each ekat arrow funtion ekak unth dene puluwn
    console.log(mark);
    
});

// -----------------

// 4. void type annotaion
function printInfo(): void { // methn funtion eka void type kiyaal dene one natn return karn puluwn 
    let name = 'Danuja';
    let age = 10;

    console.log(`My name is ${name}, and my age is ${age}`);

    // return '10'; // you cannot, because ths function is now has void type annotaion
}
printInfo();