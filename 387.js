'use strict'
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let counter = new Map();
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (!counter.has(c)) {
            counter.set(c, { count: 1, index: i });
        } else {
            counter.get(c).count++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (counter.get(c).count === 1) {
            return counter.get(c).index;
        }
    }
    return -1;
};