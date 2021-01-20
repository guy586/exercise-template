// the function compute the union of two arrays. (sorted by a number)
function union(arr1, arr2) {
   let u = [];
   for (let x = 0 ; x < arr1.length ; x++) {
      if (!u.includes(arr1[x])) {
          u.push(arr1[x]);
      }  
   }
   for (let y = 0 ; y < arr2.length ; y++) {
    if (!u.includes(arr2[y])) {
        u.push(arr2[y]);
    }
   }
   return sortByNumer(u);
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));




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