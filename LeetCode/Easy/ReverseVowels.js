function reverseVowels(s) {
    var toString = s.split("");
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (!isAVowel(toString[i])) {
            i++;
        }
        else if (!isAVowel(toString[j])) {
            j--;
        }
        else {
            var temp = toString[i];
            toString[i] = toString[j];
            toString[j] = temp;
            i++;
            j--;
        }
    }
    return toString.join("");
}
function isAVowel(letter) {
    letter = letter.toLowerCase();
    var vowelHash = { a: true, e: true, i: true, o: true, u: true };
    return vowelHash[letter] ? vowelHash[letter] : false;
}
// reverseVowels("leetcode");
var reversedWord = reverseVowels("IceCreAm");
console.log(reversedWord);
