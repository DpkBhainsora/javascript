(function(){
    console.log("deepak");
    
})
();


let add = (function(){
    console.log("affjj");
    
})
add()

IFFE IS TO USED TO EXCUTE THE FUNCTION IMMEDIATELY...

let val1 = 23
let val2 = 3
function add(num1 , num2){
    let add= num1 + num2
    return add
}
let ad = add(val1, val2)
let aded = add(10, 3)
console.log(ad);
console.log(aded);

function add(){
    console.log("one");
     
    function two(){
        console.log("two");
        return two;
        
    }
} 
add()


(function addd (num1, num2){
    let add = num1 + num2;
    console.log(add);
    
})
(3, 4);


(function add(num1, num2)
{
    let addd = num1 + num2;
    console.log(addd);
    
    
});
(2,4)
console.log(addd);
