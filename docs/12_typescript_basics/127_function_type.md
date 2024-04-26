## Типизирование функций, как значений

В программировании часто возникает ситуация, когда функция выступает в качестве аргумента другой функции (колбэка), возвращается в качестве значения, хранится в переменной (функциональное выражение) или является методом. В таких случаях функция рассматривается как **значение**, и её типизация осуществляется как тип значения.

Для типизации функций применяется следующий синтаксис:

```typescript
(arg1: type1, arg2: type2, ..., argN: typeN) => returnType
```

Примеры:

1. Функция в качестве аргумента:

```typescript
function greet(name: string, callback: (message: string) => void) {
  callback(`Hello, ${name}!`);
}
```

2. Функция как возвращаемое значение:

```typescript
function createLogger(): (message: string) => void {
  return (message: string) => {
    console.log(message);
  };
}
```

3. Функция, хранящаяся в переменной (Function Expression):

```typescript
const add: (x: number, y: number) => number = function (
  x: number,
  y: number,
): number {
  return x + y;
};
```

4. Метод объекта:

```typescript
interface User {
  name: string;
  age: number;
  greet: (message: string) => void;
}

const user: User = {
  name: "Alice",
  age: 25,
  greet: function (message: string): void {
    console.log(`${this.name} says: ${message}`);
  },
};
```

Такая явная типизация функций позволяет более четко определить ожидаемую сигнатуру функции и улучшить контроль за её использованием.
