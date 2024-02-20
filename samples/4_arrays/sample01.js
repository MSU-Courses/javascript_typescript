/**
 * Функция, создающая стек.
 * @param {Array} initialStack - Начальный стек (необязательный).
 * @returns {Array} - Массив, содержащий стек и функции для работы с ним.
 */
function useStack(initialStack = []) {
    let stack = initialStack;

    /**
     * Добавляет элемент в стек.
     * @param {*} item - Элемент для добавления в стек.
     */
    const push = (item) => {
        stack.push(item);
    };

    /**
     * Извлекает элемент из стека.
     * @returns {*} - Извлеченный элемент.
     */
    const pop = () => {
        return stack.pop();
    };

    /**
     * Проверяет, пуст ли стек.
     * @returns {boolean} - true, если стек пуст, иначе false.
     */
    const isEmpty = () => {
        return stack.length === 0;
    };

    return [
        stack,
        push,
        pop,
        isEmpty,
    ];
}

/**
 * Функция, разворачивающая строку при помощи стека.
 * @param {string} inputString - Входная строка.
 * @returns {string} - Развёрнутая строка.
 */
function reverseString(inputString) {
    // Создаём стек с помощью функции useStack
    const [stack, push, pop, isEmpty] = useStack();

    // Помещаем каждый символ строки в стек
    for (let i = 0; i < inputString.length; i++) {
        push(inputString[i]);
    }

    let reversedString = '';

    // Извлекаем символы из стека, чтобы сформировать развернутую строку
    while (!isEmpty()) {
        reversedString += pop();
    }

    return reversedString;
}

console.log(reverseString('hello')); // "olleh