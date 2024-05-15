import { createSVG } from "./renderer.js";
import { Vector, Line, intersectionLineLine } from "./geometry.js";
import { LCG, lerp, randomInteger, randomElement } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";
import { Sketch } from "./sketch.js";

// const seed = randomInteger(0xFFFFFFFF);
const seed = 0xFAFA00;

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

for (let i = 0; i < 100; i++) {
    const a = new Vector(
        randomInteger(width, prng.next()),
        randomInteger(height, prng.next()),
    )
    const b = new Vector(
        randomInteger(width, prng.next()),
        randomInteger(height, prng.next()),
    )

    const line = new Line(a, b);
    sketch.lines.push(line)
}

sketch.draw(svg);
initializeEventHandlers(svg, filename);

function filename() {
    return `${config.title}_${config.seed.toString(16)}_${config.width}x${config.height}`
}