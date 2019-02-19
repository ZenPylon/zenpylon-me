# Tracing via infinitesimals

Remember the Fourier coefficients of the template function, $[c_{1, 0}, \cdots, c_{n, 0}]$ (just using an alternate notation to the $S_i(t)$ to help clarify my thoughts).  Suppose, that we can nudge each coefficient some small distance toward its corresponding target coefficient (i.e. toward $[c_{1, 1}, \cdots, c_{n, 1}]$).

For example, we could imagine each "nudge" being some fraction of the difference between the template and target coefficient values.  More formally, let 

$\LARGE ∆c_i = \frac{ c_{i, 1} - c_{i, 0}}{m}$

where the integer $m$ denotes the number of "nudges" each coefficient is allotted.  During the morphing process, 


Note: this approach is based on the (potentially false) assumption that small change in the Fourier coefficients can be realized by a small change in $x$. 