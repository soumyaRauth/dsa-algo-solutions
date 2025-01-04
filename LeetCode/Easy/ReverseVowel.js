function reverseVowels(s) {
    var arr = s.split(""); // Splits into words
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (!isAVowel(arr[i])) {
            i++;
        }
        if (isAVowel(arr[i])) {
            if (isAVowel(arr[j])) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j--;
        }
        i++;
    }
    return arr.join("");
}
function isAVowel(letter) {
    letter = letter.toLowerCase();
    var vowelHash = { a: true, e: true, i: true, o: true, u: true };
    return vowelHash[letter] ? vowelHash[letter] : false;
}
var resi = reverseVowels("IceCreAm");
console.log(resi);
