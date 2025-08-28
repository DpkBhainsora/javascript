let a = Math.random()
n = a*10;
console.log(n)

let lovescore = Math.random()
n = (lovescore*100) + 1;
if (lovescore > 70){
    console.log("This is great")}
    if (lovescore > 50) 
        {
        console.log("This is nice");
        
    } else {
        console.log("This is fake");
        
        
    }
    
function isleap(year){
    if (year % 4 == 0){
        console.log("This is the leap year")
            
        }else{
            console.log("This is not the leap year");
            
        }

        
    }
isleap(2000)    


for(num =0; num <=100; num++){
    console.log(num);
    

if (num %3 == 0){
    console.log("fizz");
    if (num %5 == 0) {
        console.log("Buzz");
        if (num % 3 | 5 == 0) {
            console.log("FizzBuzz");
            
            
            }else{
                console.log(num);
                
            }
            
            
        }
    }
        
            
        
        
        
    }
















