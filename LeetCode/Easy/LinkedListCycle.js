"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function hasCycle(head) {
    //solve this using two pointer
}
//!Redundant part
var listAv = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));
let helo = hasCycle(listAv);
console.log(helo);
