/*
Пример №1
 */
const words = ['apple', 'banana', 'cherry', 'date'];
const allLengthGreaterThan3 = words.every(word => word.length > 3);
console.log(allLengthGreaterThan3); // Выведет: false, так как не все слова имеют длину больше 3

/*
Пример №1
 */
// <ul id="myList">
//     <li className="active">Item 1</li>
//     <li className="active">Item 2</li>
//     <li className="active">Item 3</li>
// </ul>

// Получаем все элементы списка
const listItems = document.querySelectorAll('#myList li');
// Проверяем, имеет ли каждый элемент класс 'active'
const allActive = Array.from(listItems).every(item => item.classList.contains('active'));
console.log(allActive); // Выведет: true, так как все элементы имеют класс 'active'
