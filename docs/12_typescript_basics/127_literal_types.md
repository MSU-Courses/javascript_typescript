# Literal Types

**Literal Types в TypeScript** - это как указание на то, что ваша переменная может быть только определенным значением, которое вы указали, а не любым другим. **Например**, если вы хотите, чтобы переменная `gender` принимала только значения "male" или "female", вы можете использовать Literal Types:

```typescript
let gender: "male" | "female";
gender = "male"; // Ок
gender = "female"; // Ок
gender = "other"; // Ошибка: Нельзя присвоить значение "other", так как это не допустимое значение
```

Второй пример с Literal Types - это указание на конкретное значение в качестве параметра функции:

```typescript
function displayStatus(status: "active" | "inactive") {
  console.log(`Status: ${status}`);
}

displayStatus("active"); // Ок
displayStatus("inactive"); // Ок
displayStatus("pending"); // Ошибка: Нельзя передать значение "pending", так как это не допустимое значение
```

В обоих примерах Literal Types помогают сделать ваш код более явным и предотвращают ошибки, связанные с неправильными значениями.

## Ссылки

- [Literal Types](https://www.typescriptlang.org/docs/handbook/literal-types.html)
- [TypeScript Handbook: Literal Types](https://www.typescriptlang.org/docs/handbook/literal-types.html)
