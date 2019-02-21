## Derivative of S'(t)

2 (b - a (1 - t) - 2 b t + c t)

## First part

**Input**

2 (b - a (1 - t) - 2 b t + c t)*cos(k*u\*t)]dt

**Output**

(2 (a - 2 b + c) (-1 + Cos[k u]) + 2 (-b + c) k u Sin[k u])/(k^2 u^2)

## Second part

**Input**

k \* Integrate[(a (1 - t)^2 + b (1 - t) t + c t^2) Sin[k t u], {t, 0, 1}]

**Output**

(-2 a + 2 b - 2 c + a k^2 u^2 + (2 a - 2 b + 2 c - c k^2 u^2) Cos[k u] - (b - 2 c) k u Sin[k u])/(k^2 u^3)

## Part 1 minus Part 2

**Input**

(k u (2 a - b - (b - 2 c) Cos[k u]) + (-2 (a - b + c) + c k^2 u^2) Sin[k u])/(k^3 u^3) - (-2 a + 2 b - 2 c + a k^2 u^2 + (2 a - 2 b + 2 c - c k^2 u^2) Cos[k u] - (b - 2 c) k u Sin[k u])/(k^2 u^3)

---

integral of [(1-t)*cos(k*u*t)] from 0 to 1

integral of ((a + t*(b-a))sin(k*u\*t) from 0 to 1
