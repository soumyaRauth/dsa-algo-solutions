var FactRecursion = function (n) {
    if (n == 0) {
        return 1;
    }
    return n * FactRecursion(n - 1);
};
var rec = FactRecursion(5);
console.log(rec);
