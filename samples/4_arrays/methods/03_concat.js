const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // [1, 2, 3, 4, 5, 6]
console.log(array1.concat([1, 2, 3], [4, 5, 6], ['a', 'b'])); // [ 1, 2, 3, 1, 2, 3, 4, 5, 6, 'a', 'b' ]