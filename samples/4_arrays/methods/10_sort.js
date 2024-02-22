/*
Пример №1
 */
const numbers = [5, 2, 9, 1, 7];
// Функция сравнения принимает два числа a и b и возвращает результат их вычитания
// Это позволяет сортировать числа в порядке возрастания
numbers.sort((a, b) => a - b);
console.log(numbers); //  [1, 2, 5, 7, 9]

/*
Пример №2
 */
const words = ['яблоко', 'апельсин', 'банан', 'груша'];
// Функция сравнения сортирует строки по убыванию их длины
words.sort((a, b) => b.length - a.length);
console.log(words); // ['апельсин', 'яблоко', 'груша', 'банан']