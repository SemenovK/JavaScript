// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var addTime = require('./index.js');

assert.strictEqual(addTime(12, 30, 30), '13:00', 'При добавлении 30 мин. к 12:30 получится 13:00');
assert.strictEqual(addTime(23, 59, 31), '00:30', 'При добавлении 31 мин. к 23:59 получится 00:30');
assert.strictEqual(addTime(11, 50, 61), '12:51', 'При добавлении 61 мин. к 11:50 получится 12:51');
assert.strictEqual(addTime(23, 1, 80), '00:21', 'При добавлении 80 мин. к 23:01 получится 00:21');
assert.strictEqual(addTime(15, 0, 720), '03:00', 'При добавлении 720 мин. к 15:00 получится 3:00');

console.info('OK!');
