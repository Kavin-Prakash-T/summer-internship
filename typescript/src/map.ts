const users=[
    {
        id:1,
     firstName:"Kavin",
     phno:56976877676,
     age:16
},
    {
        id:2,
     firstName:"Prakash",
     phno:56976877676,
     age:78
},
    {
        id:3,
     firstName:"John",
     phno:56976877676,
     age:50
},
]

const names=users.filter((o)=>{
    return o.age >= 50;
})

console.log(names)