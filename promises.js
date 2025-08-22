let Promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve()
        console.log("task is complete");
        
    },1000)
})
Promiseone.then(function(){
    console.log("Promise");
    
})


let Promisetwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve()
        console.log("task is complete 2");
        
    },1000)
})
Promiseone.then(function(){
    console.log("Promise 2 ");
    
})
