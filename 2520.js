/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    const quotient = Array.from(String(num), Number);
    let count = 0;
    for (let i = 0; i < quotient.length; i++) {
        if (num % quotient[i] === 0) count++;
    }
    return count;
};

console.log(countDigits(1248));