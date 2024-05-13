import { floor, fract, lerp, createSVG, createLine } from "./utils.js";

const svg = createSVG({
    width: 400,
    height: 400,
})


createLine(svg, 10, 10, 100, 100)