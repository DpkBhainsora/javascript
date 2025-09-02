function addtwonumber(num1, number2 ){
    console.log(num1 + number2);
    console.log(num1 - number2);
    
}
addtwonumber(3, 5)
addtwonumber(23, 88)

function kfj(number1, number2){
    let af = number1 + number2
    let fb = number1 - number2
    return af, fb
    
}
let arr = kfj(23, 43)
console.log("Result:", arr);

function calculatecratprice(...num1){
    return num1
}
console.log(calculatecratprice(7, 23, 32));

let user = {
    name : "deepak",
    price : 23
}
function arr(user){
    console.log(`username is ${user.name} and price is ${user.price}`);
    
}
arr(user)

function addtwonumber(num1, number1){
    arr = num1 + number1;
    console.log(arr);
    
}
addtwonumber(2, 4)

let arr= [23, 43, 23, 6]
let arrr= [23, 43, 55, 6]
function aa(arr, arrr){
    return(arr + arrr);
    
}
console.log(aa());


let arr= [23, 43, 54, 546]
function aaa(getarray){
    return getarray[1]
}
console.log(aaa(arr));

function newage(age){
    let newage = 90 - age
    let dayleft = 365 * newage
    let weeks = 52 * newage
    let month = 12 * newage
    console.log(`you have dayleft ${dayleft}, weeksleft ${weeks}, month left ${month}`);
    

}
newage(12)

