interface Employee{
    empId: number;
    email: string;
    name : string;
}

function validateEmployee(emp: Employee){
    // logic is here ...
}

validateEmployee({empId : 1 , email : "Dinil@gam", name:"Dinil"})