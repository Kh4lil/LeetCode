/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    //Create a new list. 
    let l3 = {
        val: null,
        next: null
    };
    let runner = l3;

    // While we have values in l1 and l2: 
    while (l1 && l2) {
        if (l1.val > l2.val) { //if the value of node l1 is bigger than l2
            runner.next = l2; // next node of runner will equal l2
            l2 = l2.next; // move to next node
        } else {
            runner.next = l1;
            l1 = l1.next;
        }
        runner = runner.next;
    }
    runner.next = l1 || l2;

    return l3.next;
}