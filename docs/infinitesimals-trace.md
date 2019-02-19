# Tracing via infinitesimals

Remember the Fourier coefficients of the template function, $[c_{1, 0}, \cdots, c_{n, 0}]$ (just using an alternate notation to the $S_i(t)$ to help clarify my thoughts).  Suppose, that we can nudge each coefficient some small distance toward its corresponding target coefficient (i.e. toward $[c_{1, 1}, \cdots, c_{n, 1}]$).

For example, we could imagine each "nudge" being some fraction of the difference between the template and target coefficient values.  More formally, let 

$\LARGE ∆c_i = \frac{c_{i, 1} - c_{i, 0}}{m}$

where the integer $m$ denotes the number of "nudges" each coefficient is allotted.  (Alternatively, we could just set it to some small value, since the subsequent reasoning will require that $∆c_i$ is small.  In total, there are $n \cdot m$ nudges.  During the morphing process, the nudges allotted for each coefficient are applied in some order.  Can we find an order that minimizes the "vertical distance" while allowing us to trace the route to get there (the "x distance").

Important questions:

1. How do we determine the "vertical distance" traveled?
1. How do we determine the value of $x$ that is mapped to the new height?
1. How can we minimize the vertical distance?

Suppose we apply the nudge $\large ∆c_i$.  Then we have:

$$\large c_1\cos(x) + c_2\cos(2x) + \cdots + (c_{i} + ∆c_i)\cos(i \cdot x) + \cdots + c_n\cos(n \cdot x)$$

Note - we'll need a way to keep track of which coefficient is which (i.e. how many nudges have happened).

Note: this approach is based on the (potentially false) assumption that small change in the Fourier coefficients can be realized by a small change in $x$. 