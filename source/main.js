/**
 * @file index.js is the root file for the example.
 * It kicks things off.
 */

import { Vector, Line, intersectionLineLine } from "./geometry.js";
import { LCG, lerp, randomInteger, randomElement, filename } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";
import { Sketch } from "./sketch.js";
import { Config } from "./config.js";
import { colours } from "./colours.js";

const seed = randomInteger(0xFFFFFFFF);
const prng = new LCG(seed);

export const config = new Config({
    title: 'Lines on a grid',
    width: 1000,
    height: 1000,
    backgroundColour: randomElement(colours.dark, prng.next()),
    foregroundColour: randomElement(colours.light, prng.next()),
    strokeWidth: 1,
    linecap: 'round',
    showLines: true,
    showPoints: true,
    seed: seed,
})

if (prng.next() < 0.5) {
    const swap = config.backgroundColour;
    config.backgroundColour = config.foregroundColour;
    config.foregroundColour = swap;
}

document.title = `${config.title} ${config.seed.toString(16)}`;

const sketch = new Sketch(config);

const { width, height } = sketch.config;

///////////////////////////////////////////////////////

// Put drawing code here
// Create Lines and Points and push them to sketch


for (let i = 0; i < 100; i++) {
    let v = new Vector(prng.next() * width, prng.next() * height);
    sketch.points.push(v)
}

for (let p of sketch.points) {
    let o = p;
    while (o == p) { 
    o = randomElement(sketch.points, prng.next());
    // l = new Line(o, p)
    }
sketch.lines.push(new Line(o, p))
}

console.log(sketch.lines.length)

//////////////////////////////////////////////////////

sketch.draw();
initializeEventHandlers(sketch.svg, filename);
