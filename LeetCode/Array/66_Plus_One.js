"https://leetcode.com/problems/plus-one/description/";
function plusOne(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] != 9) {
            digits[i] = digits[i] + 1;
            return digits;
        }
        else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
}
;
var plOne = plusOne([9, 9]);
console.log(plOne);
