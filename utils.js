const ns = 'http://www.w3.org/2000/svg';

export function createSVG({
    width = 100,
    height = 100,
    bg = 'snow',
    id = 'mySVG'
}) {
    const svg = document.createElementNS(ns, 'svg')
    svg.setAttributeNS(null, 'id', id)
    svg.setAttributeNS(null, 'width', width)
    svg.setAttributeNS(null, 'height', height)
    svg.setAttributeNS(null, 'style', `background-color:${bg}`)
    svg.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`)
    document.body.appendChild(svg);
    return svg;
}

export function createLine(svg, x1, y1, x2, y2) {
    let line = document.createElementNS(ns, 'line')
    line.setAttributeNS(null, 'x1', x1);
    line.setAttributeNS(null, 'y1', y1);
    line.setAttributeNS(null, 'x2', x2);
    line.setAttributeNS(null, 'y2', y2);
    line.setAttributeNS(null, 'stroke', 'black');
    line.setAttributeNS(null, 'stroke-width', 1);
    svg.appendChild(line)
}

export function floor(n) {
    return Math.floor(n);
}

export function fract(n) {
    return n - Math.floor(n);
}

export function lerp(a, b, t) {
    return (1 - t) * a + t * b;
}