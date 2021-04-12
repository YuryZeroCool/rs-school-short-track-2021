/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr.filter((elem) => elem !== -1);
  if (array.length !== 0) {
    array.sort((a, b) => a - b);
    arr.forEach((elem, index) => {
      if (elem !== -1) {
        arr.splice(index, 1, array[0]);
        array.shift();
      }
    });
  }
  return arr;
}

module.exports = sortByHeight;
