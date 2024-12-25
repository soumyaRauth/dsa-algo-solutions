// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
function mergeAlternately(word1, word2) {
    var i = 0, j = 0;
    var res = "";
    while (i < word1.length && j < word2.length) {
        res += word1[i++] + word2[j++];
    }
    return res + word1.slice(i) + word2.slice(j);
}
var merged = mergeAlternately("abcd", "pq");
console.log(merged);
