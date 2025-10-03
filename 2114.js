'use strict'
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let greaterThan = 0;
    for (let i = 0; i < sentences.length; i++) {
        // let count = 1;
        // for (let j = 0; j < sentences[i].length; j++) {
        //     if (sentences[i][j] === " ") {
        //         count++;
        //     }
        // }
        const words = sentences[i].split(" ");
        greaterThan = Math.max(words.length, greaterThan);
    }
    return greaterThan;
};

sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

console.log(mostWordsFound(sentences));