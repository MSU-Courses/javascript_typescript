/*
Пример №1
 */
let colors = ['красный', 'зеленый', 'синий'];
const searchTerm = 'зеленый';

// Определяем индекс искомого элемента в массиве
const index = colors.indexOf(searchTerm);

if (index !== -1) {
    colors.splice(index, 1); // Удалить элемент по его индексу
    console.log(`Элемент ${searchTerm} удален из массива.`);
} else {
    console.log(`Элемент ${searchTerm} не найден в массиве.`);
}
