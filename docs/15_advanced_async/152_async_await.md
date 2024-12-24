# async/await

В предыдущих разделах мы изучили концепцию промисов - это абстракция, представляющая собой обещание выполнения определенного действия, которое может завершиться успешно или с ошибкой.

Существует еще один, более удобный способ управления промисами. Который называется "async/await".

## Асинхронные функции `async`

Ключевое слово async ставится перед функциями.

```js
// Обычные функции
async function add(a, b) {
    return a + b;
}

// Function Expression
const add = async function (a, b) { 
    return a + b;
}

// Arrow functions
const add = async (a, b) => {
    return a + b;
}
```

Значение данного слова очень простое. Функция перед которой стоит слово `async` всегда возвращает промис.

```js
async function add(a, b) {
    return a + b;
}

// эквевалентно
function add(a, b) {
    return new Promise((resolve) => {
        resolve(a + b);
    })
}
```

Вы также можете обработать результат с помощью `then`.

```js
async function add(a, b) {
    return a + b;
}

add(2, 3).then((result) => console.log(result)); // 5
```

## Ключевое слово `await`

Ключевое слово `await` ставится перед вызовом асинхронной функции и ожидает, пока промис будет разрешен, вернет результат и продолжит выполнение.

```js
async function getData() {
    const result = await add(2, 3);
    // Ожидание, пока промис будет разрешен
    // В переменной result будет храниться значение 5
    console.log(result);
}

getData();
```

То есть `await` используется вместо метода `then`.

> [!IMPORTANT]
> Ключевое слово `await` может использоваться только внутри асинхронных функций. Поэтому его нельзя использовать вне тела функций.

```js
async function add(a, b) {
    return a + b;
}

function getResult() {
    // const result = await add(2,3);
    // Ошибка, так как слово await может быть использовано только в async функциях
}


// const result = await add(2,3); 
// Ошибка, так как слово await может быть использовано только в async функциях

// корректно
async function getResult() {
    const result = await add(2, 3);
}
```

> [!TIP]
> Заметьте, что хотя слово await заставляет JavaScript ждать, пока промис выполнится, это не означает, что процессор будет занят только этой задачей. Пока промис не завершится, движок JavaScript может выполнять другие задачи, такие как выполнение других скриптов или обработка событий.

## Обработка ошибок

Но как быть, если возникает ошибка. Ведь промис может вернуть ошибку.

В данном случае стоит использовать конструкцию `try ... catch`.

```js
async function div(a, b) {
    if (b === 0) {
        throw new Error('Division by zero')
    }

    return a / b
}

async function getResult() {
    try {
        // Если в Promise будет сгенерировано исключение
        // то ошибка будет обработана в блоке catch
        const result = await div(1, 0)
        console.log(result)
    } catch (err) {
        console.error(err)
    }
}

getResult();
```

В настоящее время в новых проектах все чаще используется `async/await` вместо привычного метода с `then` и `catch`.