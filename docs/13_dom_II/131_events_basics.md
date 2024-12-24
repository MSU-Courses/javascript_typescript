# Основы событий в Javascript

## Что такое событие?

Как вы уже поняли из предыдущих тем, элементы в JavaScript представляют собой объекты с определенными свойствами, такими как цвет, положение на странице, высота и другие.

Помимо базовых свойств, элементы могут также обладать определенными действиями или реакциями на определенные события. **Например**, когда мы нажимаем на кнопку, мы ожидаем от нее определенного действия, когда мы наводим курсор на элемент, мы также ожидаем определенной реакции. 

Все, что происходит на странице, это событие. 

Другими словами, **событие** - это сигнал о том, что что-то произошло на странице.

Рассмотрим некоторые из событий.

1. События **мыши**:
   1. `click` — левый клик мыши по элементу (нажатие на сенсорный экран).
   2. `contextmenu` — правый клик мыши по элементу.
   3. `mouseover` — когда мышь наводится на элемент.
   4. `mouseout` — когда мышь покидает элемент.
   5. `dblclick` — двойной клик мыши по элементу.
2. События **формы**:
   1. `submit` — форма отправлена.
   2. `focus` — пользователь фокусируется (использует) на элементе формы
   3. `input` — ввод в поле `input`
3. События **клавиатуры**:
   1. `keydown` — когда была нажата кнопка.
   2. `keyup` — когда была отжата кнопка.
4. События документа:
   1. `DOMContentLoaded` — когда элемент полностью загружен и DOM документа построен полностью

## Обработчик событий

Далее следует обработка события. Иными словами, если мы нажали на кнопку, должны произойти определенные действия. 

Теперь нам нужно добавить эти действия элементу, то есть реакцию на произошедшее событие.

> [!TIP]
> Подчеркнем, что для осуществления определенных действий можно прибегнуть к использованию функций.

То есть, не сложно догадаться, что мы должны "_привязать_" определенную функцию к определенному элементу на определенное событие. Например, элемент: `<div>` событие: `click` функция: `открой всплывающее окно`.

Существует несколько способов это сделать. Рассмотрим их.

### Использование атрибутов HTML

Один из самых ранних методов заключался в использовании атрибутов HTML, который в настоящее время считается устаревшим, но все еще применяется.

Обработчик событий может быть назначен элементу HTML **с помощью атрибута**, который формируется следующим образом: `on<событие>`. Например, 
* для события `click` используется атрибут `onclick`
* для события `contextmenu` - атрибут `oncontextmenu`.

```html
<!-- При клике мышкой на данную кнопку будет вызвана переданная функция: `alert` -->
<button onclick='alert("Hello")'>Нажми меня</button>
```

Вы можете добавить собственную функцию к кнопке.

```js
function add(a, b) {
    const sum = a + b;
    console.log(`Сумма ${a} + ${b}  == ${sum}`)
}
```

```html
<button onclick="add(2,3)">Добавить</button>
```

### Использование свойств объектов

Вторым, более распространенным вариантом является использование свойств объектов DOM-дерева. У объектов элемента DOM-дерева есть свойства, которые формируются аналогично атрибутам `on<событие>`.

Например:

```js
const buttonEl = document.querySelector("button");
buttonEl.onclick = function () {
    alert("Hello, world");
}
```

Мы можем присвоить свою функцию:

```js
function showMessage() {
   console.log("Hello, World!");
}

const buttonEl = document.querySelector("button");
// Функцию не нужно вызывать, а просто передать.

// Неверный способ, так как функция будет вызвана и возвратит undefined.
// buttonEl.onclick = showMessage(); 

// Верный способ:
buttonEl.onclick = showMessage;
```

> [!TIP]
> На самом деле атрибут, объявленный в HTML-документе, это тот же обработчик.

### Метод `addEventListener`

В описанных выше методах могут возникать проблемы, такие как невозможность присвоения нескольких обработчиков одному событию.

Поэтому в JavaScript был введен метод `addEventListener`, который доступен для всех сущностей DOM-дерева. Я говорю "сущностей", потому что данный метод доступен как для элементов, так и для HTML-комментариев.

Синтаксис метода:

```js
element.addEventListener(event, handler [, options])
```

где:

- `event` - событие (например, `click` или `contextmenu`);
- `handler` - функция-обработчик;
- `options` - дополнительные параметры (будет рассмотрено позже).
  Например:

```js
const buttonEl = document.querySelector("p");

buttonEl.addEventListener('click', () => {
   buttonEl.style.display = "none";
});

// Можно также передать функцию:
function hideButton() {
   buttonEl.style.display = "none";
}

buttonEl.addEventListener('click', hideButton);
```

Верно, для удаления обработчика события используется метод removeEventListener. Однако для успешного удаления необходимо передать ту же функцию, которая была использована при добавлении обработчика.

```js
const buttonEl = document.querySelector("p");

buttonEl.addEventListener('click', () => buttonEl.style.display = "none");

// Обработчик не будет удален, так как при вызове `removeEventListener` передается другой экземпляр функции
// даже если код внутри обоих функций идентичен.
buttonEl.removeEventListener('click', () => buttonEl.style.display = "none");
```

