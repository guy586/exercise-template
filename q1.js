// the function return true if input is array and false if not.
function arrayCheck(input){
    return Array.isArray(input);
}
console.log(arrayCheck('w3resource')); // false
console.log(arrayCheck([1, 2, 4, 0])); // true