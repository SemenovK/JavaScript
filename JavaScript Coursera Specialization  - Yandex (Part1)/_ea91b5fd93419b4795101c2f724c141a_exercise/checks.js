// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var isValidTime = require('./index.js');

assert.strictEqual(isValidTime(12, 30), true, 'Время 12:30 валидное.');
assert.strictEqual(isValidTime(12, 61), false, 'Время 12:61 невалидное');

console.info('OK!');
