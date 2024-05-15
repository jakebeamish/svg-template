import { createSVG, drawLine, drawPoint, downloadSVG } from "./renderer.js";
import { Vector, Line } from "./geometry.js";
import { fract } from "./utils.js";
// import { SVG_NAMESPACE } from "./constants.js";


const title = 'Testing';

const width = 500;
const height = 500;

const svg = createSVG({
    width,
    height,
    bg: 'snow',
    id: `${title}`
})

let points = [];
for (let i = 0; i < 3; i++) {
    let point = new Vector(
        Math.random() * width,
        Math.random() * height
    )
    points.push(point);
}

for (let point of points) {
    drawPoint(svg, point.x, point.y)
}

for (let i = 0; i < 3; i++) {
    const a = points[i];
    const b = points[(i+1) % points.length];
    drawLine(svg, a.x, a.y, b.x, b.y);
}

onkeydown = (event) => {
    if (event.code === 'KeyS') {
        downloadSVG(svg, filename());
    }
}

function filename() {
    return `${title}_${width}x${height}`
}