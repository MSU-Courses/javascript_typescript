const fruits = ['яблоко', 'груша', 'апельсин'];
const searchTerm = 'груша';

// Проверяем, содержит ли массив fruits элемент searchTerm
if (fruits.includes(searchTerm)) {
    console.log(`Массив содержит ${searchTerm}.`);
} else {
    console.log(`Массив не содержит ${searchTerm}.`);
}