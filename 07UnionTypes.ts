function printId(id : string | number){ // methan kiiyane me method ekat ewan parameter eka string ekak hari number ekak hari kiyana eka
    console.log(id)
}

printId("Dinil")
printId(1)
// printId(true) illegel


// -----------------------------------------------------------------------

function displayId(id: number | string){
    if(typeof id == "number"){
        console.log(id)
    }else{
        console.log(id.toUpperCase())
    }
}

displayId(11);
displayId("dinil")

// ---------------------------------------------------------

// working with Array.isArray
function welcomePeople(names: string | string[]) {  // methan kiyane me parameter ekat ena puluwan string ekak hari string array ekak hari withri kiyala
    if(Array.isArray(names)) { // metana kiyane names kiyana parameter ekat array ekak enwa nm me condition eka wena kiyala
        names.map((name) => { // map eke wene names kiyan array eka one buy one values get karna eka
            console.log(`Hey! Welcome ${name}!`);
            
        });
    } else { // String array ekak natuwa string ekak withrk awoth meka run wene
        console.log(`Hey! Welcome lone traveler ${names}!`);
    }
}

welcomePeople(['John', 'Steve', 'Danuja', 'Rayan']);
welcomePeople('Nimna');



// -----------------------------------------------------------

let dat : (number | boolean)[] = [10,20,30,true]; // meken kiyane me dat kiyana ekat eka para numbers or boolean values dana puluwan kiyala
// let dat : (number | boolean)[] = [10,20,30,true,"Raso"]; Illigel

// Strict Union -------------------------------------------
function windowStatus(status: "open" | "close"){  // meke kiyane me parameter ekat pass karn apuluwan close hari open kiyala hari withri kiyala
    console.log(`The Window is ${status}`)
}

windowStatus("open")
windowStatus("close")
// windowStatus("dd") Iliegel