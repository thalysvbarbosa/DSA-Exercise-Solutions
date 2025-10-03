'use strict'
/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
    // Optimal strategy: increase num by 1 (t times) while decreasing X by 1 (t times)
    // This maximizes the gap, making X = num + 2*t achievable
    return num + 2 * t;
};

let num = 4, t = 1;

console.log(theMaximumAchievableX(num, t));