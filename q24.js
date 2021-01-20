// the function remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
function removeUn(arr) {
    let n = [];
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] !== null && arr[i] !== 0 && arr[i] !== '' && arr[i] !== false && arr[i] !== undefined && !isNaN(arr[i])) {
            n.push(arr[i]);
        }
    }
    return n;
}

console.log(removeUn([NaN, 0, 15, false, -22, '',undefined, 47, null]));