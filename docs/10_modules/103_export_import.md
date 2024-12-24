# Экспорт и импорт

Поскольку использование CommonJS становится менее распространённым, мы обсудим функциональность ESM модулей, в
частности, их экспорт и импорт. О том, что представляет собой экспорт и импорт, мы уже говорили
в [главе 7.2](72_modules.md).

## Что можно экспортировать?

В Javascript из модуля можно экспортировать: функции, переменные, константы, классы.

## Именованный импорт/экспорт

В случае, когда необходимо экспортировать несколько сущностей (2+) из файла, то используется **именованный экспорт**.

Данный экспорт выполняется с помощью инструкции `export` (была рассмотрена в главе 7.2).

```js
// player.js

// Экспорт константы (объекта)
export const player = {
    username: "Alex",
    age: 34,
}

// Экспорт функции
export function div(a, b) {
    return a / b;
}

// Экспорт класса
export class Inverntory {
    // code
}

// Экспорт переменной (массива)
export let inventory = [new Inverntory(), /* ... */]
```

Часто в ситуациях, когда требуется экспортировать множество функций и/или переменных из файла, применяется подход,
заключающийся в их групповом экспорте (группированный экспорт) внизу файла с использованием единственной директивы
экспорта (`export`).

```js
const player = {
    username: "Alex",
    age: 11,
    inventory: [],
};

function addToInventory(item) {
    player.inventory.push(item);
}

// группированный экспорт
export {
    player,
    addToInventory
};
```

Для именного импорта используется функция `import`.

```javascript
// main.js
import {player, div, inventory, Inventory} from './player.js'
```

```javascript
// Импортирование по одной сущности
import {player} from './player.js'
import {div} from './player.js'
```


## Импорт/Экспорт по умолчанию

Бывают ситуации, когда из модуля необходимо импортировать только одну сущность (например, у вас в модуле только один
класс), используется экспорт по умолчанию. Для этого используется конструкция `export default <сущность>`

```javascript
// player.js
const player = {
    username: "Aaron",
    age: 33,
}

export default player;
```

> [!NOTE]
> С помощью экспорта по умолчанию  `export default` я могу экспортировать только одну сущность.

```javascript
const add = (a, b) => a + b;
const div = (a, b) => a / b;

// нельзя экспортировать две сущности "по умолчанию"
export default add;
export default div;
```

При импорте по умолчанию происходит загрузка только этой сущности, а не объекта с несколькими сущностями, поэтому мы
можем её импортировать без использования скобок `{ }`.

```javascript
// main.js
import player from './player.js'

console.log(player.username);
```

## `export` vs `export default`

Перед тем как перейти к дальнейшему рассмотрению темы, сравним `export` и `export default`.

* Использование именного экспорта/импорта (`export`).

```js
// player.js
export const player = {
    username: "Alex",
    hp: 200,
    xp: 10,
}

// index.js
import {player} from './player.js'
```

* Использование экспорта/импорта по умолчанию.

```js
// player.js
const player = {
    username: "Alex",
    hp: 200,
    xp: 10,
}

export default player;

// index.js
import player from './player.js'
```


| Именованный экспорт          | Экспорт по умолчанию     |
|------------------------------|--------------------------|
| `export consy player {...}`  | `export default player`  |
| `import { player } from ...` | `import player from ...` |

## Переименование импорта

При импорте некоторой сущности можно изменить её имя с помощью ключевого слова `as`.

```javascript
// player.js
export const player = {
    username: "Maron",
    age: 11,
}


// index.js
import {player as localPlayer} from './player.js' 
```

Также можно изменить имя уже на этапе экспорта.

```javascript
// player.js
const player = {
    username: "Maron",
    age: 11,
}

export {player as localPlayer}

// index.js
import {localPlayer} from './player.js' 
```

## Импорт всего модуля

Часто бывает, что нам необходимо импортировать модуль целиком, без его отдельных частей. Например, в файле может содержаться код, который должен быть выполнен. 

В таком случае достаточно просто написать `import <название_файла>`.

```javascript
// init.js
function init() {
    console.log("Initializing...");
    // code;
}

init();

// index.js
import './init.js';
```

## Импорт всего содержимого

В отличие от импорта всего модуля, мы можем хотеть импортировать все экспортирумые сущности (то есть только то, что было экспортировано в модуле). В данном случае используется символ `*`.

```js
// player.js
export const player = {
    username: "Maron",
    age: 11,
    inventory: []
}

export function addToInventory(item) {
    player.inventory.push(item);
}

// index.js
import * as playerModule from './player.js'

playerModule.addToInventory("stick");
```