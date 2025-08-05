let a= {
    name : "deepak",
    fjkf : "fjkjfkdfkj",
    age : 20,
    location : "Haldwani"
}
console.log(a.name);
console.log(a.fjkf);
console.log(typeof a.name);

a.name = "bhainsora"
Object.freeze(a)
a.name = "singh"
