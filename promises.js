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

let Promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Deepak",
            email:"depak@gmail.com"
        })
    })
})
Promisethree.then(function(user){
    console.log(user);
    

})
 
let Promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if(!error){
        resolve({username:"Deepak",
            email:"depak@gmail.com"
        })}
        else{
            reject('error')

        }
    },1000)
    })

async function consumePromisefour() {
    try {
        let response = await Promisefour
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }

    
    
}
consumePromisefour()



let aa = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("deepak");
        resolve()
    })
})

aa.then(function(){
    console.log("deepak singh bhaisora");
    
})

for(let i=0; i=100; i++){
    setTimeout(function(){
     console.log(" I love you") }
    ,3000);
    
    
}



