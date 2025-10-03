'use strict'
/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
    const distinctSides = (new Set(nums)).size;
    if (distinctSides === 1) {
        return "equilateral";
    }

    const [a, b, c] = nums;

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) return "equilateral";
        else if (a !== b && b !== c && a !== c) return "scalene";
        else return "isosceles";
    }
    return "none";
};

let nums = [3, 75, 3];

console.log(triangleType(nums));

// /**
//  * @param {number[]} nums
//  * @return {string}
//  */
// var triangleType = function (nums) {
//     const distinctSides = (new Set(nums)).size;
//     if (distinctSides === 1) {
//         return "equilateral";
//     }

//     const [a, b, c] = nums;

//     if (a + b > c && a + c > b && b + c > a) {
//         if (distinctSides === 2) {
//             return "isosceles";
//         }
//         else return "scalene";
//     }
//     return "none";
// };