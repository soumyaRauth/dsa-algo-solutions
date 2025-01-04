/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        var temp = "";
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s;
}
console.log(reverseString(["h", "e", "l", "l", "u", "o"]));
// // Output: [
//   'a', 'm', 'a', 'n', 'a', 'P',
//   ' ', ':', 'l', 'a', 'n', 'a',
//   'c', ' ', ' ', 'a', ',', 'n',
//   'a', 'l', 'p', ' ', 'a', ' ',
//   ',', 'n', 'a', 'm', ' ', 'A'
// ]
// [
//   "a",
//   "m",
//   "a",
//   "n",
//   "a",
//   "P",
//   " ",
//   ":",
//   "l",
//   "a",
//   "n",
//   "a",
//   "c",
//   " ",
//   "a",
//   " ",
//   ",",
//   "n",
//   "a",
//   "l",
//   "p",
//   " ",
//   "a",
//   " ",
//   ",",
//   "n",
//   "a",
//   "m",
//   " ",
//   "A",
// ];
