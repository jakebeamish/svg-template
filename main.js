import { createSVG } from "./renderer.js";
import { Vector, Line, intersectionLineLine } from "./geometry.js";
import { LCG, lerp, randomInteger, randomElement } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";
import { Sketch } from "./sketch.js";

// Use Math.random() to generate a 32-bit unsigned int seed
const seed = randomInteger(0xFFFFFFFF);

const config = {
    title: '',
    width: 500,
    height: 500,
    fg: 'snow',
    bg: 'black',
    showLines: true,
    showPoints: false,
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












//////////////////////////////////////////////////////

sketch.draw(svg);
initializeEventHandlers(svg, filename);

function filename() {
    return `${config.title}_${config.seed.toString(16)}_${config.width}x${config.height}`
}