/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0;
    let char = 0;
    //let arr = s.split("");
    for (let i = 0; i < s.length; i++) {

        if (s[i] == ' ') {
            if (s[i] == s[s.length - 1] && i == s.length - 1 && s[i] == s.substr(-1)) {
                count = count;
            }
            else {
                count = 0;
            }
        } else {
            count++;
            char = count;
        }
    }
    return char;
};

console.log(lengthOfLastWord("b a  "));