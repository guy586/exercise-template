// the function finds duplicate values in an array.
function dupValues(array) {
    let duplicate = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1 ; j < array.length; j++) {
        if (array[i] === array[j] && !duplicate.includes(array[i])) {
            duplicate.push(array[i]);
        }
      }
   }
   return duplicate;
}

console.log(dupValues([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));