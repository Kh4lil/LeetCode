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

var addTwoNumbers = function (l1, l2) {

    let arr = [l1.val]
    let arr2 = [l2.val]
    while (l1.next !== null) {
        l1 = l1.next;
        arr.push(l1.val)
    }
    while (l2.next !== null) {
        l2 = l2.next;
        arr2.push(l2.val)
    }
    arr.reverse();
    arr2.reverse();

    addArray(arr, arr2);

};

function addArray(arr, arr2) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr2[i] >= 10) {
            let addition = (arr[i] + arr2[i]) - 10;
            arr2[i + 1] += 1;
            array.push(addition);
        } else {
            array.push(arr[i] + arr2[i]);
        }
    } return array;
}

addTwoNumbers((2 -> 4 -> 3), (5 -> 6 -> 4))