Для правильного удаления обработчика необходимо использовать ту же самую функцию, что и при добавлении.

```js
const buttonEl = document.querySelector("p");

function hideButton() {
   buttonEl.style.display = "none";
}

buttonEl.addEventListener('click', hideButton);

// Удаление обработчика событий
buttonEl.removeEventListener('click', hideButton);
```

> [!TIP]
> `addEventListener` позволяет добавлять несколько обработчиков событий на один элемент. 

## Объект события


Теперь, когда действие успешно выполняется при определенном событии, например, нажатии на кнопку, возникает вопрос о том, как получить дополнительную информацию о самом событии. 

Например, как узнать, что пользователь ввел в поле ввода, или координаты точки, в которой был произведен клик мышью.

Когда в браузере происходит любое событие, он **автоматически** создает объект с данными об этом событии и **автоматически** передает его в функцию обработчик. То есть нам не нужно передавать данный параметр явно.

Например, рассмотрим HTML:

```html
<input id="username" type="text" />
```

```js
// Получаем элемент с HTML-страницы
const inputEl = document.querySelector("#username");

// Добавляем обработчик события
inputEl.addEventListener('input', (event) => {
    // Событие 'input' происходит при изменении значения поля ввода
    // event.target ссылается на элемент, на котором произошло событие, то есть на наш inputEl
    // event.target.value содержит текущее значение поля ввода
    // Выводим в консоль сообщение о том, что было введено в поле ввода
    console.log("Вы ввели в поле ввода: " + event.target.value);
});
```

Попробуем узнать координаты мыши.

```js
document.addEventListener('click', (event) => {
    // event.clientX содержит координату X точки клика мыши относительно окна браузера
    // event.clientY содержит координату Y точки клика мыши относительно окна браузера
    console.log("Координата X: ", event.clientX, "Координаты Y: ", event.clientY);
});
```

## Свойство `event.target`

Когда на веб-странице происходит событие, **например**, _клик мышью_ или _нажатие клавиши_, браузер "запускает" это событие на каком-то конкретном элементе страницы. Вот тут и появляется `event.target` – это как раз этот элемент, на котором произошло событие.

Давайте представим, что у нас есть кнопка на странице, и мы нажимаем на неё. В этом случае `event.target` будет указывать на эту кнопку. Это очень удобно, потому что мы можем использовать `event.target`, чтобы понять, на каком именно элементе произошло событие, и далее выполнять какие-то действия.

Вот пример:

```html
<button id="myButton">Нажми меня</button>
```

```javascript
document.getElementById('myButton').addEventListener('click', function(event) {
    console.log('Событие произошло на элементе:', event.target);
});
```

Когда мы нажимаем на кнопку "Нажми меня", в консоль будет выведено:

```
Событие произошло на элементе: <button id="myButton">Нажми меня</button>
```

Таким образом, `event.target`  представляет собой объект, который содержит информацию о элементе, на котором произошло событие. Этот объект предоставляет доступ ко всем свойствам и методам этого элемента, что позволяет нам выполнять различные операции с этим элементом в нашем JavaScript-коде.

```js
document.getElementById('myButton').addEventListener('click', function(event) {
    // Изменяем текст кнопки
    event.target.textContent = 'Кнопка нажата';
    
    // Изменяем цвет фона кнопки
    event.target.style.backgroundColor = 'red';
});
```

## Пример: модальное окно

Рассмотрим на примере, как создать модальное окно (вспылвающее окно).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Document</title>
  </head>
  <body>
    <!-- Кнопка для открытия модального окна -->
    <button class="modal-button">Дополнительная информация</button>
    <!-- Модальное окно -->
    <div class="modal">
      <h3>Дополнительная информация</h3>
    </div>
    <!-- Затемненный фон при открытии всплывающего окна -->
    <div class="modal-overlay" id="modal-overlay"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

```css
.modal {
   // по умолчанию окно не видео
   display: none;
   justify-content: center;
   align-items: center;
   z-index: 1010;
   position: fixed;
   top: 50%;
   left: 50%;
   width: 600px;
   height: 600px;
   border-radius: 30px;
   background: white;
   transform: translate(-50%, -50%);
}
.modal-overlay {
   display: none;
   z-index: 1000;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: #b2b2b261;
}
```

```js
const modalEl = document.querySelector('.modal');
const buttonEl = document.querySelector('.modal-button');
const modalOverlay = document.querySelector('.modal-overlay');

// Функция для открытия модального окна
const openModal = () => {
  modalEl.style.display = 'flex';
  modalOverlay.style.display = 'block';
};

// Функция для закрытия модального окна
const closeModal = () => {
  modalEl.style.display = 'none';
  modalOverlay.style.display = 'none';
};

// Добавляем обработчик события клика на кнопку для открытия модального окна
buttonEl.addEventListener('click', openModal);

// Добавляем обработчик события клика на затемненную подложку для закрытия модального окна
modalOverlay.addEventListener('click', closeModal);
```