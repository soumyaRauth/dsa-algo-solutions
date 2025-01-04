function reverseVowels(s: string): string {
  const arr = s.split(""); // Splits into words
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!isAVowel(arr[i])) {
      i++;
    }
    if (isAVowel(arr[i])) {
      if (isAVowel(arr[j])) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j--;
    }
    i++;
  }
  return arr.join("");
}

function isAVowel(letter: string) {
  letter = letter.toLowerCase();
  let vowelHash = { a: true, e: true, i: true, o: true, u: true };
  return vowelHash[letter] ? vowelHash[letter] : false;
}

let resi = reverseVowels("IceCreAm");
console.log(resi);
