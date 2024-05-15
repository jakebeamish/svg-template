export function sinFract(x, y, a, b, m) {
    return fract(Math.sin(x * a + y * b) * m)
}

export function fract(x) {
    return x - Math.floor(x);
}

export function lerp(a, b, t) {
    return (1 - t) * a + t * b;
}

export function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}