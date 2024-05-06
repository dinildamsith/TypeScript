const isPass = (total : number) =>{
    return total >=50 ? true : false;

}
var x = isPass(65);
var y = isPass(25);
// var c = isPass("D")  
console.log(x , y )

//------------------------------------------------------------------------------------------

function greet(person : string , date : Date){
    console.log(person,date)
}
greet("Dinil",new Date())


//-------------------------------------------- Type Inferance ---------------------------------
let n = 22; // now onward x's type is number
console.log(n)

n = 'Dinil' // Illegal , no More Playing   Iligel

n = 2 // Legel

//-------------------------------------------------------------------------------------------
// type Annotaion
let massage : string = 'Hello Good Mornign'
console.log(massage)