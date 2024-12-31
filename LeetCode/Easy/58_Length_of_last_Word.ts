// https://leetcode.com/problems/length-of-last-word/
function lengthOfLastWord(s: string): number {
  let length = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
}

let lengthOfString = lengthOfLastWord("Hello worldo ");
console.log(lengthOfString);
