function reverseVowels(s: string): string {
  let toString = s.split("");
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!isAVowel(toString[i])) {
      i++;
    } else if (!isAVowel(toString[j])) {
      j--;
    } else {
      let temp = toString[i];
      toString[i] = toString[j];
      toString[j] = temp;
      i++;
      j--;
    }
  }
  return toString.join("");
}

function isAVowel(letter: string) {
  letter = letter.toLowerCase();
  let vowelHash = { a: true, e: true, i: true, o: true, u: true };
  return vowelHash[letter] ? vowelHash[letter] : false;
}

// reverseVowels("leetcode");
let reversedWord = reverseVowels("IceCreAm");
console.log(reversedWord);
