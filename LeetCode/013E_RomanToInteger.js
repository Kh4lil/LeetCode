/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let array = [];
    for (let i = 0; i < s.length; i++) {
        array.push(s.charAt(i));
    }
    return arrayTraversal(array);

};

var arrayTraversal = function (a) {
    let num = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 'I') {
            num += 1;
        }
        else if (a[i] == 'V') {
            if (a[i - 1] == 'I') {
                num -= 1;
                num += 4;
            } else if (a[i + 1] == 'I') {
                num -= 1;
                num += 6
            } else {
                num += 5;
            }

        } else if (a[i] == 'X') {
            if (a[i - 1] == 'I') {
                num -= 1;
                num += 9;
            } else if (a[i + 1] == 'I') {
                num -= 1;
                num += 11;
            } else if (a[i + 1] == 'L') {
                num -= 50;
                num += 40;
            } else if (a[i + 1] == 'C') {
                num -= 100;
                num += 90;
            } else {
                num += 10;
            }

        } else if (a[i] == 'L') {
            if (a[i - 1] == 'I') {
                num -= 1;
                num += 49;
            } else if (a[i + 1] == 'I') {
                num -= 1;
                num += 51;
            } else {
                num += 50;
            }
        } else if (a[i] == 'C') {
            if (a[i - 1] == 'I') {
                num -= 1;
                num += 99;
            } else if (a[i + 1] == 'I') {
                num -= 1;
                num += 101;
            } else if (a[i + 1] == 'D') {
                num -= 500;
                num += 400;
            } else if (a[i + 1] == 'M') {
                num -= 1000;
                num += 900;
            } else {
                num += 100;
            }
        } else if (a[i] == 'D') {
            if (a[i - 1] == 'I') {
                num -= 1;
                num += 499;
            } else if (a[i + 1] == 'I') {
                num -= 1;
                num += 501;
            } else {
                num += 500;
            }
        } else if (a[i] == 'M') {
            if (a[i - 1] == 'I') {
                num -= 1;
                num += 999;
            } else if (a[i + 1] == 'I') {
                num -= 1;
                num += 1001;
            } else {
                num += 1000;
            }
        } else {
            return 0;
        }
    };
    return num;
}

