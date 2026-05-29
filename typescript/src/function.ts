function add(a:number,b:number):number{
    return a+b;
}

const output:number=add(10,20)
console.log(output)

let balance:number=1000

const deposit=function(amt:number){
    balance+=amt
}
const withdraw=function(amt:number){
    balance-=amt
}

function printText():void{
    console.log("Hello, World!");
}

printText()