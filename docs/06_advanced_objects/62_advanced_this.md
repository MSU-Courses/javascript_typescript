# Продвинутая работа с `this`

В предыдущей части мы разобрались в том, что представляет собой ключевое слово `this` и как оно используется в контексте объектов. Также мы немного коснулись его роли в функциях.

В данной части мы попытаемся более подробно разобраться в том, как работает ключевое слово `this`.

Сама "_философия_" этого слова довольно сложна, и его понимание приходит лишь с опытом и практикой.

Тем не менее мы рассмотрим некоторые аспекты, связанные с этим ключевым словом.

## Что такое `this`

Грубо говоря, ключевое слово `this` — это ключевое слово в JavaScript, которое указывает на некоторый объект, к свойству которого мы можем получить доступ в той или иной функции.

Еще говорят, что `this` — это контекст выполнения.

### Что такое `контекст выполнения`?

Но что такое контекст выполнения и зачем он нужен? 

> [!NOTE]
> Простыми словами, **контекст выполнения в JavaScript** - это некоторая обстановка (или окружающая среда), в которой выполняется код. То есть в конкретной среде, где код запускается, есть доступные объекты, функции и переменные, с которыми он может взаимодействовать.

Давайте проведем пример из реальной жизни:

Представьте, что ваш дом - это ваша программа, а **контекст выполнения** - это все, что находится внутри дома и влияет на то, как вы взаимодействуете с вашими предметами. 

Например, когда вы находитесь в кухне, контекст выполнения для вас - это кухня. В этой обстановке вы можете использовать кастрюли, сковородки и другие кухонные предметы, которые доступны именно в этой комнате.

Если вы захотите что-то другое, вам придется выйти из кухни и зайти в другую комнату - и тогда контекст выполнения изменится.

Но несмотря на это, весь ваш дом остается **глобальным контекстом**, который доступен из любой комнаты.

Точно так же в JavaScript контекст выполнения определяет, какие объекты и переменные доступны внутри функции или метода, и как они взаимодействуют между собой во время выполнения кода.

Так вот, ключевое слово `this` указывает на текущий контекст выполнения.

## Глобальный контекст

Глобальный контекст выполнения - это контекст, в котором код выполняется на самом верхнем уровне программы. Здесь определяются глобальные переменные и функции, доступные в любой части программы без необходимости явного указания контекста выполнения.

То есть, это верхний уровень, где **начинается выполнение вашего кода**.

Что будет если мы будем использовать `this` глобально? То есть зайдем в браузер или в консоль NodeJS и выведем значение `this`?

Попробуйте выполнить данный код в браузере и в среде NodeJS.
```js
console.log(this);
```

В данном случае, когда вы используете `console.log(this)`, он покажет вам **объект**, который представляет глобальный контекст. Данный объект, называется — **глобальный объект**.

> [!NOTE]
> **Глобальный объект в JavaScript (`Global Object`)** представляет собой специальный объект, который доступен в любой точке кода в программе на JavaScript. В браузере глобальный объект называется `window`, а в среде выполнения Node.js - `global`.

Простыми словами, **глобальный объект** - это основной объект вашей программы.

**Например**, в глобальном объекте хранится объект `console`, который используется для взаимодействия с консолью. То есть для вывода в консоль мы можем написать `this.console.log("hello");`, но в данном случае this не требуется использовать, так как объект `console` уже доступен напрямую.

Либо, например, метод `alert()` отсутствует в глобальном объекте `Node.js` (`global`), так как в среде `Node.js` alert'ов нет. Однако, в глобальном объекте `window` браузера этот метод доступен и может быть использован либо с префиксом `window.alert("Hello")`, либо без него `alert("Hello")`.

## `this` в функциях

Теперь необходимо понять, что если указывать `this` в функциях, а не в глобальном контексте?

На самом деле, алгоритм довольно сложный, и для его понимания требуется освоение некоторых других методов. Однако, мы рассмотрим лишь некоторые его аспекты.

* Если функция является `методом объекта`, то она автоматически связывается с этим объектом и получает доступ к его свойствам через ключевое слово this.

```js
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
  displayInfo: function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
};

car.displayInfo(); // Выведет: Brand: Toyota, Model: Camry, Year: 2020
```

* Если функция не привязана к какому-либо объекту явно или неявно и не вызвана с использованием ключевого слова `new` (см. главу 6.3), ключевое слово `this` внутри неё ссылается на глобальный объект.
```js
function greet() {
  console.log(this);
}

greet(); // Выведет глобальный объект
```

Рассмотрим еще один пример:
```js
const player = {
   greet() {
      const oneMoreGreet = function () {
         // Контекст выполнения будет глобальным объектом.
         // так как функция объявлена не как метод (то есть не привязана к объекту)
         console.log(this);
      }
   }
}
```
Внутри метода `greet()` мы объявляем функцию `oneMoreGreet` при помощи обычного функционального выражения. Поскольку функция `oneMoreGreet` объявлена внутри метода объекта, но _не является его методом_ (то есть не привязана к объекту), при вызове этой функции контекст выполнения будет **глобальным объектом**.

## `this` в стрелочных функциях

> [!NOTE]
> Одно из отличий стрелочных функций заключается в том, что у стрелочных функций нет своего собственного `this`.

В случае использования [стрелочной функции](../03_functions/35_arrow_functions.md) значение `this` будет таким же, как у функции на уровне выше.

```js
const person = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
    const func = () => {
        //  Даже внутри стрелочной функции значение this остается таким же
        //  как и во внешней функции, то есть оно ссылается на объект player.
        console.log(`Inside arrow function: Hello, ${this.name}!`);
    };
    func();
  }
};


// 
person.sayHello(); // Выведет:
                   // Hello, John!
                   // Inside arrow function: Hello, John!
```

Как думаете, что будет, если вместо стрелочной функции `func()` использовать обычную? В качестве подсказки используйте предыдущий пункт.

> [!NOTE]
> Эти правила действуют в **нестрогом режиме**, и о том, что такое **строгий режим** будет рассмотрено чуть позже.


В данной главе были рассмотрены лишь нюансы продвинутой работы с ключевым словом `this`. Как уже было упомянуто ранее, существует множество подводных камней в данной "_философии_". Однако, такие ситуации встречаются не так часто, и вы сможете рассмотреть их чуть позже, когда будете "_морально и физически_" готовы.

## References

Для более подробного ознакомления с ключевым словом `this`, советую Вам следующую статью.
* Ключевое слово this в JavaScript. Полное* руководство, Хабр, 2019 [электронный источник]. [URL](https://habr.com/ru/articles/464163/).