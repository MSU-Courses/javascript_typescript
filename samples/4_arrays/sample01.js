function useStack(initialStack = []) {
    let stack = initialStack;

    const push = (item) => {
        stack.push(item);
    };

    const pop = () => {
        return stack.pop();
    };

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

function reverseString(inputString) {
    // Создаем стек с помощью функции useStack
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

console.log(reverseString('hello')); // Вывод: 'olleh'
