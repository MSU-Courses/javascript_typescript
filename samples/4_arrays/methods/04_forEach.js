/*
Пример №1
 */
const products = ['Товар 1', 'Товар 2', 'Товар 3'];
// Проходим по каждому элементу массива products
products.forEach(product => console.log(product));

/*
Пример №2
 */
const elements = document.querySelectorAll('.element');
// Проходим по каждому элементу с классом 'element'
// Устанавливаем текст каждого элемента
elements.forEach((element, index) => {
    element.textContent = `Элемент ${index + 1}`;
});

/*
Пример №3
 */
const data = [10, 20, 30, 40, 50];
const filteredData = [];

// Проходим по каждому элементу массива data
data.forEach(item => {
    if (item > 25) { // Если элемент больше 25
        filteredData.push(item); // Добавляем его в массив filteredData
    }
});

console.log(filteredData); // Выводим отфильтрованные данные в консоль
