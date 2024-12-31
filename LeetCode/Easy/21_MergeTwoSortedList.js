// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function mergeTwoLists(list1, list2) {
    if (!list1)
        return list2;
    if (!list2)
        return list1;
    var head = new ListNode();
    var tail = head;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        }
        else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail === null || tail === void 0 ? void 0 : tail.next;
    }
    tail.next = list1 !== null && list1 !== void 0 ? list1 : list2;
    return head.next;
}
var list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
var list2 = new ListNode(1, new ListNode(3, new ListNode(5)));
var resultw = mergeTwoLists(list1, list2);
console.log(resultw);
