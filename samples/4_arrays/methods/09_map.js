/*
Пример №1
 */
const numbers = [1, 2, 3, 4, 5];
// Применяем метод map() к массиву чисел, вычисляя квадрат каждого числа
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); // =[1, 4, 9, 16, 25]

/*
Пример №2
 */
const fruits = ['Яблоко', 'Банан', 'Апельсин'];
const list = document.getElementById('list');
// Применяем метод map() к массиву строк, создавая HTML-элементы списка
const fruitItems = fruits.map(fruit => `<li>${fruit}</li>`);
// Обновляем содержимое списка HTML с помощью созданных элементов
list.innerHTML = fruitItems.join('');