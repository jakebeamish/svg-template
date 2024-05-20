/**
 * @file index.js is the root file for the example.
 * It kicks things off.
 */

import { Vector, Line, intersectionLineLine } from "./geometry.js";
import { LCG, lerp, randomInteger, randomElement, filename } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";
import { Sketch } from "./sketch.js";
import { colours } from "./colours.js";

const seed = randomInteger(0xFFFFFFFF);
const prng = new LCG(seed);

export const config = {
    title: 'Lines on a grid',
    width: 1400,
    height: 1000,
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

const { width, height } = sketch.config;

///////////////////////////////////////////////////////


// Put drawing code here
// Create Lines and Points and push them to sketch


for (let i = 0; i < config.numberOfPoints; i++) {
    let p = new Vector(
        (randomInteger(0, config.gridWidth, prng.next())+0.5) * width/config.gridWidth,
        (randomInteger(0, config.gridHeight, prng.next())+0.5) * height/config.gridHeight
    );
    sketch.points.push(p)
}

let focalPoint = randomElement(sketch.points, prng.next());

for (let p of sketch.points) {
    sketch.lines.push(new Line(focalPoint, p))
}

for (let i = 0; i < sketch.points.length - 1; i++) {
    const a = sketch.points[i];
    const b = sketch.points[(i+1)%sketch.points.length]
    let line = new Line(a, b);
    sketch.lines.push(line);
}

let pLine = randomElement(sketch.lines, prng.next());
let qLine = randomElement(sketch.lines, prng.next());

for (let i = 0; i <= 24; i++) {
    let a = new Vector(lerp(pLine.a.x, pLine.b.x, i/24), lerp(pLine.a.y, pLine.b.y, i/24));
    let b = new Vector(lerp(qLine.a.x, qLine.b.x, i/24), lerp(qLine.a.y, qLine.b.y, i/24))
    sketch.lines.push(new Line(a, b))
}

// console.table(sketch)
//////////////////////////////////////////////////////

sketch.draw();
initializeEventHandlers(sketch.svg, filename);
