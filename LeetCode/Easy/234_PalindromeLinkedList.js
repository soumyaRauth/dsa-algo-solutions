// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var result = [];
function isPalindrome(head) {
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log("result", result);
    return false;
}
var linkedList = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1, null))));
console.log(isPalindrome(linkedList));
