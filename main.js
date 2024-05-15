import { createSVG, drawLine, drawPoint, downloadSVG } from "./createSVG.js";
import { Vector } from "./geometry.js";
import { SVG_NAMESPACE } from "./constants.js";


const title = 'Testing';

const width = 500;
const height = 500;

const svg = createSVG({
    width: width,
    height: height,
    bg: 'snow',
    id: `${title}`
})

for (let i = 0; i < 100; i++) {
    let vector = new Vector(
        Math.random() * width,
        Math.random() * height
    )
    drawPoint(svg, vector.x, vector.y);
}

drawLine(svg, 10, 10, 100, 100);

function sinFract(x, y, a, b, m) {
    return fract(Math.sin(x * a + y * b) * m)
}

function fract(x) {
    return x - Math.floor(x);
}

onkeydown = (event) => {
    if (event.code === 'KeyS') {
        downloadSVG(svg, filename());
    }
}

function filename() {
    return `${title}_${width}x${height}`
}