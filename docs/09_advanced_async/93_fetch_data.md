# Метод `fetch`

Самым распространенным примером использования асинхронного javascript является метод `fetch`.

Метод `fetch` используется для получения данных со сторонних ресурсов (данных с сервера).

Данная тема является введением в такое понятие, как `RestAPI`, однако на данный момент изучение этой обширной темы может привести к недопониманию. Мы сосредоточимся на обзоре и уделим внимание функции `fetch`.

Представьте ситуацию: у вас есть определённый веб-сайт, на котором содержится информация, которую вы хотели бы получить и использовать в своём проекте. **Например**, это может быть сайт, где представлена информация о предстоящих фильмах.

В данной ситуации для выполнения сетевого запроса (обращения к другому веб-сайту) используется метод `fetch`, однако следует отметить, что этот метод также используется для других типов запросов.

> [!NOTE]
> Метод `fetch` возвращает промис, поэтому мы должны использовать `then, catch` или `async/await`.

## Синтаксис метода `fetch`

Синтаксис метода fetch:
```js
fetch(url, [options]);
```

Где,
- `url` — url для отправки запроса.
- `options` — дополнительные параметры.

Например,
```js
fetch('https://www.learn-js.org/')
```

## Получение данных

Какую информацию мы можем получить? Обычно, если указать произвольный веб-сайт, возникнет ошибка. 

В данном случае не все веб-сайты позволяют обращаться к ним таким образом в целях безопасности.

Чаще всего сторонние ресурсы сами предоставляют доступ по определенным URL, по которым можно обратиться и получить информацию. Обычно эту информацию передают в формате [JSON](../06_advanced_objects/66_json.md) для более легкой обработки. **Например**, список фейковых постов: [Link](https://jsonplaceholder.typicode.com/posts).

Получаемая информация представлена в формате JSON.

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
```

Теперь данную информацию необходимо получить у нас в коде.

```js
// Осуществляем запрос с помощью метода `fetch`
fetch('https://jsonplaceholder.typicode.com/posts').then(data => {
    // Декодируем (преобразуем) полученные данные в JSON.
    // Метод json() также возвращает промис,
    // поскольку данная операция асинхронна.
    return data.json(); 
}).then(data => {
    console.log(data); // Выводим данные на экран
})
```

Данную логику можно написать с помощью `async/await`.

```js
const data = await fetch('https://jsonplaceholder.typicode.com/posts');
console.log(data);
```

В данной главе рассмотрена лишь основа работы с данным инструментом; более подробно данная тема будет рассмотрена на других курсах.