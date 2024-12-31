function isPalindrome(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-zA-Z0-9]/g, "");
    var pointer1 = 0;
    var pointer2 = s.length - 1;
    //two pointers
    while (pointer1 <= pointer2) {
        if (s[pointer1] != s[pointer2]) {
            return false;
        }
        pointer1++;
        pointer2--;
    }
    return true;
}
var hello = isPalindrome("18P81");
console.log(hello);
