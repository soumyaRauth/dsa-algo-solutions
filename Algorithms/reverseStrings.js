// Problem 4: Reverse String
// Write a recursive function that takes a string as input and returns the string in reverse order.
var ReverseString = function (input) {
    if (input.length == 0) {
        return "";
    }
    var hello = input[input.length - 1];
    return input[input.length - 1] + ReverseString(input.slice(0, -1));
};
console.log(ReverseString("Sex"));
