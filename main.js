import { createSVG, drawLine, drawPoint } from "./renderer.js";
import { Vector, Line } from "./geometry.js";
import { lerp, randomInteger, randomElement } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";
import { Sketch } from "./sketch.js";

const config = {
    title: 'Untitled',
    width: '500',
    height: '1000',
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
console.log(sketch)


for (let i = 0; i < 100; i++) {
    // let x = Math.random() * width;
    let x = (randomInteger(0, 10) + 0.5) * config.width / 10;
    sketch.lines.push(new Line({ x: x, y: 0 }, { x: x, y: parseInt(config.height) }))
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