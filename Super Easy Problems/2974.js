'use strict'
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {

    nums.sort((a, b) => a - b);

    console.log(nums);

    for (let i = 0; i < nums.length - 1; i = i + 2) {
        // let firstMin = nums[i];
        // let secondMin = nums[i + 1];
        let aux;
        // console.log(firstMin, secondMin);

        aux = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = aux;
    }
    return nums;
};

let array = [5, 4, 2, 3];

console.log(numberGame(array));