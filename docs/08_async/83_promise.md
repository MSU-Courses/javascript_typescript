# Promise (Промисы)

Одной из обёрток над асинхронным JS-кодом является `Promise`. Эта тема часто оказывается сложной для студентов, но мы попробуем разобрать основы.

Начнем с отдаленного примера.

Представьте, что вы являетесь курьером. Вам поступил заказ на определенное блюдо.

1. Вы отправились к ресторану, откуда необходимо забрать заказ.
2. Прибыв в ресторан, вы ожидаете, пока повар приготовит заказ. В это время Вы можете выполнять свои действия.
3. Если еда будет успешно приготовлена, то вы заберете её и доставите покупателям.
4. В случае, если приготовление заказа не удается по какой-то причине (например, отсутствие ингредиентов), вы уведомите покупателей о том, что их заказ не может быть выполнен.

Данную ситуацию из реальной жизни можно перенести в контекст промисов.

1. Создание промиса, представляет заказ на определенное блюдо.
2. Ожидание выполнения промиса, представляет ожидание приготовления заказа в ресторане.
3. Если выполнение промиса завершается успешно, то курьер забирает заказ и доставляет его покупателям.
4. В случае возникновения ошибки в процессе выполнения промиса, курьер уведомляет покупателей о невозможности выполнить заказ.

## Что такое Promise?

`Промис в JavaScript` - это объект-обертка, который обеспечивает возможность асинхронного выполнения функций, переданных в него.
Промисы были созданы для организации последовательного выполнения асинхронного кода.


Сам по себе промис имеет три состояния:
- ⏳ pending («ожидание»)
- ✅ fulfilled («выполнено успешно»)
- ❌ rejected («выполнено с ошибкой»)

Промис **может быть разрешён** в случае успешного выполнения без ошибок и получения необходимых данных, либо промис **может быть отклонён** в случае возникновения ошибки.


```js
const promise = new Promise(function (resolve, reject) {
    // функция-исполнитель (executor) 
    // "готовить еду для курьера"
});
```

Функция, переданная в объект Promise, называется **исполнителем**. При создании промиса эта функция запускается автоматически. В контексте аналогии выше, можно сказать, что эта функция играет роль поваров, которые готовят заказ для курьера.

Функция принимает два параметра:
- `resolve(value)` — вызывается для передачи успешного результата выполнения промиса.
- `reject(value)` — вызывается для передачи ошибки или отклонения промиса.

То есть функция внутри промиса, называемая исполнителем (или исполняемой функцией), должна обязательно вызвать либо функцию `resolve(value)`, либо функцию `reject(value)` (или обе).


```javascript
const promise = new Promise(function (resolve, reject) {  
    // через 1 секунду промис вызовет функцию resolve
    setTimeout(() => resolve(1), 1000);
});
```

```js
const promise = new Promise(function (resolve, reject) {
    // через 1 секунду промис вызовет функцию resolve
    setTimeout(() => reject(new Error("This is an error!")), 1000);
}); 
```

## Потребители `then` и `catch`

Теперь, когда функция resolve или reject была вызвана внутри промиса, как быть с данными?

Функции-потребители могут быть записаны с помощью методов `then` и `catch`.

### then

Метод `then` объекта промиса используется для добавления обработчиков, которые будут выполнены после того, как промис будет разрешён (resolved) или отклонён (rejected).

```javascript
// При создании объекта Promise запустится функция которую мы передали.
const promise = new Promise(function (resolve, reject) {
    // Задержка в 1 секунду, после чего промис разрешится
    setTimeout(() => resolve("Hello, world"), 1000);
})

promise.then(
    // функция, которая будет вызвана при успешном разрешении промиса
    // Вывод сообщения в консоль
    (message) => console.log(message),
    // функция, которая будет вызвана при отклонении промиса
    // в нашем случае промис разрешили
    (error) => console.log(error),
)
```

Если бы в промисе мы вызвали функцию `reject()`, то есть отклонили бы Promise, была бы вызвана вторая функция `(error) => console.log(error)`.

### catch

Ещё одной очень распространённой конструкцией является обработка ошибок через `catch`. Необязательно передавать несколько функций в `then`.

```js
const promise = new Promise(function (resolve, reject) {
    // Задержка в 1 секунду, после чего промис разрешится
    setTimeout(() => resolve("Hello, world"), 1000);
})

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
```

Методы `then` и `catch`, по аналогии выше можно представить, как курьера, который определяют действия в зависимости от результата операции:
1. Если заказ был успешно приготовлен, то выполняется функция `then`, где курьер получает заказ `result` и приступает к его доставке.
2. Если заказ не был приготовлен по какой-либо причине, то срабатывает функция `catch` с ошибкой `error`, которую курьер также может обработать.

### finally

Методы выше напоминают конструкцию `try-catch`, поэтому здесь также присутствует метод `finally`. Он позволяет выполнить определенные действия независимо от того, завершилось ли выполнение промиса успешно или с ошибкой.

Пример кода:

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Успешное выполнение"), 1000); // мы отклонили Promise
});

promise.then(result => {
    console.log(result); // Вывод результата успешного выполнения
}).catch(error => {
    console.error("Ошибка:", error); // Обработка ошибки
}).finally(() => {
    console.log("Блок finally: выполняется независимо от результата промиса");
});
```

Рассмотрим еще один пример.
```javascript
// Эта функция performCalculation принимает значение value и возвращает промис.
// Внутри промиса используется setTimeout для эмуляции асинхронной операции.
// После заданной задержки промис успешно завершается с результатом value * 2.
function performCalculation(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value * 2);
    }, 1000);
  });
}

// Пример использования:
// Вызываем функцию performCalculation с аргументом 5.
// После выполнения операции, связанной с промисом, обработываем результат с помощью метода then.
// В случае ошибки при выполнении промиса, обрабатываем её с помощью метода catch.
performCalculation(5)
  .then(result => {
    console.log('Результат вычисления:', result); // Выводим результат вычисления
  })
  .catch(error => {
    console.error('Ошибка при выполнении вычислений:', error); // Выводим сообщение об ошибке
  });
```

Сами промисы без использования функций, таких как `setTimeout`, встречаются менее часто, однако они являются важной частью концепции асинхронного программирования и могут использоваться в различных контекстах для обработки асинхронных задач.