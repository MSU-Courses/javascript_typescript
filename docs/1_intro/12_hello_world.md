# Привет мир на JS в браузере или "Как заставить браузер говорить?"

Привет! В этой небольшой теме мы разберемся с языком программирования JavaScript, его "фишками" и особенностями. Пока что оставим подробности в стороне и коснемся всего лишь поверхности этого языка.

Во [введение](11_intro.md) ты познакомился где именно можно выполнять код JS.  Давай теперь попробуем еще один интересный метод, где ты сможешь написать сразу несколько инструкций и выполнить их. В данном случае мы не будем использовать NodeJS, а будем выполнять инструкции прямо в браузере.

Давайте создадим простую страницу HTML (index.html) и вставим в неё наш JS скрипт.
```html
<!doctype html>
<html lang="en">
<head>
    <title>Hello, world!</title>
</head>
<body>
<div>
    Эй, а ты точно знаешь JS?
</div>

<!-- Место, где мы будем писать наш скрипт -->
<script>
    alert("Hello, world");
</script>
</body>
</html>
```
Теперь, если мы откроем HTML страницу наш скрипт, находящийся на странице выполниться и вам будет показано "окно" с надписью Hello, world!

> [!IMPORTANT]
> Функция `alert()` недоступна при использовании NodeJS. Она доступна только при использовании браузеров.

> [!NOTE]
> Тег `<script>` представляет собой HTML-элемент, используемый для встраивания или подключения JavaScript-кода в веб-страницу, он автоматически выполнится, когда браузер его обработает.

Теперь попробуй добавить еще одну инструкцию в тег `<script>`
```html
<script>
    console.log("Hello, world");
    console.log(2+3);
</script>
```
Если открыть консоль разработчика (см. [введение](11_intro.md)), то ты увидишь вывод двух сообщений: "Hello, world" и результат сложения 2 и 3. 

> [!NOTE]
> Тег `<script>` можно размещать в HTML-разделах `<head>` и `<body>`. Код, внутри этого тега, будет выполняться в момент обработки браузером соответствующей части HTML-документа. Обычно скрипты, относящиеся к настройкам и загрузке страницы, помещают в раздел `<head>`, а скрипты, влияющие на визуальное отображение или взаимодействие с пользователем, размещают в разделе `<body>`.

## Внешние Javascript скрипты

Представь, что у тебя много JS-кода, и встраивать в страницу HTML не самая лучшая идея. В данном случае ты можешь написать скрипт в отдельном js файле и подключить его к HTML странице.
Давай с помощью функции `prompt` попробуем сделать вывести в консоль то, что ввел пользователь.

_Файл index.js_
```js
// Используем функцию prompt для запроса данных у пользователя
// и сохраняем введенный текст в переменной text
const text = prompt("Впиши сюда, что хочешь!");
// Выводим введенный текст в консоль разработчика
console.log(text);
```
_Файл index.html_
```html
<!doctype html>
<html lang="en">
<head>
    <!-- Подключение внешнего JS-файла -->
    <script src="sample01.js"></script>
</head>
<body>
<p>Посмотри консоль разработчика!</p>
</body>
</html>
```

Как ты уже понял, с использованием атрибута `src` тега `<script>` можно подключать внешние JS-файлы.

> [!IMPORTANT]
> Если использовать атрибут src совместно с кодом внутри, то содержимое будет игнорироваться
> ```html
> <script src="sample01.js">
> console.log("Hello, world!"); // игнорируется
> </script>
> ```


Теперь у тебя есть возможность выполнения кода в следующих сценариях:
* С использованием консоли разработчика
* С использованием Node.js
* Подключение JS к HTML-странице

Отлично справился! Теперь у тебя немного больше знаний, и ты можешь осуществлять базовое взаимодействие между HTML и JS! Но это всего лишь начало, впереди много интересного!