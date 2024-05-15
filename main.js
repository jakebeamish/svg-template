import { createSVG } from "./renderer.js";
import { Vector, Line, intersectionLineLine } from "./geometry.js";
import { LCG, lerp, randomInteger, randomElement } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";
import { Sketch } from "./sketch.js";

// const seed = randomInteger(0xFFFFFFFF);
const seed = 1;

const config = {
    title: 'Test',
    width: 500,
    height: 500,
    fg: 'black',
    bg: 'snow',
    showLines: true,
    showPoints: false,
    seed: seed
}

const prng = new LCG(config.seed);
let test = ["help", "me", "how"]
for (let i = 0; i < 100; i++) {
    console.log(randomElement(test, prng.next()));
}

document.title = `${config.title} ${config.seed.toString(16)}`;

const svg = createSVG({
    width: config.width,
    height: config.height,
    bg: config.bg,
    title: config.title
})

const sketch = new Sketch(config);
const width = sketch.config.width;
const height = sketch.config.height;


sketch.draw(svg);
initializeEventHandlers(svg, filename);

function filename() {
    return `${config.title}_${config.seed.toString(16)}_${config.width}x${config.height}`
}