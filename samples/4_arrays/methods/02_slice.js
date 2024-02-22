/*
Пример №1
 */
const fullList = ['item1', 'item2', 'item3', 'item4', 'item5'];
const displayedItems = fullList.slice(0, 3); // Отобразить первые три элемента списка
console.log(fullList); // ['item1', 'item2', 'item3', 'item4', 'item5']
console.log(displayedItems); // ['item1', 'item2', 'item3']

/*
Пример №2
 */
const arr = [1, 2, 3, 4, 5];
const lastThreeItems = arr.slice(-3); // Извлечь последние три элемента массива
console.log(lastThreeItems); // [3, 4, 5]