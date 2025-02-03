/**
 * В данном файле показано, как получить данные из файла transaction.json.
 */

// Вариант 1
const transactions = require("transaction.json");
// ...

// Вариант 2
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "transaction.json");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // В переменной `data` находится текст из transaction.json
});
// ...
