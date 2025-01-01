var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function hasCycle(head) {
    //two pointers
    var fast = head;
    var slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        if (slow) {
            slow = slow === null || slow === void 0 ? void 0 : slow.next;
        }
        if (fast === slow) {
            return true;
        }
    }
    return false;
}
var listAv = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));
var helo = hasCycle(listAv);
console.log(helo);
