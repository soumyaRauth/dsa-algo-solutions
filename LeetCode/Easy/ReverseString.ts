/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): string[] {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    let temp = "";
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
