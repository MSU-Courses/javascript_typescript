# Union Types

**Union Types** в TypeScript позволяют объединять несколько типов данных в один. Это позволяет переменной принимать значения различных типов. **Например**, объединение типов string и number позволяет переменной принимать как строки, так и числа. Использование Union Types повышает гибкость кода и обеспечивает более точное описание возможных значений переменных.

Рассмотрим пример использования Union Types:

```typescript
function displayData(data: number | string) {
  console.log(data);
}

displayData(1);
displayData("Hello, World");
```

Но что если будет необходимо использовать методы строк или методы чисел в данном случае?

```typescript
function displayData(data: number | string) {
  // Ошибка, так как data может быть строкой, а у строки нет метода toFixed
  console.log(data.toFixed(2));
}
```

Для этого можно использовать **Type Guards**. Рассмотрим пример:

```typescript
function displayData(data: number | string) {
  if (typeof data === "number") {
    console.log(data.toFixed(2));
  } else {
    console.log(data.toUpperCase());
  }
}
```

##  Ссылки

- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
