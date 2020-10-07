// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var sum = require('./index.js');
console.info('GO!');
assert.strictEqual(sum(12, 33), 45, 'При сложении 12 и 33 получится 45');
assert.strictEqual(sum(101, '17'), 118, 'При сложении 101 и 17 получится 118');
assert.strictEqual(sum('101 what?', '17'), NaN, 'При сложении 101 what ? и 17 получится NaN');
console.log((sum('101 what?', '17')))
console.info('OK!');
