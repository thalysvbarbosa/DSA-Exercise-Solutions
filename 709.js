/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let stringResult = "";

    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i);
        let upper = 0;
        if (ascii >= 65 && ascii <= 90) {
            upper = 32;
        }
        const char = String.fromCharCode(ascii + upper);
        stringResult += char;
    }
    return stringResult;
};

s = "AMARELO EH A COR DO AMOR";

console.log(toLowerCase(s));