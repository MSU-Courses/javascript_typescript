# Переменная `arguments`

Привет! В данной главе предлагаю перейти на более дружественное общение и использовать форму "ты".

Эта глава не является обязательной, а скорее дополнительной. Её содержание не будет включено в экзаменационные материалы и контрольные вопросы. Ты можешь изучить эту главу, если тебе интересно узнать больше о функциях в JS.

## Псевдомассив `arguments`

Все аргументы функции доступны через специальный "псевдомассив" `arguments`.

Чтобы было легче понять, рассмотрим пример.
```js
function showSomeMessage() {
    console.log(arguments.length); // количество аргументов
    console.log(arguments[0]); // 1-ый аргумент функции
    console.log(arguments[1]); // 2-ой аргумент функции
    console.log(arguments[2]); // 3-ий аргумент функции
}

// Вывод: 2 Hello World undefined
showSomeMessage("Hello", "World");
// Вывод: 3 1 2 3
showSomeMessage(1, 2, 3);
```

В этом примере мы используем arguments, чтобы получить доступ к аргументам функции `showSomeMessage()`. 

Раньше, когда в JavaScript не было остаточных аргументов, использовался именно данный подход.

В настоящее время рекомендуется не использовать данный метод.