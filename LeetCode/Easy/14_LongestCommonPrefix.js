// https://leetcode.com/problems/longest-common-prefix/
function longestCommonPrefix(strs) {
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        while (!startsWith(strs[i], prefix)) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
}
function startsWith(str, prefix) {
    return str.substring(0, prefix.length) === prefix;
}
var output = longestCommonPrefix(["flow", "flows"]);
console.log(output); // Output: ""
