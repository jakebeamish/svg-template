const title = 'Untitled';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

document.title = `${title}`;

const svg = createSVG({
    width: 400,
    height: 400,
})

// const WIDTH = svg.getAttribute.baseVal.value;
// const HEIGHT = svg.getAttribute.height;


// drawLine(svg, 10, 10, 100, 100)

const columns = 20;
const rows = 20;

for (let j = 0; j < columns; j++) {
    for (let i = 0; i < rows; i++) {
        let x = j * (WIDTH/columns);
        drawLine(svg, x, 10, x, 100);
    }
}

function createSVG({
    width = 100,
    height = 100,
    bg = 'snow',
    id = 'mySVG'
}) {
    const svg = document.createElementNS(SVG_NAMESPACE, 'svg')
    svg.setAttributeNS(null, 'id', id)
    svg.setAttributeNS(null, 'width', width)
    svg.setAttributeNS(null, 'height', height)
    svg.setAttributeNS(null, 'style', `background-color:${bg}`)
    svg.setAttributeNS(null, 'viewBox', `0 0 ${width} ${height}`)
    document.body.appendChild(svg);
    return svg;
}

function drawLine(svg, x1, y1, x2, y2) {
    const line = document.createElementNS(SVG_NAMESPACE, 'line')
    line.setAttributeNS(null, 'x1', x1);
    line.setAttributeNS(null, 'y1', y1);
    line.setAttributeNS(null, 'x2', x2);
    line.setAttributeNS(null, 'y2', y2);
    line.setAttributeNS(null, 'stroke', 'black');
    // line.setAttributeNS(null, 'stroke-width', 1);
    svg.appendChild(line);
}