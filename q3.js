// the function get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function first(arr, n){
    if (n === undefined) { 
        return arr[0];
    } if (arr === undefined || n < 0) { 
        return [];
    }
    return arr.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));