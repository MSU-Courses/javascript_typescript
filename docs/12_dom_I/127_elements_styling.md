# Стилизация HTML-элементов

Одним из важнейших аспектов придания динамики HTML-страницам является стилизация элементов.

Из курса по HTML и CSS вы уже, безусловно, знакомы с двумя основными методами стилизации:

- Стилизация с использованием атрибута `style`.
- Стилизация с использованием классов (или идентификаторов) (создание класса и определение его стилей в CSS).

Таким же образом получая объект в javascript мы можем менять ему аттрибут `style` и классы.

## Стилизация с помощью аттрибута `style`

У полученных элементов имеется свойство `style`, которое само по себе также является объектом и содержит другие свойства, отображающие CSS-стили.

* display -> element.style.display
* color -> element.style.color

Для свойств состоящих из двух и более слов используется `camelCase`

* flex-direction -> element.style.flexDirection
* background-color -> element.style.backgroundColor

```js
const divEl = document.querySelector("div");

div.style.display = "flex";
div.style.flexDirection = "column";
div.style.color = "white";
// ...
```

Если требуется изменить сразу несколько свойств, то у свойства `style` есть альтернатива — свойство `cssText`.

```js
// Перезаписываем стили
divEl.style.cssText = `
    display: flex;
    flex-direction: column;
    color: white;
`;

// Добавляем стили, используя оператор `+=`
divEl.style.cssText += `
    display: flex;
    flex-direction: column;
    color: white;
`;
```

## Стилизация с помощью классов

Как Вы уже поняли, в javascript можно добавлять или убирать классы элемента. Данный способ является наиболее часто используемым.

### `className`

Свойство `className` содержит название класса элемента.

```html
<div id="divEl" class="main card"></div>
```

```js
const divEl = document.querySelector("#divEl");
console.log(divEl.className); // main card
divEl.className = "btn"; // изменяем класс на "btn"
```

### `classList`

Часто бывает, что элемент содержит несколько классов, и нам нужно работать с каждым классом отдельно. Например, чтобы удалить один из классов.

Свойство `classList` содержит методы для добавления и удаления классов.

```html
<div id="divEl" class="main hidden"></div>
```

```js
const divEl = document.querySelector("#divEl");

// Добавляем класс -> <div class="main hidden card"></div>
divEl.classList.add("card");

// Удаляем класс -> <div class="main  card"></div>
divEl.classList.remove("hidden");

// Проверяем, существует ли класс
divEl.classList.contains("hidden"); // false

// Добавляем класс, если его нет, иначе удаляем
// Таким образом, это переключатель
divEl.classList.toggle("hidden");
```

## Получение стилей

Иногда возникает необходимость узнать стили элемента, которые были указаны в CSS-файле. Однако получить их с помощью свойства `style` нельзя.

Для этого применяется метод `getComputedStyle(element, [pseudo])`.

```html
<div class="card"></div>
```

```css
.card {
    display: flex;
    flex-direction: column;
}
```

```js
const divEl = document.querySelector(".card");
const styles = getComputedStyle(divEl);
console.log(styles.display); // "flex"
console.log(styles.flexDirection); // "column"
```