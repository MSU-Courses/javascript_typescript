# null

Последним типом данных в JavaScript, о котором необходимо упомянуть, является `null`.

> [!IMPORTANT]
> Тип данных `null` является _специальным примитивом_ и содержит только значение `null`. Несмотря на то, что оператор `typeof null` возвращает `"object"`.

В JavaScript `null` не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках. В контексте JavaScript, `null` буквально означает "ничего" или "значение неизвестно".

В JavaScript `null` отличается от `undefined`, потому что null действительно что-то представляет собой — это специальное значение, которое обозначает отсутствие объекта или значения. Когда вы видите `null`, это означает, что там должен быть объект, но его нет.

> [!NOTE]
> _null_ обозначает отсутствие объекта, тогда как undefined означает, что значение переменной не определено вообще.

Например,
```js
const element = document.getElementById('nonExistentElement');
if (element === null) {
    console.log('Элемент не найден');
}
```

В данном случае элемент не просто не определен, а функция не смогла найти элемент в документе с указанным идентификатором или селектором.