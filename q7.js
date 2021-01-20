let array = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
console.log(sortByNumer(array));

function sortByNumer(arr){
    let holder = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        for (let j = i ; j < arr.length ; j++) {
            if (arr[i] > arr[j]) {
                holder = arr[i];
                arr[i] = arr[j];
                arr[j] = holder;
            }
        }
    }
    return arr;
}