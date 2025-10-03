/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i);
        let offset = 0;
        if (ascii >= 65 && ascii <= 90) {
            offset = 32;
        }
        result += String.fromCharCode(ascii + offset);;
    }
    return result;
};

s = "AMARELO EH A COR DO AMOR";

console.log(toLowerCase(s));