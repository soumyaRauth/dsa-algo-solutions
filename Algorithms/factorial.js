var Factorial = function (n) {
    if (n == 0) {
        return 1;
    }
    return n * Factorial(n - 1);
};
console.log(Factorial(5));
