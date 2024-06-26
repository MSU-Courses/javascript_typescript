# Type Aliases и Interfaces

## Type Aliases

Рассмотрим ситуацию, когда у нас имеется объект с обширным количеством полей, и нам требуется передавать этот объект во множество функций.

В подобных случаях возникает проблема: каждый раз необходимо явно указывать тип объекта, что не только неудобно, но и увеличивает вероятность допущения ошибок.

```typescript
function displayData(data: { name: string; age: number }) {
  // ...
}

function printData(data: { name: string; age: number }) {
  // ...
}

function saveData(data: { name: string; age: number }) {
  // ...
}
```

Для решения данной проблемы в TypeScript существуют **Type Aliases**, или же создание псевдонимов для типов данных.

Для этого используется ключевое слово `type`:

```typescript
type User = { name: string; age: number };

function displayData(data: User) {
  // ...
}

function printData(data: User) {
  // ...
}

function saveData(data: User) {
  // ...
}
```

Теперь вместо длинного описания типа объекта мы можем использовать псевдоним `User`.

Также **Type Aliases** можно использовать для объединения нескольких типов данных в один:

```typescript
type ID = number | string;
```

В данном случае переменная типа `ID` может принимать значения как числа, так и строки.

Таким образом, **Type Aliases** позволяют упростить описание типов данных и сделать код более читаемым и понятным.

## Interfaces

Еще одним способом описать структуру данных в TypeScript являются **Interfaces**.

#### Интерфейсы (Interfaces)

Интерфейсы представляют собой способ определения структуры объекта в TypeScript. Они описывают форму объекта, указывая наличие определенных свойств и их типы данных. Использование интерфейсов делает ваш код более читаемым и понятным, поскольку явно указывает, какие свойства должны присутствовать в объекте.

Пример использования интерфейса:

```typescript
interface Person {
  name: string;
  age: number;
  greet: () => void;
}

const john: Person = {
  name: "John",
  age: 30,
  greet: () => {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};
```

#### Когда использовать интерфейсы, а когда типы?

Интерфейсы обычно используются для **описания структуры объектов**, особенно если эта структура будет часто использоваться в вашем коде или в библиотеках.

Типы, с другой стороны, более общие и могут быть использованы для описания различных типов данных, включая не только объекты, но и примитивные типы, функции, объединенные типы и т. д. Они предоставляют более широкие возможности для определения пользовательских типов данных.

В целом, использование интерфейсов и типов зависит от конкретной задачи и предпочтений разработчика.

## Ссылки

- [TypeScript Handbook: Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
- [TypeScript Handbook: Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces)
