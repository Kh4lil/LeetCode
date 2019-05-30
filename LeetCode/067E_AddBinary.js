/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let partA = a.length - 1;
    let partB = b.length - 1;
    let result = "";
    let carry = 0;
    while (partA >= 0 || partB >= 0) {
        let aValue = 0;
        let bValue = 0;
        if (partA >= 0) {
            aValue = a[partA];
            partA--;
        }
        if (partB >= 0) {
            bValue = b[partB];
            partB--;
        }
        let temp = parseInt(aValue) + parseInt(bValue) + carry;
        let rem = temp % 2;
        result = rem + result;
        if (temp >= 2) {
            carry = 1;
        } else {
            carry = 0;
        }
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
};