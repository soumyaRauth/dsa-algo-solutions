// Problem 5: Power Function
// Write a recursive function to calculate the power of a number 𝑥n
var powerFunction = function (num, pow) {
    if (pow == 0) {
        return 1;
    }
    return num * powerFunction(num, pow - 1);
};
console.log(powerFunction(2, 3));
