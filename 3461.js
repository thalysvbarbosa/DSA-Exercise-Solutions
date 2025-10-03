'use strict'
/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    let array = [];

    for (let i = 0; i < s.length; i++) {
        array.push(parseInt(s[i]));
    }

    while (array.length > 2) {
        let aux = [];

        for (let i = 0; i < array.length - 1; i++) {

            aux[i] = ((array[i] + array[i + 1]) % 10);
        }
        array = aux;
    }

    console.log(array);

    return array[0] === array[1];
};

const s = "3902";

console.log(hasSameDigits(s));