/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let currentPos = i;
        if (nums[i] == target) {
            return i;
        }
        if (!nums.includes(target)) {
            if (target > nums[i] && target < nums[i + 1]) {
                let location = i + 1;
                return (location);
            }
            else if (target == 0) {
                return 0;
            } else if (target > nums.pop()) {
                return (nums.length + 1);
            } else if (target < nums[0]) {
                return 0;
            }
        }
    }
};
