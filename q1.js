function arrayCheck(input){
    return Array.isArray(input);
}
console.log(arrayCheck("f")); // false
console.log(arrayCheck(["f"])); // true