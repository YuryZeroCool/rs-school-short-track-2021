/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let resul = 0;
  let x = 0;
  matrix.forEach((element) => {
    const filltered = element.filter((c) => c !== 0);
    filltered.forEach((el) => {
      if (x <= el) {
        resul += el;
        x = el;
      }
    });
  });
  return resul;
}

module.exports = getMatrixElementsSum;
