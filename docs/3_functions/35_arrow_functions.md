# Стрелочные функции (Arrow Functions)

В предыдущих главах мы уже познакомились с понятием **"Function Expression"** и отметили, что существует более читабельный и лаконичный вариант синтаксиса.

## О Синтаксисе `arrow function`

> [!IMPORTANT]
> `Стрелочные функции` (arrow functions) - это синтаксическая форма записи функций, представленная в ES6, которая записывается с помощью символа `=>`.

```js
const func = (arg1, arg2, ...argN) => {
    // тело функции ...
}
```

Например,
```js
const add = (a, b) => {
    return a + b;
}
console.log(add(2, 3));
```

При определении функции, которая **только возвращает результат**, фигурные скобки `{ }` можно не использовать.
```js
const add = (a, b) => a + b;
```

Если у функции один аргумент, его можно записать без скобок.
```js
const sqr = n => n ** 2;

// это эквивалентно записи
// но в данном случае скобку опускают
const sqr = (n) => n ** 2;
```

Если функция не содержит аргументов, круглые скобки необходимо использовать.
```js
// Функция выводит сообщение "hello, world"
const printHello = () => {
    console.log("hello, world");
}
```

## Многострочные стрелочные функции

Как вы уже могли заметить из предыдущих примеров, или, возможно, догадались, стрелочные функции могут быть многострочными.

Для более детального разбора рассмотрим еще один пример.

```js
/**
 * Функция меняет местами элементы массива по заданным индексам.
 *
 * @param {Array} arr - Массив.
 * @param {number} a - Первый индекс.
 * @param {number} b - Второй индекс.
 */
const swap = (arr, a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

// Пример использования
const array = [1, 2];

swap(array, 0, 1); // [2, 1]
```

> [!TIP]
> В целом, **стрелочные функции** - это удобный инструмент, позволяющий сделать код более кратким и читаемым.

## Keep Learning ...

В третьей главе мы рассмотрели лишь основы работы с функциями. В дальнейшем мы планируем углубиться в изучение более продвинутых методов и затронуть более важные аспекты, связанные с функциями.