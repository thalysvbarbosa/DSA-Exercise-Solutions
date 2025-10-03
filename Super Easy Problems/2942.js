'use strict'
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let index = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                index.push(i);
                break;
            }
        }
    }
    return index;
};

const words = ["leet", "code"];
const x = "e";

console.log(findWordsContaining(words, x));