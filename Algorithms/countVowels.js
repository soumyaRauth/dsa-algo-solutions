// 2. Count Vowels in a String
// Write a recursive function that counts the number of vowels in a string.
// Input: A string (e.g., "hello").
// Output: The number of vowels in the string (e.g., 2 for "hello").
var CountVowels = function (input) {
    if (input.length == 0) {
        return 0;
    }
    return ["a", "e", "i", "o", "u"].indexOf(input[0].toLowerCase()) !== -1
        ? 1 + CountVowels(input.slice(1))
        : CountVowels(input.slice(1));
};
var vowels = CountVowels("h");
console.log(vowels);
