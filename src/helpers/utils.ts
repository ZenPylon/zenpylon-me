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

export function createLinearArray(min, max, steps): number[] {
  if (steps < 1) {
    throw Error('steps must be greater than 0');
  }
  const values = Array(steps + 1);
  const step = (max - min) / steps;
  for (let i = 0; i <= steps; i++) {
    values[i] = min + i * step;
  }
  return values;
}

export function createTemplateFunction() {
  const xValues = createLinearArray(0, 2 * Math.PI, 100);
  const yValues = calculateCosineSeries([-1, -1, -1, -1, -1], xValues);
  return xValues.map((x, index) => ({ x, y: yValues[index] }));
}

export function createTargetFunction() {
  const xValues = createLinearArray(0, 2 * Math.PI, 100);
  const yValues = calculateCosineSeries(
    [1 / 8, 3 / 10, 5 / 10, 7 / 10, 9 / 10],
    xValues,
  );
  return xValues.map((x, index) => ({ x, y: yValues[index] }));
}
