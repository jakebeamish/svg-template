import { createSVG, drawLine, drawPoint } from "./renderer.js";
import { Vector, Line, intersectionLineLine } from "./geometry.js";
import { lerp, randomInteger, randomElement } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";
import { Sketch } from "./sketch.js";

const config = {
    title: 'Untitled',
    width: 500,
    height: 1000,
    fg: 'black',
    bg: 'snow',
    showLines: true,
    showPoints: false
}

document.title = config.title;

const svg = createSVG({
    width: config.width,
    height: config.height,
    bg: config.bg,
    title: config.title
})

const sketch = new Sketch(config);
const width = sketch.config.width;
const height = sketch.config.height;

for (let i = 0; i < 10000; i++) {
    const a = new Vector(randomInteger(width), randomInteger(height));
    const b = new Vector(randomInteger(width), randomInteger(height));
    const l = new Line(a, b);
    let valid = true;
    for (let other of sketch.lines) {
        if (intersectionLineLine(l, other)) {
            valid = false;
        }
    }
    if (valid) { sketch.lines.push(l) };
}

sketch.removeDuplicateLines();

if (config.showLines) {
    for (let line of sketch.lines) {
        drawLine(svg, line.a.x, line.a.y, line.b.x, line.b.y, config.fg)
    }
}

if (config.showPoints) {
    for (let point of sketch.points) {
        drawPoint(svg, point.x, point.y)
    }
}

initializeEventHandlers(svg, filename);

function filename() {
    return `${config.title}_${config.width}x${config.height}`
}