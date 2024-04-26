# Основы TypeScript

Как было сказано раньше, TypeScript - это строго типизированный язык программирования, который компилируется в JavaScript. Поэтому, первым шагом является изучение типов данных в TypeScript.

## Типы данных

В TypeScript есть несколько типов данных, которые можно использовать для объявления переменных, аргументов функций и возвращаемых значений функций. Рассмотрим основные типы данных в TypeScript.

### number

Тип `number` используется для хранения числовых значений. Пример:

```typescript
const a: number = 10;
const b: number = 20;
console.log(a + b);
```

### string

Тип `string` используется для хранения строковых значений. Пример:

```typescript
const name: string = "John";
console.log("Hello, " + name);
```

### boolean

Тип `boolean` используется для хранения логических значений `true` или `false`. Пример:

```typescript
const isTrue: boolean = true;
const isFalse: boolean = false;
console.log(isTrue, isFalse);
```

### undefined

Тип `undefined` используется для хранения значения `undefined`. Все неинициализированные переменные имеют значение `undefined`. Пример:

```typescript
let x: number;
console.log(x); // undefined
```

### null

Тип `null` используется для хранения значения `null`. `null` - это отдельный тип данных, который имеет только одно значение `null`. Пример:

```typescript
const y: null = null;
console.log(y);
```

### any

Тип `any` используется для хранения значений любого типа. Пример:

```typescript
let z: any = 10;
let b: any = "Hello";
z = "Hello";
z = true;
console.log(z);
```

Тип `any` не рекомендуется использовать, так как он нарушает принципы строгой типизации TypeScript.

Но иногда его использование оправдано, например, когда вы работаете с данными из внешних источников, где типы данных заранее неизвестны, или когда вам нужно временно обойти строгую типизацию для быстрой разработки прототипа или исправления ошибок.

### unknown

Тип `unknown` похож на тип `any`, но более строгий. Переменная типа `unknown` не может быть присвоена другому типу данных напрямую, а `any` может. Пример:

```typescript
const a: unknown = 10;
const b: number = a; // Ошибка

const c: any = 10;
const d: number = c; // ОК
```

Но переменная типа `unknown` может быть присвоена другому типу данных после проверки типа. Пример:

```typescript
const a: unknown = 10;
if (typeof a === "number") {
  const b: number = a; // ОК
}
```

### void

Тип `void` используется для указания, что функция не возвращает значение. Пример:

```typescript
function logMessage(message: string): void {
  console.log(message);
}
logMessage("Hello, TypeScript!");
```

> [!TIP]
> Тип `void` можно опустить, так как TypeScript автоматически определяет тип `void` для функций, которые не возвращают значения.

### never

Тип `never` используется для указания, что функция никогда не завершится, функция которая выбрасывает исключение или функция, которая содержит бесконечный цикл.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // do something
  }
}
```

На первый взгляд, тип `never` может показаться бесполезным, но он очень полезен во многих случаях, например, для обработки ошибок или для оптимизации кода, для составления составных типов данных и т.д. Но на данном этапе мы не будем углубляться в детали использования типа `never`, так как это может затруднить понимание основ TypeScript.

### bigint

Тип `bigint` используется для хранения больших целых чисел. Пример:

```typescript
const bigNumber: bigint = 100n;
console.log(bigNumber);
```

### symbol

Тип `symbol` используется для хранения уникальных идентификаторов. Пример:

```typescript
const id: symbol = Symbol("id");
console.log(id);
```

### object

Тип `object` используется для хранения значений объектов. Пример:

```typescript
const user: object = {
  name: "John",
  age: 30,
};
console.log(user);
```

Тип `object` не рекомендуется использовать, так как он слишком общий и не предоставляет информацию о структуре объекта. Вместо этого рекомендуется использовать **интерфейсы** или **типы данных**, о которых мы поговорим позже.

### array

Для объявления массивов в TypeScript используется синтаксис `[]` или обобщенный тип `Array<elementType>`. Пример:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const names: Array<string> = ["John", "Bob", "Alice"];
console.log(numbers, names);
```

### tuple

Кортежи (tuple) - это особый тип массива, который позволяет хранить фиксированное количество элементов разных типов. Пример:

```typescript
const person: [string, number] = ["John", 30];
console.log(person);
```

## Что будет если не указать тип переменной?

Если не указать тип переменной, TypeScript автоматически определит тип переменной.

Если не удалось определить тип переменной, TypeScript автоматически определит тип переменной как `any`.

## Типизация переменных

Для объявления переменных (констант) с типами данных в TypeScript используется синтаксис `variableName: type`. Пример:

```typescript
let a: number = 10;
let b: string = "Hello";
let c: boolean = true;
```

В большинстве случаев это не нужно. Везде, где это возможно, TypeScript пытается автоматически выводить типы в вашем коде. **Например**, тип переменной выводится на основе типа ее инициализатора:

```typescript
// Нет необходимости в типовой аннотации -- 'myName' выводится как тип 'string'
let myName = "Alice";
```

## Типизация функций

Чаще всего вам придется типизировать именно функции. TypeScript позволяет типизировать параметры функций и возвращаемое значение.

### Типизация параметров функции

Для типизации параметров функции используется синтаксис `parameterName: type`. Пример:

```typescript
function greet(name: string, surname: string, age: number): void {
  console.log(`Hello, ${name} ${surname}! I'm ${age} years old.`);
}
```

> [!TIP]
> TypeScript также проверяет количество параметров функции. Если вы передаете больше или меньше параметров, чем ожидается, TypeScript выдаст ошибку.

### Типизация возвращаемого значения функции

Для типизации возвращаемого значения функции используется синтаксис `: type`. Пример:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
```

## Ссылки

- [Типы данных в TypeScript](https://metanit.com/web/typescript/2.1.php)
