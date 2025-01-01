class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  //solve this using two pointer
  
}

//!Redundant part
var listAv = new ListNode(
  3,
  new ListNode(2, new ListNode(0, new ListNode(-4)))
);

let helo = hasCycle(listAv);

console.log(helo);
