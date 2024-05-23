import { Sketch } from "../source/sketch.js";

describe('The Sketch class', () => {

    test('creates a new Sketch object using default Config if no options are provided', () => {
        const sketch = new Sketch();
        expect(sketch).toBeInstanceOf(Sketch);
        expect(sketch.config.title).toBe('Untitled');
        expect(sketch.config.width).toBe(100);
        expect(sketch.config.height).toBe(100);
        expect(sketch.config.backgroundColour).toBe('white');
        expect(sketch.config.foregroundColour).toBe('black');
    })

    test('creates an SVG element according to the Config', () => {
        const sketch = new Sketch();
        expect(sketch.svg).toBeInstanceOf(SVGElement);
        expect(sketch.svg.getAttribute('width')).toBe(sketch.config.width.toString());
        expect(sketch.svg.getAttribute('height')).toBe(sketch.config.height.toString());

    })

    test('can deduplicate lines', () => {
        const sketch = new Sketch();

        for (let i = 0; i < 10; i++) {
            sketch.lines.push({
                a: {
                    x: 1,
                    y: 1
                },
                b: {
                    x: 2,
                    y: 2
                }
            })
        }

        expect(sketch.lines.length).toBe(10);

        sketch.removeDuplicateLines();

        expect(sketch.lines.length).toBe(1);

    })
})