import { createSVG, drawLine, drawPoint, downloadSVG } from "./renderer.js";
import { Vector, Line } from "./geometry.js";

const title = 'Testing';
const width = 500;
const height = 500;
const bg = 'snow';

const svg = createSVG({
    width, height, bg, id: `${title}`
})

const sketch = {
    points: [],
    lines: []
}

for (let i = 0; i < 15; i++) {
    let p = new Vector(
        (Math.floor(Math.random() * width / 100) + 0.5) * 100,
        (Math.floor(Math.random() * height / 100) + 0.5) * 100
    );
    sketch.points.push(p)
}

// sketch.points.sort((a, b) => (a.x - b.x));

for (let point of sketch.points) {
    drawPoint(svg, point.x, point.y)
}

for (let i = 0; i < sketch.points.length - 1; i++) {
    const a = sketch.points[i];
    const b = sketch.points[(i + 1) % sketch.points.length]
    let line = new Line(a, b);
    sketch.lines.push(line);
}

for (let line of sketch.lines) {
    drawLine(svg, line.a.x, line.a.y, line.b.x, line.b.y)
}

onkeydown = (event) => {
    if (event.code === 'KeyS') {
        downloadSVG(svg, filename());
    }
}

function filename() {
    return `${title}_${width}x${height}`
}