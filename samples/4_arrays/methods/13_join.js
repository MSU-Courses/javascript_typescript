/*
Пример №1
 */
const fruits = ['apple', 'banana', 'orange'];
const result1 = fruits.join();
console.log(result1); //  "apple,banana,orange"

/*
Пример №2
 */
const colors = ['red', 'green', 'blue'];
const result2 = '<ul>' + colors.map(color => `<li>${color}</li>`).join('') + '</ul>';
console.log(result2); //  "<ul><li>red</li><li>green</li><li>blue</li></ul>"

/*
Пример №3
 */
const numbers = [1, 2, 3, 4, 5];
const result3 = numbers.join('+');
console.log(result3); //  "1+2+3+4+5"
