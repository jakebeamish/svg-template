/**
 * @file index.js is the root file for the example.
 * It kicks things off.
 */

import { Vector, Line, intersectionLineLine } from "./geometry.js";
import { LCG, lerp, randomInteger, randomElement, filename } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";
import { Sketch } from "./sketch.js";
import { colours } from "./colours.js";

// Use Math.random() to generate a 32-bit unsigned int seed

/**
 * Sets the seed to a random integer between 0 and 0xFFFFFFFF
 * @constant
 * @type {number}
 */
const seed = randomInteger(0xFFFFFFFF);
const prng = new LCG(seed);

/**
 * @constant
 * @type {Object}
 * @default
 */
export const config = {
    title: '',
    width: 500,
    height: 700,
    fg: randomElement(colours.dark, prng.next()),
    bg: randomElement(colours.light, prng.next()),
    strokeWidth: 1,
    linecap: 'round',
    showLines: true,
    showPoints: true,
    seed: seed
}

document.title = `${config.title} ${config.seed.toString(16)}`;

const sketch = new Sketch(config);
const svg = sketch.createSVG();

const { width, height } = sketch.config;

///////////////////////////////////////////////////////


// Put drawing code here
// Create Lines and Points and push them to sketch


for (let i = 0; i < 15; i++) {
    let p = new Vector(
        (randomInteger(0, 3, prng.next())+0.5) * width/3,
        (randomInteger(0, 3, prng.next())+0.5) * height/3
    );
    sketch.points.push(p)
}

for (let i = 0; i < sketch.points.length - 1; i++) {
    const a = sketch.points[i];
    const b = sketch.points[(i+1)%sketch.points.length]
    let line = new Line(a, b);
    sketch.lines.push(line);
}

let pLine = randomElement(sketch.lines, prng.next());

for (let i = 0; i <= 30; i++) {
    let a = new Vector(lerp(pLine.a.x, pLine.b.x, i/30), lerp(pLine.a.y, pLine.b.y, i/30));
    let b = new Vector(lerp(pLine.a.x, pLine.b.x, i/30),0)
    sketch.lines.push(new Line(a, b))
}

console.table(sketch)
//////////////////////////////////////////////////////

sketch.draw(svg);
initializeEventHandlers(svg, filename);
