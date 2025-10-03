'use strict'
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function async(num) {
    return num === 0 ? 0 : 1 + (num - 1) % 9

};