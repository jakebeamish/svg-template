/**
 * @file index.js is the root file for the example.
 * It kicks things off.
 */

import { Vector, Line, intersectionLineLine } from "./geometry.js";
import { LCG, lerp, randomInteger, randomElement, filename } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";
import { Sketch } from "./sketch.js";
import { colours } from "./colours.js";
import { matrixMultiply } from "./matrix.js";

const seed = randomInteger(0xFFFFFFFF);
const prng = new LCG(seed);

export const config = {
    title: '3d_thing',
    width: 500,
    height: 500,
    bg: randomElement(colours.dark, prng.next()),
    fg: randomElement(colours.light, prng.next()),
    strokeWidth: 2,
    linecap: 'round',
    showLines: true,
    showPoints: true,
    seed: seed,
    gridWidth: 3,
    gridHeight: 3,
    numberOfPoints: randomInteger(5, 20, prng.next()),
    numberOfLines: randomInteger(10, 25, prng.next())
}

if (prng.next() < 0.5) {
    const swap = config.bg;
    config.bg = config.fg;
    config.fg = swap;
}

document.title = `${config.title} ${config.seed.toString(16)}`;

const sketch = new Sketch(config);
const svg = sketch.createSVG();

const { width, height } = sketch.config;

///////////////////////////////////////////////////////


// Put drawing code here
// Create Lines and Points and push them to sketch

const cube = [
    new Vector(-10, -10, -10),
    new Vector(10, -10, -10),
    new Vector(10, 10, -10),
    new Vector(-10, 10, -10),
    new Vector(-10, -10, 10),
    new Vector(10, -10, 10),
    new Vector(10, 10, 10),
    new Vector(-10, 10, 10),
]

const projection = [
    [1, 0, 0],
    [0, 1, 0]
]

for (let v of cube) {
    v = v.mult(5);
    v = matrixMultiply(projection, v);
    v.x += width/2;
    v.y += height/2;
    sketch.points.push(v)
}

// console.table(sketch)
//////////////////////////////////////////////////////

sketch.draw(svg);
initializeEventHandlers(svg, filename);
