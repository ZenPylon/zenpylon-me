export function calculateFourierSeries(
  coefficients: number[],
  xValues: number[],
) {
  if (coefficients.length !== xValues.length) {
    throw Error('Coefficients and xValues must be of same length');
  }
  return coefficients.map((coefficient, index) => coefficient * xValues[index]);
}

export function createLinearArray(numElements: number) {
  if (numElements < 1) {
    throw Error('numElements must be greater than 0');
  }
  const values = Array(numElements);
  for (let i = 0; i < numElements; i++) {
    values[i] = i;
  }
  return;
}
