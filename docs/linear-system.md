# Exploration of linear tracing in 1D
Starting at the minimum of the template function, $x_0$, we want to construct a line that passes through $x_0$ while minimizing the vertical distance it travels.  

We can begin my writing the general form of the lineIf F is our morphing function, then we have:

$$
\LARGE
(x_0, + F(x_0, 0))+ t\vec{u}=(x, F(x, t))
$$

Where $\vec{u}$ is the direction of the line, and $t\in[0, 1]$.  The intercept of the line is represented by the leftmost term, $\large (x_0, + F(x_0, 0))$.

This equation can be made more explicit by writing out the component equations into parts (one for the x value and one for the image of the x value).  

$$\LARGE x_0+tu_1=x$$
$$\LARGE F(x_0, 0)+tu_2=F(x, t)$$

To simplify the notation slightly, let $\ z_0=F(x_0, 0)$, so that we have

$$\LARGE z_0+tu_2=F(x, t)$$.

Expanding $F(x, t)$, we have

$$\large z_0 + tu_2=S_1(t)\cos(x)+S_2(t)\cos(2x)+\ldots+S_n(t)\cos(nx)$$
