'use strict'
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {

    for (let i = 0; i < words.length; i++) {
        let left = 0, right = words[i].length - 1;
        let char = words[i];
        let isPalindrome = true;

        while (left < right) {
            if (char[left] === char[right]) {
                left++;
                right--;
            }
            else {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) return char;
    }
    return "";
};


words = ["abc", "car", "ada", "racecar", "cool"];

console.log(firstPalindrome(words));