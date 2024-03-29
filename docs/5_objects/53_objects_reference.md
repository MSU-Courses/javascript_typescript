# Объект, как ссылочный тип данных

Мы обсуждали, что помимо примитивных типов данных существуют ссылочные типы данных. 

**Объекты являются примером ссылочного типа данных**. Это значит, что они хранятся и копируются "по ссылке".

> [!IMPORTANT]
> Простыми словами, **ссылочный тип данных** — это когда переменная не содержит само значение, а просто ссылается на место, где это значение хранится в компьютере.

Давайте рассмотрим простой пример для лучшего понимания.

```js
let message = "Hello";
let oneMoreMessage = message; 
message = "World";
console.log(message, oneMoreMessage); // "World" "Hello"
// Ясно, что изменяя переменную `message`, значение переменной `oneMoreMessage` не изменяется.
// Оно остается "Hello".
```

Объекты, включая массивы (*массивы - это также объекты*), работают по-другому, потому что они являются ссылочным типом данных.

Когда переменная содержит объект, она не хранит сам объект, а запоминает "адрес в памяти", где этот объект находится. То есть, она хранит "ссылку" на него. Можно сказать, что переменная держит записку с адресом объекта в компьютере.

Для лучшего понимания рассмотрим пример.
```js
const player1 = {
    username: "Alex",
    health: 100,
}

const player2 = player1;
console.log(player1.health, player2.health); // 100 100

player1.health = 30;
console.log(player1.health, player2.health); // 30 30
```

При изменении свойства у `player1`, это изменение влияет и на `player2`, потому что обе переменные указывают на один и тот же объект.

Это можно представить следующим образом.
* Переменная `player1` ссылается на определенную область памяти, где хранится сам объект.
![Object Reference](../../_images/object_one.png)
* Теперь переменная `player2` ссылается на ту же область памяти.
![Object Reference](../../_images/object_one.png)

То есть у нас только один экземпляр объекта, но на него ссылаются две переменные. Поэтому, если изменить одну переменную, это приведет к изменению и другой(-их).

Данный аспект может оказаться сложным для понимания. Если вы еще не до конца его освоили, не волнуйтесь. Главное — понимать, что происходит при присвоении объектов.

## Клонирование объектов

Если хотим сделать копию объекта и не хотим, чтобы две переменные указывали на один и тот же объект, можем использовать метод `Object.assign`.

> [!NOTE]
> `Object.assign` - это метод, который позволяет скопировать свойства одного объекта в другой. Проще говоря, он позволяет создать копию объекта.

Синтаксис:

`Object.assign(target, ...sources)`

* `target`: Целевой объект, в который будут скопированы свойства.
* `sources`: Один или несколько объектов, свойства которых будут скопированы в целевой объект.

Рассмотрим два примера.

```js
const player = {name: "Alex"};

const skills1 = {skill1: "Jump"};
const skills2 = {skill2: "Run"};

// Копируем все свойства из skills1 и skills2 в player
Object.assign(player, skills1, skills2);

// Теперь player = { name: "Alex", skill1: "Jump", skill2: "Run" }
// Если мы изменим свойства skills1 или skills2, это не повлияет на player.
```

```js
const player1 = {name: "John", age: 30};

// Копируем все свойства объекта `player1` в пустой объект и возвращаем его
const player2 = Object.assign({}, player1);

console.log(player1); // Значение переменной player1: {name: "John", age: 30}
console.log(player2);   // Значение переменной player2: {name: "John", age: 30}
```
