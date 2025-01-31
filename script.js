//////////////////TASK 1//////////////////
let nums = [1, 2, 5, 6, 22, 44, 66, 3, 4, 17, 22, 444];
let sum = 0;
nums.forEach(num => sum += num);
console.log(sum); 




//////////////////task 2 ////////////////////


let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null, "29.01.1992"];

let string = arr.filter(item => typeof item === 'string');
console.log("Strings:", string);

let number = arr.filter(item => typeof item === 'number');
console.log("Numbers:", number);

let boolean = arr.filter(item => typeof item === 'boolean');
console.log("Booleans:", boolean);

let object = arr.filter(item => item === null);  
console.log("Objects (nulls):", object);




