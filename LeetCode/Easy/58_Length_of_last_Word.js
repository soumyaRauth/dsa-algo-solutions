// https://leetcode.com/problems/length-of-last-word/
function lengthOfLastWord(s) {
    var length = 0;
    var i = s.length - 1;
    while (i >= 0 && s[i] === " ") {
        i--;
    }
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }
    return length;
}
var lengthOfString = lengthOfLastWord("Hello worldo ");
console.log(lengthOfString);
