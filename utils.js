export function sinFract(x, y, a, b, m) {
    return fract(Math.sin(x * a + y * b) * m)
}

export function fract(x) {
    return x - Math.floor(x);
}

export function lerp(a, b, t) {
    return (1 - t) * a + t * b;
}

export function randomInteger(min, max, randomfn = Math.random()) {
    if (max === undefined) {
        max = min;
        min = 0;
    }

    if (max === typeof( Function )) {
        randomfn = max;
        max = min;
        min = 0;
    }
    return Math.floor(min + randomfn * (max - min));
}

export function randomElement(array, randomfn = Math.random()) {
    const length = array.length;
    const index = randomInteger(0, length, randomfn);
    return array[index];
}

export class LCG {
    constructor(seed = 0) {
        this.seed = seed;
    }

    next() {
        this.seed = (this.seed * 1664525 + 1013904223) % 4294967296;
        return this.seed / 4294967296;
    }
}