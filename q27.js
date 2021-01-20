let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
// the function retrieve the value of a given property from all elements in an array.
function retrieve(arr, prop) {
    let n = [];
    for (let i = 0 ; i < arr.length ; i++) {
        n.push(arr[i][prop]);
    }
    return n;
}
console.log(retrieve(library, 'title'));
console.log(retrieve(library, 'author'));