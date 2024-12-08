// Write a recursive function to calculate the length of a string without using the .length property.

// Input: A string (e.g., "recursion").

// Output: The length of the string (e.g., 9 for "recursion").

const lengthOfAString = (input: string): number => {
  if (!input) {
    return 0;
  }
  return 1 + lengthOfAString(input.slice(1));
};

console.log(lengthOfAString("Hellooooo"));
