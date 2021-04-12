/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let i = 0;
  let j = 0;
  let arr1 = [];
  let arr2 = [];
  if (s1 === '' || s2 === '') {
    res = 0;
  } else {
    arr1 = s1.split('');
    arr2 = s2.split('');
    while (i < arr1.length) {
      j = 0;
      while (j < arr2.length) {
        if (arr1[i] === arr2[j]) {
          arr2.splice(j, 1);
          j--;
          res++;
          break;
        }
        j++;
      }
      i++;
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
