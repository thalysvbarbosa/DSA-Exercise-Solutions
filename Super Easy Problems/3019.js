'use strict'
/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
    let counter = 0;
    const str = s.toLowerCase();

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] != str[i + 1]) {
            counter++;
        }
    }
    return counter;
};

let s = "AAaaaaaBbbbbfdshAaaa";

console.log(countKeyChanges(s));