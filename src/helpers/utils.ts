export function calculateCosineSeries(
  coefficients: number[],
  xValues: number[],
) {
  const yValues = Array(xValues.length);
  xValues.forEach((x, index) => {
    let waveSum = 0;

    // CoefficientIndex + 1 is the wave number
    coefficients.forEach(
      (coefficient, coefficientIndex) =>
        (waveSum += coefficient * Math.cos((coefficientIndex + 1) * x)),
    );
    yValues[index] = waveSum;
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
  const xValues = [-5, -4, -3, -2, 1, 0, 1, 2, 3, 4, 5];
  const yValues = calculateCosineSeries([1, 1, 1], xValues);

  return xValues.map((x, index) => ({ x, y: yValues[index] }));
}
