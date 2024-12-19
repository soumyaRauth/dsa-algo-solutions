var BnS = function (sortedArray, num) {
    var left = 0;
    var right = sortedArray.length - 1;
    while (left <= right) {
        var middle = Math.floor((left + right) / 2);
        if (sortedArray[middle] == num) {
            return middle;
        }
        else if (sortedArray[middle] > num) {
            right = middle - 1;
        }
        else if (sortedArray[middle] < num) {
            left = middle + 1;
        }
    }
    return -1;
};
var BnsResult = BnS([1, 3, 5, 7, 7, 8, 9, 10], 9);
console.log(BnsResult);
