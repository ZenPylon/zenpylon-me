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

$$\large x_0+tu_1=x$$
$$\large F(x_0, 0)+tu_2=F(x, t)$$

To simplify the notation slightly, let $\ z_0=F(x_0, 0)$, so that we have

$$\large z_0+tu_2=F(x, t)$$.

Expanding $F(x, t)$, we have

$$\large z_0 + tu_2=S_1(t)\cos(x)+S_2(t)\cos(2x)+\ldots+S_n(t)\cos(nx)$$

We can then substitute $x_0+tu_1$ for $x$:

$$\large z_0 + tu_2=S_1(t)\cos(x_0+tu_1)+S_2(t)\cos(2(x_0+tu_1))+\ldots+S_n(t)\cos(n(x_0+tu_1))$$.

The idea here is to constrain our morphing function so that it has at least one point on the line specified by $\vec{u}$ as $t:0\rightarrow1$.  In this way, we trace the morphing process from the original minimum point.

But this is just specifies a general line. We need to add an addtitional constraint so that the line moves in the direction of the target minimum. Since we constructed the template function to have a minimum lower than the target's minimum, the shortest vertical distance from the template's minimum to the target function will occur at the target function's minimum.  The "vertical distance" equates to $u_2$.

## Minimizing $u_2$

**Note:** Still figuring this out.

The first thing to note from our equation involving $u_1$ and $u_2$ is that we have many degrees of freedom - our scaling functions, $S_i(t)$, $u_1$ and $u_2$, and the morphing parameter that $t$ takes on a range of values in range $[0, 1]$.

Ultimately, we want to find a set of $S_i(t)$ such that we minimize $u_2$ from which we will then calculate $u_1$. 

## Approach: t-increments
Suppose that we follow our trace line in small increments of $t$, with each segment $j$ starting at $\large \frac{j}{m}$ and having length $\large \frac{1}{m}$.  

## Approach: t-increments with piecewise-linear scale functions
Suppose we let our scaling functions, $S_i(t)$, take the piecewise-linear form

$$\large S_i(t) = c_{i,0}+t \cdot r_i(c_{i,1}-c_{i,0}), t < \frac{1}{r_i}$$
$$\large S_i(t) = c_{i,1}, t \geq \frac{1}{r_i}$$

where $c_{i,0}$ is the i-th Fourier coefficient of the template function, $c_{i,1}$ is the is the i-th Fourier coefficient of the target function, and $r_i \geq 1$ is the rate parameter.  In other words, the Fourier coefficients of the template function linearly approach the Fourier coefficients of the target function, with a rate of $r_i$.  When the target function coefficient has been reached, the scale function levels off (i.e. flattens) to the value $c_{i,1}$ for the remainder of interval (i.e. remainder of $[0, 1]$).  

Now, suppose we plug in $n$ values of $t$. We want to choose a set of $r_i$'s such that we minimize $u2$.  Expanding the $S_i$ terms and using sum notation, we have:


$\large t=\frac{1}{n}$

$$\large x_0 + \frac{1}{n}u_2 = \sum_{i=1}^n [c_{i,0} + r_i(c_{i,1} - c_{i,0})] \cos{(i \cdot (x_0 + \frac{1}{n}u_1))}$$
$\large t=\frac{2}{n}$

$$\large  x_0 + \frac{2}{n}u_2 = \sum_{i=1}^n [c_{i,0} + r_i(c_{i,1} - c_{i,0})] \cos{(i \cdot (x_0 + \frac{2}{n}u_1))}$$
$$\vdots$$

$\large t=1$

$$\large  x_0 + u_2 = \sum_{i=1}^n [c_{i,0} + r_i(c_{i,1} - c_{i,0})] \cos{(i \cdot (x_0+tu_1))}$$

If we add these equations together, we can get another equation in terms of $u_2$:

$$\large n \cdot x_0 + \frac{n(n + 1)}{2} \cdot u_2 = [...]$$

newline

$$\large x_0 + \frac{(n + 1)}{2} u_2 = \frac{1}{n}[...]$$

newline

$$\large u_2 = \frac{2}{(n + 1)} \cdot (\frac{1}{n}[...] - x_0)$$

Since $x_0$, $\frac{2}{(n + 1)}$, and $\frac{1}{n}$ are given, let's drop them for convenience of notation (though we'll need to add them back later).  With that, we can remove everything except our placeholder $[...]$, and expand the placeholder as follows:

$$\large u_2 = \sum_{i=1}^n [c_{i,0} + r_i(c_{i,1} - c_{i,0})] \cos{(i \cdot (x_0+\frac{1}{n}u_1))} + \cdots + \sum_{i=1}^n [c_{i,0} + r_i(c_{i,1} - c_{i,0})] \cos{(i \cdot (x_0+\frac{n}{n}u_1))}$$.

**NOTE:** correct the above equations to include the factor $t$ with the $r_i$ (at whatever value)

So, how can we choose $r_i$ such that $u_2$ is minimized?  $u_2$ still exists as a sum.  If we can minimize each term in that sum, $u_2$ should also be minimized in the process.  Note that our scaling functions (i.e. our piecewise-linear functions) are invoked multiple times, one at each value of $t$.  Note, also, that at a certain value of $t$, the value of that function will flatten to a constant. In terms of the equation, that means that at a certain value of $t$, all terms to the right involving $S_i(t)$ have the same value.

