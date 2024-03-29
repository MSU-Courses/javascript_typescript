# Функции обратного вызова (Callback)

Функции обратного вызова (или колбэки) являются одной из ключевых концепций в контексте JavaScript. Они используются повсеместно и почти везде, однако не всегда полностью понимается их цель, в результате чего их применение может быть некорректным или излишним.

## Что такое `callback`?

> [!IMPORTANT]
> `Callback` (колбэк, функция обратного вызова) — это функция, передаваемая в другую функцию в качестве аргумента и вызываемая позднее.

Как мы уже упоминали, в JavaScript функция также является значением. Поэтому функции, подобно другим данным, могут быть переданы в качестве аргументов другой функции.

Например, можно ли передать число в качестве аргумента функции?
```js
function add(a, b) {
    // ...
}
const a = 3, b = 5;
add(a, b); // число легко передаётся в функцию
```

Также мы можем передавать функции в качестве значений.
```js
function func(number, otherFunc) {
    // ...
    let a = 3; let b = 4;
    otherFunc(a, b); // вызываем функцию `otherFunc` в функции `func`.
}

const otherFunc = function (a, b) {
    return a + b;
}

func(1, otherFunc);  // успешно передаём другую функцию в качестве аргумента
```

## Применение функций обратного вызова

Как уже было сказано, колбэки применяются повсеместно.

В качестве примера рассмотрим реальный случай использования.

**Пример №1**
```js
// Обработка соглашения пользователя
// isAgree — Булево значение, указывающее, согласен ли пользователь.
// yes — Функция, которая будет вызвана, если пользователь согласен.
// no — Функция, которая будет вызвана, если пользователь не согласен.
function userAgree(isAgree, yes, no) {
    if (isAgree) {
        yes();
        return;
    }
    no();
    return;
}

// функция для обработки согласия пользователя
function processAgreement() {
    console.log("Пользователь согласен");
    // Дальнейшая обработка в случае согласия пользователя
}

// функция для обработки отказа пользователя
function processDisagreement() {
    console.log("Пользователь не согласен");
    // Дополнительная обработка в случае отказа пользователя
}

const isUserAgree = confirm("Вы согласны учавствовать в опросе?");

userAgree(isUserAgree, processAgreement, processDisagreement);
```

**Пример №2**
```js
// Функция, которая принимает два числа и callback функция (operation)
function applyOperation(a, b, operation) {
    // функция которая была передана в качестве аргумента
    // выполняется внутри другой функции
    return operation(a, b);
}

// Функция для сложения двух чисел
function add(a, b) {
    return a + b;
}

// Функция для умножения двух чисел
function multiply(a, b) {
    return a * b;
}

// Вызов функции applyOperation с операцией сложения
applyOperation(5, 3, add);
```

### Определение callback-функции непосредственно при вызове функции

В некоторых случаях может быть более удобно определять callback-функцию непосредственно при вызове функции. Это может сделать код более кратким и читаемым.

```js
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Определение callback-функции 
// непосредственно при вызове applyOperation
applyOperation(4, 5, function(a, b) {
    return a + b;
});
```

**Преимущества определения callback-функции непосредственно при вызове функции**:

* **Краткий код**: В некоторых случаях это может сделать код более кратким и читаемым.
* **Локальная область видимости**: Callback-функция имеет локальную область видимости, что может повысить читаемость и модульность кода.

Однако, важно отметить, что такой подход может сделать код менее понятным в некоторых случаях, поэтому если код становится слишком сложным или непонятным, рекомендуется использовать именные callback-функции.

## Анонимные функции

В JavaScript вы часто будете встречать анонимные функции. Некоторые могут путать их с именованными функциями.

Чтобы разобраться, запомните простое правило:

> [!NOTE]
> Если после ключевого слова function указано имя, то функция является **именованной**.
> 
> Во всех остальных случаях функция является **анонимной**.
> 
> Способ объявления не влияет, будет ли функция анонимной или именованной.

```js
// анонимная функция
const sum = function(a, b) {
  return a + b;
};

// именованная функция
const sum = function sum(a, b) {
    return a + b;
}

// в качестве аргумента передается анонимная функция
applyOperation(4, 5, function (a, b) {
    return a + b;
});

// в качестве аргумента передается именованная функция
applyOperation(4, 5, function sum(a, b) {
    return a + b;
});
```

**Именованные функции**:
* Могут быть вызваны по своему имени.
* Легче отлаживать.
* Могут быть рекурсивными.

**Анонимные функции**:
* Не имеют имени.
* Используются в основном как аргументы других функций.
* Могут быть использованы только один раз.


> [!NOTE]
> При работе с массивами мы подробнее изучим использование `колбэк-функций`.