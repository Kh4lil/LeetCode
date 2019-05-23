/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = '';
    if (strs.length > 0) {
        commonPrefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            for (let y = 0; y < commonPrefix.length; y++) {
                if (strs[i][y] != commonPrefix[y]) {
                    commonPrefix = commonPrefix.slice(0, y);
                    break;
                }
            }
        }
    } return commonPrefix;
};