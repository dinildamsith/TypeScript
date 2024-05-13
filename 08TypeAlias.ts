//---------------------------------   without useign type alias -----------------

let box = {
    height : 10,
    width : 20,
    length :30,
}


function findBoxArea(box : {height: number , width: number , length: number}){  }

function findBoxVolum(box : {height: number , width: number , length: number}){ }


// ------------------------- With Usign Alias ----------------------------------

type Box = {
    height : number,
    width : number,
    length : number
}

let boxObj = {
    height : 10,
    width : 20,
    length : 30,

}

function findBoxArea2(box : Box){
    console.log(box)
}

function findBoxVolum2(box : Box){
    console.log(box)
}

findBoxArea2(boxObj)
findBoxVolum2(boxObj)

/// --------------------------------------

type ID = number | string
function printId(id: ID){
    //
}

printId(1)
printId("Dinil")
// printId(true) illiegel