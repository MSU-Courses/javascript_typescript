/*
Пример №1
 */
const numbers = [1, 2, 3, 4, 5];
// Используем метод reduce() для суммирования всех элементов массива
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Выведет: 15

/*
Пример №2
 */
const items = ['apple', 'banana', 'orange'];
// Используем метод reduce() для создания списка элементов HTML
const htmlList = items.reduce((accumulator, currentValue) => accumulator + `<li>${currentValue}</li>`, '');
console.log(htmlList); // '<li>apple</li><li>banana</li><li>orange</li>'

/*
Пример №3
 */
const words = ['Hello', ' ', 'world', '!'];
// Используем метод reduce() для конкатенации строк из массива
const phrase = words.reduce((accumulator, currentValue) => accumulator + currentValue, '');
console.log(phrase); //  'Hello world!'
