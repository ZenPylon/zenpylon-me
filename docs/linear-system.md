# Exploration of Linear Tracing in 1D

## Introducing the trace line
We start by creating a template function with minimum at some $x_0$.  We then scale this function downward so that its image (i.e. $F(x_0)$) is lower than any value we'd expect of the target minimum.  Starting at $x_0$, we want to construct a line that passes through $x_0$ and somehow traces its way to the minimum of the target function.  

We can begin my writing the general form of the line.  If F is our morphing function, then we have:

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

We can then substitute $x_0+tu_1$ for $x$:

$$\large z_0 + tu_2=S_1(x_0)\cos(x_0)+S_2(t)\cos(2(x_0+tu_1))+\ldots+S_n(t)\cos(n(x_0+tu_1))$$.

The idea here is to constrain our morphing function so that it has at least one point on the line specified by $\vec{u}$ as $t:0\rightarrow1$.  In this way, we trace the morphing process from the original minimum point.

But this is just specifies a general line. We need to add an addtitional constraint so that the line moves in the direction of the target minimum. Since we constructed the template function to have a minimum lower than the target's minimum, the shortest vertical distance from the template's minimum to the target function will occur at the target function's minimum.  The "vertical distance" equates to $u_2$.


  
