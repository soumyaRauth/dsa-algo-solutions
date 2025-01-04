"use strict";
// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
function mergeAlternately(word1, word2) {
    let firstPointer = 0;
    let secondPointer = 0;
    let res = "";
    while (firstPointer < word1.length && secondPointer < word2.length) {
        res = res + word1[firstPointer] + word2[secondPointer];
        firstPointer++;
        secondPointer++;
    }
    return res + word1.slice(firstPointer) + word2.slice(secondPointer);
}
// console.log(mergeAlternately("abc", "pqr"));
