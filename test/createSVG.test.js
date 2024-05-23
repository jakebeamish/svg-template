import { createSVG } from "../source/renderer.js"

test('creates an SVG element with specified width and height', () => {

    const expectedWidth = 100;
    const expectedHeight = 141;

    const svg = createSVG({
        width: expectedWidth,
        height: expectedHeight
    })

    expect(svg.tagName).toBe('svg');
    expect(svg.getAttribute('width')).toBe(expectedWidth.toString());
    expect(svg.getAttribute('height')).toBe(expectedHeight.toString());
})