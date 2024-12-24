# События формы

Часто вам придется работать с обработкой форм в документе. В отличие от других элементов, формы имеют специальные, дополнительные методы.

## Получение формы

Форму можно получить так же, как и другие элементы, используя `querySelector` и другие подобные методы, но более простым способом является использование уже созданной коллекции.

Все формы в документе входят в коллекцию `document.forms`.

```js
document.forms[0]; // первая форма в документе
document.forms.login; // <form name="login">
```

Чтобы получить элементы формы, также можно использовать методы `querySelector` и подобные им, но, как и в случае с самой формой, существует уже созданная коллекция.

```html
<form name="auth">
    <input type="text" name="username">
    <input type="text" name="password">
</form>
```

```js
document.forms.auth; // Элемент <form name="auth">

// Элемент <input type="text" name="username"> 
// в форме <form name="auth">
document.forms.auth.elements.username;

// Элемент <input type="text" name="password">
// в форме <form name="auth">
document.forms.auth.elements.password; 
```

Если два элемента содержат одинаковое поле `name`, то свойство elements будет содержать массив.

```html
<form name="auth">
    <input type="radio" value="Female" name="gender">
    <input type="radio" value="Male" name="gender">
</form>
```

```js
document.forms.auth.elements.gender[0]; // <input type="radio" value="Female" name="gender">
document.forms.auth.elements.gender[1]; // <input type="radio" value="Male" name="gender">
```

## Получение значений формы

### `input` и `textarea`

Для получения значения поля `input` используется свойство `value` для текстовых полей и свойство `checked` для чекбоксов, которое возвращает `true` или `false`, в зависимости от того, выбран ли чекбокс.

### `select`

Элемент `select` обладает тремя свойствами:

- `select.value` — содержит выбранное в данный момент значение из `<option>`
- `select.options` — представляет коллекцию всех элементов `<option>` внутри элемента `select`
- `select.selectedIndex` — возвращает индекс (номер) выбранного элемента в коллекции `<option>`

Также есть булево свойство, чтобы проверить, что элемент выбран.

- `select.options[0].selected` — `true` если выбран или `false` иначе.

```html
<select id="citySelect">
    <option value="chisinau">Chisinau</option>
    <option value="orhei">Orhei</option>
</select>
```

```js
const select = document.querySelector("#citySelect");

// все 3 способа работают одинаково
select.value = "chisinau";
select.options[0].selected = true; 
select.selectedIndex = 0;
```

## События формы

### События `focus` и `blur`

Событие `focus` вызывается в момент фокусировки, а `blur`, когда элемент теряет фокус. 

```html
<label>
    <input type="email" id="email"  />
</label>
<p id="error"></p>
```

```js
const errorEl = document.querySelector('#error');

// когда пользователь убрал фокус с input
document.querySelector("#email").addEventListener('blur', (event) => {
    if (event.target.value.includes('@')) {
        return;
    }
    
    error.innerHTML = "Вы ввели неверный email"
});
```

### События `change` и `input`

Когда пользователь вводит что-то в поле ввода, например, текст или выбирает опцию из выпадающего списка, происходит событие `input`. Это событие срабатывает каждый раз, когда значение поля ввода изменяется.

**Например**, если у нас есть текстовое поле для ввода имени, и мы начинаем вводить в него буквы, каждая буква, которую мы вводим, вызывает событие `input`. Это позволяет нам мгновенно реагировать на изменения пользовательского ввода.

Событие `change`, с другой стороны, срабатывает только тогда, когда пользователь закончил изменять значение поля ввода, и фокус ушел с этого поля. 

**Например**, если мы выбираем дату в календаре или изменяем значение в выпадающем списке, событие `change` произойдет только после того, как мы закончим выбор. Это может быть полезно, когда нам нужно знать, что пользователь окончательно выбрал какое-то значение перед выполнением каких-то действий, например, отправкой формы.


**Рассмотрим пример**:


```html
<input type="text" id="nameInput" placeholder="Введите ваше имя">
<p id="output"></p>
```

```js
const nameInput = document.getElementById('nameInput');
const output = document.getElementById('output');

// Событие input срабатывает каждый раз при вводе символов в поле ввода
nameInput.addEventListener('input', function(event) {
    output.textContent = "Привет, " + event.target.value + "!";
});

// Событие change срабатывает, когда пользователь закончил ввод и фокус ушел с поля
nameInput.addEventListener('change', function(event) {
    alert("Вы выбрали имя: " + event.target.value);
});
```

### События `submit`

Событие `submit` возникает, когда пользователь отправляет форму.

Это событие происходит в двух случаях:

- Когда пользователь нажимает на кнопку `<input type="submit">` или `<input type="image">`.
- Когда пользователь нажимает клавишу `Enter`, находясь в поле ввода.

Оба эти события приводят к отправке формы и вызывают событие `submit`. Обработчик этого события может проверить данные, и если есть ошибки, показать их и вызвать `event.preventDefault()`, чтобы предотвратить реальную отправку формы.

Также у элемента `<form>` существует метод `submit()`, который может принудительно отправить форму, но событие `submit` сгенерировано не будет.

## Пример валидации формы

Пример валидации формы с использованием HTML5 и JS: [ссылка](../../samples/11_dom_II/sample_01_validation.html).

Существует множество других браузерных событий; все возможные события можно просмотреть [здесь](https://developer.mozilla.org/ru/docs/Web/Events).