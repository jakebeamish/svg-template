import { createSVG, drawLine, drawPoint, downloadSVG } from "./renderer.js";
import { Vector, Line } from "./geometry.js";
import { lerp } from "./utils.js";

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

for (let i = 0; i < 15; i++) {
    let p = new Vector(
        (Math.floor(Math.random() * width / 100) + 0.5) * 100,
        (Math.floor(Math.random() * height / 160) + 0.5) * 160
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


for (let i = 0; i < 3; i++) {
let l1 = sketch.lines[Math.floor(Math.random() * sketch.lines.length)];
let l2 = sketch.lines[Math.floor(Math.random() * sketch.lines.length)];
// let l2 = r;

for (let i = 0; i < 30; i++) {
    let v = new Vector(
        lerp(l1.a.x, l1.b.x, i/29),
        lerp(l1.a.y, l1.b.y, i/29)
    )
    let u = new Vector(
        lerp(l2.a.x, l2.b.x, i/29),
        lerp(l2.a.y, l2.b.y, i/29)
    )

    drawLine(svg, u.x, u.y, v.x, v.y, fg);
}
}

// drawLine(svg, 0, 0, l1.a.x, l1.a.y, fg)

for (let line of sketch.lines) {
    drawLine(svg, line.a.x, line.a.y, line.b.x, line.b.y, fg)
}

onkeydown = (event) => {
    if (event.code === 'KeyS') {
        downloadSVG(svg, filename());
    }
}

function filename() {
    return `${title}_${width}x${height}`
}