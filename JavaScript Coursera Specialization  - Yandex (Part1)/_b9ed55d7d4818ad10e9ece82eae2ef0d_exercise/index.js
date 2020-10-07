/**
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {Number}
 */
module.exports = function (a, b) {
    if (isNaN(a)==true || isNaN(b)==true)
        return NaN
    else 
        return parseInt(a, 10) + parseInt(b)
};
