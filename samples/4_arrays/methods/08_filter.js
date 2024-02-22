/*
Пример №1
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Фильтрация четных чисел
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

/*
Пример №2
 */
const words = ['apple', 'banana', 'grape', 'orange', 'pineapple'];
// Фильтрация слов, начинающихся на букву 'b'
const bWords = words.filter(word => word.startsWith('b'));
console.log(bWords); // [ 'banana' ]