
type Person={
    name:string,
    age:number
}
type Employee={
    employeeId:number,
    department:string
}

type Staff = Person & Employee

const s1:Staff={
    name:"John Doe",
    age:30,
    employeeId:12345,
    department:"Engineering"
}

console.log(s1)