var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var QuickSort = function (num) {
    //-Finding the basecase
    if (num.length <= 1) {
        return num;
    }
    //-Finding the pivot
    var pivot = num[num.length - 1];
    var left = [];
    var right = [];
    //-Partitioning
    for (var i = 0; i < num.length - 1; i++) {
        if (num[i] < pivot) {
            left.push(num[i]);
        }
        else {
            right.push(num[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], QuickSort(left), true), [pivot], false), QuickSort(right), true);
};
var sorted = QuickSort([1, 4]);
console.log(sorted);
