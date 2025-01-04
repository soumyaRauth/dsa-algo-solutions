"use strict";
// https://leetcode.com/problems/roman-to-integer/description/
function romanToInt(s) {
    let hasheMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (hasheMap[s[i]] < hasheMap[s[i + 1]]) {
            result = result + (hasheMap[s[i + 1]] - hasheMap[s[i]]);
            i++;
        }
        else {
            result += hasheMap[s[i]];
        }
    }
    return result;
}
console.log(romanToInt("IV"));
