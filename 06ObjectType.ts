function printUser(user: { id: number ; name: string}){ // methan illane user object ekak
    console.log(`The User Id Is ${user.id}`)
    console.log(`The User Name Is ${user.name}`)
}

// Create User Obj
const userObj ={
    id : 2,
    name : "Kamal"
}

printUser({id: 1 ,name: "Dinil"}); // parameter ekat mehmth user object ekak yawan puluwan
printUser(userObj) // mehemath object ekak yawan puluwan parameter ekat