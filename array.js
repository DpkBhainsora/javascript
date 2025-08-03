let arr = [23, 42, 42, "anikta"]
let arr2 = ["deepak", "singh", "bhaisora"]
console.log(arr);
console.log(arr2);

arr.push(3434)
console.log(arr);
let arr3 = arr + arr2;
console.log(arr3);
console.log(...arr, ...arr2);

arr3.pop([4])
console.log(arr3);

arr3.pop(23)
console.log(arr3);

myarr = [23, 43, 34, 54]
console.log(myarr);

myarr.push(545)
console.log(myarr);
myarr.pop(23)
console.log(myarr);
console.log(myarr.indexof(23));

myarr = [32, 42, 54, 65, 65, 54]
console.log(arr.length);

myarr = [234, 454, 546, 65, 6565]
console.log(myarr.length);

myarr = [34, 54, 65, 76, 765, 43]
console.log(myarr.includes(34));
console.log(myarr.includes(54));
console.log(myarr.includes(53434));

myarr = [34, 54, 65, 657, 123]
let squared = myarr.map(x => x * x);
myarr.forEach(x => console.log(x));

let myarr1 = [4, 5]
let myarr2 = [65, 65]
let merged = arr.concat(myarr2)
console.log(merged);

myarr1 = [343, 434, 544]
myarr2 = [3434, 54545, 656]
console.log(...myarr1, ...myarr2);

myarr1 = [234, 545, 654, 432]
myarr.sort((a,b) => a - b);

myarr1 = [434, 54, 546, 6555]
myarr.sort((a, b) = a - b );
