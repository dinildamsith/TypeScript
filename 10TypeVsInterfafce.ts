/// interface ekaki type  ekaki tiyeen ekam wenas inteface ekakt interface exict name eknm alth propertis ekak add karna puluwan haby type ekedi exits name ekenm propertis add karna bh

type Vehicle = {
    model: string
}
interface Animal {
    name: string
}

// --------------------------------------------

// Extendability -> both have extendability

interface Dog extends Animal {
    weight: number
}

type Car = Vehicle & {
    topSpeed: number
}

// --------------------------------------------

// Adding properties to an existing 

interface Human {
    id: number
}
interface Human {
    name: string
}

/////
type Love = {
    shape: string
}

/*type Love = {   // Illegal; duplicate Identifires
    duration: number
}
*/    model : string
}

interface vehical {
    model : string
}