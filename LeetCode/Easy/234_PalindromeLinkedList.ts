// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let result: number[] = [];

function isPalindrome(head: ListNode | null): boolean {
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(`result`, result);

  return false;
}

const linkedList = new ListNode(
  1,
  new ListNode(2, new ListNode(2, new ListNode(1, null)))
);
console.log(isPalindrome(linkedList));
