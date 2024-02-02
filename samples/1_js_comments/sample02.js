// Определение переменной для подсчета
let count = 0;

/**
 * Функция incrementCount увеличивает значение переменной count на 1.
 *   Это нужно для отслеживания количества выполненных операций.
 *
 * @function
 * @name incrementCount
 * @returns {number} - Новое значение переменной count.
 */
function incrementCount() {
    count++;
    return count;
}

// Пример использования функции и вывода результата в консоль
console.log(`Текущее значение count: ${count}`);
console.log(`Увеличиваем count: ${incrementCount()}`);
console.log(`Новое значение count: ${count}`);
