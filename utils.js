export function sinFract(x, y, a, b, m) {
    return fract(Math.sin(x * a + y * b) * m)
}

export function fract(x) {
    return x - Math.floor(x);
}