'use strict'
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length);
    let index = nums.length - 1;

    while (left <= right) {
        let numLeft = Math.abs(nums[left]);
        let numRight = nums[right];
        if (numLeft > numRight) {
            result[index] = numLeft ** 2;
            left++;
        }
        else {
            result[index] = numRight ** 2;
            right--;
        }
        index--;
    }
    return result;
};

const nums = [-7, -3, 2, 3, 11];

console.log(sortedSquares(nums));