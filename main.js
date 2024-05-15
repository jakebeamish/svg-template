import { createSVG, drawLine, drawPoint, downloadSVG } from "./renderer.js";
import { Vector, Line } from "./geometry.js";
import { lerp, randomInteger } from "./utils.js";
import { initializeEventHandlers } from "./eventHandlers.js";

const title = 'Testing';
const width = 500;
const height = 800;
const fg = 'white';
const bg = 'black';

const svg = createSVG({
    width, height, fg, bg, id: `${title}`
})

const sketch = {
    points: [],
    lines: []
}

for (let point of sketch.points) {
    drawPoint(svg, point.x, point.y)
}

for (let i = 0; i < 100; i++) {
    // let x = Math.random() * width;
    let x = (randomInteger(0, 10)+0.5) * width/10;
    sketch.lines.push(new Line({ x: x, y: 0 }, { x: x, y: height }))
}


let jsonObject = sketch.lines.map(JSON.stringify);
let uniqueSet = new Set(jsonObject);
let uniqueArray = Array.from(uniqueSet).map(JSON.parse)
sketch.lines = uniqueArray;

console.log(sketch.lines.length);


for (let line of sketch.lines) {
    drawLine(svg, line.a.x, line.a.y, line.b.x, line.b.y, fg)
}

initializeEventHandlers(svg, filename);

function filename() {
    return `${title}_${width}x${height}`
}