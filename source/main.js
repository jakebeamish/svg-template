/**
 * @file index.js is the root file for the example.
 * It kicks things off.
 */

import { createSVG } from "./renderer.js";
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

/**
 * @constant
 * @type {Object}
 * @default
 */
export const config = {
    title: '',
    width: 500,
    height: 700,
    fg: randomElement(colours.dark),
    bg: randomElement(colours.light),
    showLines: true,
    showPoints: true,
    seed: seed
}

const prng = new LCG(config.seed);

document.title = `${config.title} ${config.seed.toString(16)}`;

const svg = createSVG({
    width: config.width,
    height: config.height,
    bg: config.bg,
    title: config.title
})

const sketch = new Sketch(config);
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


console.table(sketch)
//////////////////////////////////////////////////////

sketch.draw(svg);
initializeEventHandlers(svg, filename);
