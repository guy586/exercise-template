function arrayCheck(input){
    return Array.isArray(input);
}
console.log(arrayCheck('w3resource')); // false
console.log(arrayCheck([1, 2, 4, 0])); // true