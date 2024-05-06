let user = {
    name:"Dinil Damsith",
    age : '18'
}

console.log(user.name)
console.log(user.age)

// this line gives us an error, because ts always have static checking
// console.log(user.email);    //?


// -------------------------------------

const message = "Hello";
message();

// -------------------------------------

function flipCoins() {
    return Math.random < 0.5;   // This is meant to Math.random()
}

// ------------------------------------

function greet(person , date){
    console.log(`Hello ${person}, today is ${date}`)
}
greet("Dam");

// -----------------------------------

const isPass = (total) =>{
    return total >=50 ? true : false;

}
var x = isPass(65);
var y = isPass(25);
var c = isPass("D")  // Legal, but it's weird (impossible)
console.log(x , y , c)


export{}