We need to consider two cases: the case of decreasing scaling functions (in which the template coefficient is larger than the target coefficient), and the case of increasing scale functions (in which the target coefficient is larger than the template coefficient).  Since we control the coefficients $r_i$ of the scaling functions, we want to choose $r_i$ such that large values decrease quickly and small values decrease slowly.  Likewise, we want small values to increase quickly, and large values to increase slowly.

**NOTE:** correct the above to mention that "value" is the differencee in coefficients, not the coefficient value itself.


However, we also need to take into account the value of the cosine term itself as $t$ goes from 0 to 1.  

1. Separate into increasing and decreasing terms.
1. Collect all the terms involving $r_i$ for each $i$.  e.g. $[n \cdot c_{2,0} + r_2(\frac{1}{n}[c_{2,1} - c_{2,0}] + \cdots + \frac{n}{n}[c_{2,1} - c_{2,0}] + \cos(2(x_0 + \frac{1}{n}u_1)) + \cdots \cos(2(x_0 + \frac{n}{n}u_1)))]$, where each term in brackets has a factor of $t$ (for that particular equation).
1. (Pull out and ignore the constant terms $n \cdot c_{2,0}$ ?)
1. Figure out how to handle the $u_1$ term in the cosine functions.  How to evaluate function at each point, or across range 0-->1?

    **Proposal:** 
    1. For large $n$, we an approximate the cosine sum with the integral on the interval $[0, 1]$.  (The increasing value of $t$ betwen $\frac{1}{n} \cdots \frac{n}{n}$ acts as our continuous variable for large $n$).
    1. Evaluate integral: (TODO, notate) integral.  = $\large \frac{1}{2u_1}[sin(2x_0 + 2u_1) - sin(2x_0)]$

1. 
1. Sort terms from highest to lowest (absolute value?)
1. Set rate in accordance 



----

One of the challenges here is that introducing more values of $t$ also introduces more terms, since the argument of the cosine function changes when $t$ changes. 

## Approach: Sum of cosines formula
Apply the sum of cosines formula.

$$\large z_0 + tu_2 = S_1(t)[\cos(x_0)\cos(tu_1) - \sin(x_0)\sin(tu_1)]+\ldots + S_n(t)[ \cos(n \cdot x_0)\cos(n \cdot tu_1)-\sin(n \cdot x_0)\sin(n \cdot tu_1)]$$.

More compactly:

$$\large x_0 + tu_2 = \sum_{k=1}^{n} S_k(t)[ \cos(k \cdot x_0)\cos(k \cdot tu_1)-\sin(k \cdot x_0)\sin(k \cdot tu_1)]$$

With separated cosines and sines:

$$\large x_0 + tu_2 = \sum_{k=1}^{n} S_k(t)[ \cos(k \cdot x_0)\cos(k \cdot tu_1)] - \sum_{k=1}^{n} S_k(t)[ \sin(k \cdot x_0)\sin(k \cdot tu_1)]$$


## Approach: linear combination of sinusoids
Collect similar terms via the [linear combination](https://en.wikipedia.org/wiki/List_of_trigonometric_identities#More_than_two_sinusoids).


## Approach: evaluate at t-increments, create system of equations
Suppose we trace the line in n segments, with each segment of length 1/n.  Then on the kth segment, $t=k/n$.  To build intuition, let's start with $n=5$.

$$k=1$$
$$\large z_0+\frac{1}{5}u_2 = S_1(\frac{1}{5})\cos(x_0+\frac{1}{5}u_1)+S_2(\frac{1}{5})\cos(2(x_0+\frac{1}{5}u_1))+\ldots+S_n(\frac{1}{5})\cos(n(x_0+\frac{1}{5}u_1))$$.

$$k=2$$
$$\large z_0+\frac{2}{5}u_2 = S_1(\frac{2}{5})\cos(x_0+\frac{2}{5}u_1)+S_2(\frac{2}{5})\cos(2(x_0+\frac{2}{5}u_1))+\ldots+S_n(\frac{2}{5})\cos(n(x_0+\frac{2}{5}u_1))$$

$$k=3$$   
$$\large z_0+\frac{3}{5}u_2 = S_1(\frac{3}{5}u)\cos(x_0+\frac{3}{5}u_1)+S_2(\frac{3}{5})\cos(2(x_0+\frac{3}{5}u_1))+\ldots+S_n(\frac{3}{5})\cos(n(x_0+\frac{3}{5}u_1))$$3

$$ k=4$$
$$\large z_0+\frac{4}{5}u_2 = S_1(\frac{4}{5})\cos(x_0+\frac{4}{5}u_1)+S_2(\frac{4}{5})\cos(2(x_0+\frac{4}{5}u_1))+\ldots+S_n(\frac{4}{5})\cos(n(x_0+\frac{4}{5}u_1))$$.

$$ k=5$$
$$\large z_0+u_2 = S_1(1)\cos(x_0+u_1)+S_2(1)\cos(2(x_0+u_1))+\ldots+S_n(1)\cos(n(x_0+u_1))$$.


Wow, what a mess.
