function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  s = s.replace(/[^a-zA-Z0-9]/g, "");

  let pointer1 = 0;
  let pointer2 = s.length - 1;

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

let hello = isPalindrome("18P81");
console.log(hello);
