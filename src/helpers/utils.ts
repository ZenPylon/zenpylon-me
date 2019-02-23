const xValues = createLinearArray(0, 2 * Math.PI, 100);
const templateCoefficients = [-1, -1, -1, -1, -1];
const targetCoefficients = [1 / 8, 3 / 10, 5 / 10, 7 / 10, 9 / 10];
const templateYValues = calculateCosineSeries(templateCoefficients, xValues);
const targetYValues = calculateCosineSeries(targetCoefficients, xValues);

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
  return xValues.map((x, index) => ({ x, y: templateYValues[index] }));
}

export function createTargetFunction() {
  return xValues.map((x, index) => ({ x, y: targetYValues[index] }));
}

export function createMorphFunction(t: number) {
  const morphCoefficients = templateCoefficients.map(
    (templateCoefficient, index) =>
      templateCoefficient +
      t * (targetCoefficients[index] - templateCoefficient),
  );
  return calculateCosineSeries(morphCoefficients, xValues);
}
