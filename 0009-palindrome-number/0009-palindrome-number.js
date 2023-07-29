/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const convertedNumber = x.toString()
    const reversed = convertedNumber.split('').reverse().join('')
    return convertedNumber === reversed
    
    
};