# Differentiate, then integrate

Picking up where [linear-system](./linear-system.md) trailed off.

$$\large x_0 + tu_2 = \sum_{k=1}^n S_k(t)\cos(kx_0 + ku_1t)$$

Taking the derivative with respect to $t$:

$$\large u_2 = \sum_{k=1}^n [S_k^\prime(t)\cos(kx_0 + ku_1t) - ku_1 \cdot S_k(t)sin(kx_0 + ku_1t)]$$

Apply linearity of summation:

$$\large u_2 = \sum_{k=1}^n S_k^\prime(t)\cos(kx_0 + ku_1t)  - \sum_{k=1}^n ku_1 \cdot S_k(t)sin(kx_0 + ku_1t)$$

Pull out constant factor:

$$\large u_2 = \sum_{k=1}^n S_k^\prime(t)\cos(kx_0 + ku_1t)  - u_1 \sum_{k=1}^n k\cdot S_k(t)sin(kx_0 + ku_1t)$$

Take the definite integral with respect to $t$ on the interval $[0, 1]$
