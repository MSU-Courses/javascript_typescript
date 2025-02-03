export function getRandomActivity() {
    fetch('https://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(data => {
            // отображение случайного действия на HTML странице
        })
}
