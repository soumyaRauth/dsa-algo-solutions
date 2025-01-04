function isHappy(n) {
    var seen = new Set();
    while (n != 1) {
        if (seen.has(n)) {
            return false; // Cycle detected, not a happy number
        }
        n = findSquareSum(n);
        seen.add(n);
    }
    return true;
}
function findSquareSum(n) {
    var sum = 0;
    while (n > 0) {
        var digit = n % 10; // Extract the last digit
        sum += Math.pow(digit, 2); // Add the square of the digit
        n = Math.floor(n / 10); // Remove the last digit
    }
    return sum;
}
var hp = isHappy(19);
