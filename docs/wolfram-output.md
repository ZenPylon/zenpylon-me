## First part

[a*(1 - t)^2 + b*(1 - t)*t + c*t^2]cos(k*u*t)]dt

integral_0^1 (a (1 - t)^2 + b (1 - t) t + c t^2) cos(k u t) dt = (sin(k u) (c k^2 u^2 - 2 (a - b + c)) + k u (2 a - (b - 2 c) cos(k u) - b))/(k^3 u^3)

Integrate[(a (1 - t)^2 + b (1 - t) t + c t^2) Cos[k t u], {t, 0, 1}]

**Output**

(k u (2 a - b - (b - 2 c) Cos[k u]) + (-2 (a - b + c) + c k^2 u^2) Sin[k u])/(k^3 u^3)

## Second part

**Input**

k \* Integrate[(a (1 - t)^2 + b (1 - t) t + c t^2) Sin[k t u], {t, 0, 1}]

**Output**

(-2 a + 2 b - 2 c + a k^2 u^2 + (2 a - 2 b + 2 c - c k^2 u^2) Cos[k u] - (b - 2 c) k u Sin[k u])/(k^2 u^3)

## Part 1 minus Part 2

**Input**

(k u (2 a - b - (b - 2 c) Cos[k u]) + (-2 (a - b + c) + c k^2 u^2) Sin[k u])/(k^3 u^3) - (-2 a + 2 b - 2 c + a k^2 u^2 + (2 a - 2 b + 2 c - c k^2 u^2) Cos[k u] - (b - 2 c) k u Sin[k u])/(k^2 u^3)
