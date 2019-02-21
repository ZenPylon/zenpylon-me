# Tracing via infinitesimals

Remember the Fourier coefficients of the template function, $[c_{1, 0}, \cdots, c_{n, 0}]$ (just using an alternate notation to the $S_i(t)$ to help clarify my thoughts). Suppose, that we can nudge each coefficient some small distance toward its corresponding target coefficient (i.e. toward $[c_{1, 1}, \cdots, c_{n, 1}]$).

For example, we could imagine each "nudge" being some fraction of the difference between the template and target coefficient values. More formally, let

$\LARGE ∆c_i = \frac{c_{i, 1} - c_{i, 0}}{m}$

where the integer $m$ denotes the number of "nudges" each coefficient is allotted. (Alternatively, we could just set it to some small value, since the subsequent reasoning will require that $∆c_i$ is small. In total, there are $n \cdot m$ nudges. During the morphing process, the nudges allotted for each coefficient are applied in some order. Can we find an order that minimizes the "vertical distance" while allowing us to trace the route to get there (the "x distance").

Important questions:

1. How do we determine the "vertical distance" traveled?
1. How do we determine the value of $x$ that is mapped to the new height?
1. How can we minimize the vertical distance?

In the following section, the second coefficient subscript refers to the number of nudges. E.g. $c_{3, 0}$ is the third coefficient having received 0 nudges, $c_{3, 4}$ is the third coefficient having received 4 nudges. Suppose we apply the first nudge as $\large ∆c_i$. Then we have:

$$\large c_{1, 0}\cos(x) + c_{2, 0}\cos(2x) + \cdots + (c_{i, 0} + ∆c_i)\cos(i \cdot x) + \cdots + c_{n, 0}\cos(n \cdot x)$$

Note: this approach is based on the (potentially false) assumption that small change in the Fourier coefficients can be realized by a small change in $x$. Need to make changes in F (and hence coefficients c) small enough so that changes in x can be small

### Approach - (approximately) linear constraint on ∆x's

### Approach - (approximately) linear constraint on ∆F

### Approach - non-negative constraint on ∆F and/or ∆x
