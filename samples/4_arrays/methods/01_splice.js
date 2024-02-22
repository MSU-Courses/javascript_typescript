/*
Пример №1
 */
const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(2, 2); // Удалить 2 элемента, начиная с индекса 2
console.log(numbers); //  [1, 2, 5]
console.log(removed); // [3, 4]