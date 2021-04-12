/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const newArr = [];
  let i = 0;
  let count = 1;

  while (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else if (count > 1) {
      newArr.push(`${count}${arr[i]}`);
      arr.splice(0, count);
      i = -1;
      count = 1;
    } else {
      newArr.push(arr[i]);
      arr.splice(0, count);
      i = -1;
      count = 1;
    }
    i++;
  }
  return newArr.join('');
}

module.exports = encodeLine;
