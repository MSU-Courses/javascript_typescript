# Типизация объектов

Еще одним самым встречаемым типом являются объекты.

Чтобы определить тип объекта, мы просто перечисляем его свойства и их типы: `{ property1: type1; property2: type2 }`.

Рассмотрим создание объекта с двумя полями: `username` и `hp`.

```typescript
const player: {
  username: string;
  hp: number;
} = {
  username: "Alice",
  hp: 100,
};
```

Рассмотрим функцию, которая принимает объект с двумя полями: `name` и `age`.

```typescript
function printUser(user: { name: string; age: number }) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}
```

## Опциональные свойства

Иногда некоторые свойства объекта могут быть необязательными. Для этого используется оператор `?`.

```typescript
function printUser(user: { name: string; age?: number }) {
  // ...
}

printUser({ name: "Alice" }); // OK
printUser({ name: "Bob", age: 25 }); // OK
```

Если мы используем свойство как опциональное, мы не можем обращаться к его свойствам напрямую, не проверив его на `undefined`.

```typescript
function printUser(user: { name: string; age?: number }) {
  // Error -  'user.age' is possibly undefined
  // console.log(`Name: ${user.name}, Age: ${user.age.toString()}`);
  console.log(`Name: ${user.name}, Age: ${user.age?.toString()}`);
}
```

## Readonly свойства

Иногда нам нужно определить объект с набором свойств, которые не могут быть изменены после инициализации. Для этого используется ключевое слово `readonly`.

```typescript
function printUser(user: { readonly name: string; readonly age: number }) {
  // Error - Cannot assign to 'name' because it is a read-only property
  // user.name = "Bob";
}
```

## Ссылки

- [Типизация объектов](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TypeScript Handbook: Objects](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TypeScript Handbook: Readonly properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties)
- [TypeScript Handbook: Optional properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties)
  `;
