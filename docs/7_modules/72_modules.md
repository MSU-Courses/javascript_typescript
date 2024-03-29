# Модули в JS

Как вы считаете, хранить весь код Вашего приложения в одном файле — хорошо или плохо?

С одной стороны, при небольшом объеме кода, состоящего из нескольких строк, это может и не вызывать серьезных проблем. 

Однако, по мере роста кодовой базы приложения, сохранение всего кода в едином файле становится неоптимальным решением, так как это может значительно осложнить его поддержку, усложнить отслеживание ошибок и усложнить сопровождение кода в целом.

Одним из методов решения данной проблемы состоит в разделении кода на файлы с соответствующим функционалом. Например, в одном файле могут содержаться функции, в другом - переменные. Этот подход способствует более чёткой структуре проекта и облегчает поддержку кода, позволяя лучше управлять его компонентами.

В настоящее время в JS существует несколько модульных систем, а именно, различные методы организации и управления модулями такие как **ECMAScript Modules (ESM)** и **CommonJS**. 

На данный момент чаще всего используют **ESM-модули**.

## Что такое модуль в JS?

Модуль в JS — это отдельный файл javascript.

Мы разбиваем наш код на несколько файлов (модулей) с целью использования определённых функций, переменных и классов из одного файла в другом, а также для обмена функциональностью между ними.

## ESM-модули

Рассмотрим модульную систему **ESM**.

Для использования функций и переменных из другого файла мы экспортируем их в одном файле, а в другом, где они нужны, мы выполняем их импорт. Импортировать их можно в несколько файлов одновременно. 

> [!NOTE] Мы можем импортировать только те переменные или функции, которые были экспортированы.

Для **экспорта** функций и переменных из файла используется ключевое слово `export`.

Для импорта функций или переменных из файла используется ключевое слово `import`.

Например, есть два файла `add.js`, с функцией `add(a,b)` и файл `index.js`, где содержится главный код программы.

```js
// add.js

// Экспортируем функцию add для использования в других файлах
export function add(a, b) {
    return a + b;
}
```

```js
// index.js

// Импортируем функцию add из файла add.js
import {add} from './add.js'

console.log(add(2, 3));
```

### Использование ESM-модулей в NodeJS

> [!NOTE]
> Поддержка ESM-модулей в Node.JS была введена с версии 13.

При попытке запустить файлы через `node`, вы столкнетесь с ошибкой: `SyntaxError: Cannot use import statement outside a module`. Это происходит потому, что для использования ESM модулей необходимо явно указать в исполняемом JS скрипте, что вы используете модули ESM.

Существует **два основных способа использования модулей** с Node.JS.

1. **Использование файлов с расширением .mjs**.

    Просто измените расширение ваших JavaScript файлов с .js на .mjs. **Например**, вместо `index.js` используйте `index.mjs`. Node.js будет автоматически интерпретировать эти файлы как ESM модули.

2. **Использование файла** `package.json`.

    Файл `package.json` - это особый файл в вашем проекте, который хранит информацию о проекте, такую как его название, версия, автор и другие метаданные. Чтобы использовать модули в Node.js, вы можете добавить в этот файл строку `"type": "module"`. Это указывает Node.js на то, что ваш проект использует ECMAScript модули.
    Для создания файла `package.json` в вашем проекте выполните следующие шаги:
    1. Создайте файл `package.json` в директории, где расположены ваши исполняемые файлы (файлы JavaScript), то есть в той же директории, где вы планируете выполнять код.
    2. После создания файла `package.json` откройте его и убедитесь, что он содержит следующее:
    ```json
    {
      "type": "module"
    }
    ```
   
### Использование ESM-модулей в браузере

Если мы хотим использовать модули в браузере, то необходимо явно указать, что файл JavaScript является модулем.

```html
<script type="module">
    import { add } from './add.js';

    console.log(add(2, 3));
</script>
```
```html
<script type="module" src="./add.js"></script>
```

### Область видимости

Даже если модули подключаются в одном HTML, без экспорта-импорта не получится пользоваться переменными или функциями из одного модуля в другом. Это происходит из-за того, что каждый модуль имеет свою собственную область видимости, и переменные и функции, определённые в одном модуле, не доступны напрямую в другом модуле без явного **экспорта** и **импорта**.

```html
<script type="module" src="./add.js"></script>
<script type="module" src="./player.js"></script>
```

### 'use strict' в модуле

Одной из важных частей является то, что в модуле всегда включен 'use strict', даже без явного указания. То есть все ограничения и возможности `use strict` включены в модуле. (См. подробнее [use strict](71_use_strict.md))

## CommonJS

Как было сказано выше, есть еще один способ экспортировать функции и переменные в JS. Данный способ уже считается не таким "хорошим", но продолжает использоваться во многих проектах, так как пока его нельзя заменить на ESM.

Для экспорта в **CommonJS** используются глобальные объекты `module` и `exports`.

```js
// math.js
module.exports.add = function (a, b) {
    return a + b;
}

module.exports.div = (a, b) => a / b;
```

Для импортирования необходимо воспользоваться функцией `require`.

```js
// index.js

// mathModule — объект, содержащий экспортированные функции
const mathModule = require('./math.js');

mathModule.add(2, 3);
```

## Когда выносить код в отдельный модуль?

Одной из наиболее распространённых задач, с которой сталкиваются разработчики, является определение момента, когда следует выносить код в отдельный модуль.

Несомненно, причин может быть много, но можно выделить две основные причины, по которым это рекомендуется делать.

1. **Повторное использование кода**. Если определенный кусок кода (сущность кода) используется в различных частях программы или в других проектах, то его целесообразно выделить в отдельный модуль. Это существенно повышает читаемость, облегчает поддержку и улучшает общую структуру программы.
2. **Разделение логики**. Когда программа становится достаточно сложной, важно разделять ее на логические блоки. Вынос определенной функциональности в отдельные модули помогает упростить отладку кода, делает его более модульным и позволяет разработчикам легче сосредоточиться на конкретных аспектах разработки без необходимости беспокоиться о других частях программы.