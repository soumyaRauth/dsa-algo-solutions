"use strict";
// https://leetcode.com/problems/longest-common-prefix/
function longestCommonPrefix(strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!startsWith(strs[i], prefix)) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
}
function startsWith(str, prefix) {
    return str.indexOf(prefix) === 0;
}
let output = longestCommonPrefix(["flow", "flows"]);
console.log(output); // Output: ""
