# ZenPylon

Code for my personal website at [zenpylon.me](https://zenpylon.me).

## Component naming conventions

Components which are rendered via a route should be prefixed with `app-`. For example, the page that displays the polynomial sphere has the url `/playground/polynomial-sphere`. However, the component that contains the polynomial sphere itself, `polynomial-sphere` is not accessed directly via url. Instead, it is rendered within the `app-polynomial-sphere` component, and therefore it does not have the `app` prefix.
