export function calculateCosineSeries(
  coefficients: number[],
  xValues: number[],
) {
  const waveNumbers = createLinearArray(xValues.length);
  const yValues = Array(xValues.length);
  xValues.forEach((x, index) => {
    yValues[index] = waveNumbers.map(
      waveNumber => coefficients[index] * Math.cos(waveNumber * x),
    );
  });

  return yValues;
}

export function createLinearArray(numElements: number): number[] {
  if (numElements < 1) {
    throw Error('numElements must be greater than 0');
  }
  const values = Array(numElements);
  for (let i = 0; i < numElements; i++) {
    values[i] = i;
  }
  return values;
}

export function createTemplateFunction() {
  calculateCosineSeries();
}
