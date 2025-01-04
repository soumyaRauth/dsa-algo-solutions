"use strict";
function isValid(s) {
    let stack = [];
    let bracketMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    for (let char of s) {
        if (char in bracketMap) {
            stack.push(bracketMap[char]);
        }
        else {
            let poppedValue = stack.pop();
            if (poppedValue != char) {
                return false;
            }
        }
    }
    return stack.length == 0;
}
let result = isValid("([]");
console.log(result);
