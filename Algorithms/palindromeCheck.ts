// Write a recursive function to check if a string is a palindrome (i.e., it reads the same forward and backward).

// Input: A string (e.g., "madam").

// Output: true if the string is a palindrome, false otherwise.

const PalindromeCheck = (name) => {
  return name[0] == name[name.length - 1];
};

console.log(PalindromeCheck("oello"));
