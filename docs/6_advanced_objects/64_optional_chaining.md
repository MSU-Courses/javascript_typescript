# Оператор опциональной последовательности

Следующая важная тема называется оператор опциональной последовательности. 

Вероятно, вы уже часто сталкивались с использованием такого оператора в коде, как `?.`, например, `player?.description?.about`.

Но что же он означает и зачем он нужен? Давайте попробуем разобраться.

## "Несуществующее свойство"

Часто возникает ситуация, когда необходимо работать с объектами, свойства которых нам неизвестны. Например, когда у нас есть объект, содержащий данные из формы (нет уверенности, что пользователь заполнил все поля). И если мы попытаемся обратиться к свойству объекта, то произойдет ошибка.

Если свойство объекта отсутствует, то выражение вернет `undefined`. Однако, если у нас возникает более глубокая вложенность, то могут возникать различные ошибки.

```javascript
const user = {
    name: "Alex",
}

console.log(user.age); // undefined
console.log(user.address.home); // Ошибка: Невозможно прочитать свойства undefined
```

Ошибка возникает потому, что `user.address` равен `undefined`, и затем мы пытаемся получить свойство `home` из `undefined`.

Давайте рассмотрим еще один пример. Попытаемся извлечь содержимое определенного HTML-элемента.

```javascript
const btnText = document.getElementById("button").innerText;
// Если элемент с id "button" не будет найден, будет сгенерирована ошибка
```

Итак, чтобы избежать ошибки, придется прибегнуть к следующим манипуляциям:

```js
// Вариант 1
const btnText = document.getElementById("button") ? document.getElementById("button").innerText : undefined;

// Вариант 2
const btnText = document.getElementById("button") && document.getElementById("button").innerText;
```

Однако в данном случае наш код становится менее читаемым.

## Оператор `?.`

На решение данной проблемы приходит оператор **опциональной последовательности** `?.`, или так называемая "опциональная цепочка".


Если выражение до `?.` равно `undefined` или `null`, то оператор `?.` останавливает вычисление и возвращает `undefined`.

Рассмотрим два пример:

```js
const user = {};

const userHome = user.address?.home;

// Поскольку user.address == undefined,
// в userHome возвращается undefined

console.log(userHome); // undefined
```

```js
const btnText = document.getElementById("button")?.innerText;

// Поскольку  document.getElementById("button") == null, так как на странице нет элемента
// в btnText возвращается undefined

console.log(btnText); // undefined
```

Если оператор `?.` расположен перед переменной, которая не объявлена, программа выдаст ошибку.
```js
// Если user не объявлен, то будет ошибка
console.log(user?.address);
```

## Оператор `?.` с методами и со скобочной нотацией

Оператор `?.` работает также с методами и со скобочной нотацией.

```js
const player = {
    username: "Admin",
};

player.greet?.(); // undefined, так как метода greet() нет.
player.address?.["home"]; // undefined,
```