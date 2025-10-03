'use strict'
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let uniqueChars = new Set(sentence);

    if (uniqueChars.size === 26) return true;

    return false;
};

let sentence = "thequickbrownfoxjumpsoverthelazydog";

console.log(checkIfPangram(sentence));