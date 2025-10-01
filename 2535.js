/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sumElements = 0, sumDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        sumElements += n;
        while (n > 0) {
            let digit = n % 10;
            sumDigits += digit;
            n = Math.floor(n / 10); // The Math.floor() method in JavaScript returns the largest integer less than or equal to a given number
        }
    }
    console.log(sumElements, sumDigits);
    return Math.abs(sumElements - sumDigits);
};

const nums = [1, 15, 6, 3];

console.log(differenceOfSum(nums));