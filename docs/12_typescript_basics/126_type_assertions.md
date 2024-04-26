# Type Assertion

**Type Assertion** в TypeScript позволяет программистам явно указывать компилятору TypeScript на тип данных переменной, когда он не может этого определить автоматически. Это особенно полезно, когда вы знаете тип данных переменной лучше, чем TypeScript. **Type Assertion** предоставляет способ временно переопределить тип данных переменной в определенном контексте.

Существует два способа выполнить Type Assertion: `"angle-bracket"` синтаксис и ключевое слово `as`. Примеры использования Type Assertion:

```typescript
let myValue: any = "This is a string";
let stringLength: number = (myValue as string).length;
```

В этом примере мы утверждаем, что `myValue` является строкой, чтобы получить доступ к свойству `length`. Обратите внимание, что оба способа синтаксически эквивалентны, и выбор между ними остается на ваше усмотрение. Однако в большинстве случаев рекомендуется использовать синтаксис `as`, так как он считается более читаемым и согласованным со стандартом языка.

```typescript
// Предположим, у вас есть элемент <input> в вашем HTML-коде
const inputElement = document.getElementById("myInput");

// Вероятно, TypeScript не знает, что inputElement - это HTMLInputElement
// Поэтому мы можем использовать Type Assertion, чтобы явно указать тип
const myInput = inputElement as HTMLInputElement;

// Можно использовать синтаксис "angle-bracket" вместо ключевого слова as
const myInput = <HTMLInputElement>inputElement;

// Теперь TypeScript знает, что myInput - это HTMLInputElement
// Мы можем использовать его свойства и методы без ошибок компиляции
myInput.value = "Hello, TypeScript!";
```

В этом примере `<HTMLInputElement>` явно указывает TypeScript на тип данных переменной `inputElement`. Такой синтаксис также позволяет использовать переменную в соответствии с ее утвержденным типом без ошибок компиляции.

## Ссылки

- [Type Assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) (typescriptlang.org)
- [TypeScript Handbook: Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
