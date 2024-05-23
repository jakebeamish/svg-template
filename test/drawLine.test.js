import { Sketch } from "../source/sketch.js";
import { drawLine } from "../source/renderer.js";

describe('The drawLine function', () => {
    test('Adds a valid line element to an SVG', () => {
        const sketch = new Sketch();
        const expectedLine = { x1: 1, y1: 1, x2: 2, y2: 2, stroke: 'black', strokeWeight: 1 }
        
        drawLine(sketch.svg, expectedLine.x1, expectedLine.y1, expectedLine.x2, expectedLine.y2, expectedLine);

        const lineElement = sketch.svg.querySelector('line');
        expect(lineElement.getAttribute('x1')).toBe(expectedLine.x1.toString());
    })
})