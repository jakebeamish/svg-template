import { SVG_NAMESPACE } from "./constants.js"

export function createSVG({
    width = 100,
    height = 100,
    bg = '#FFFFFA',
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

export function drawLine(svg, x1, y1, x2, y2,
    stroke = 'black',
    strokeWidth = 1,
    linecap = 'square') {
    const line = document.createElementNS(SVG_NAMESPACE, 'line')
    line.setAttributeNS(null, 'x1', x1);
    line.setAttributeNS(null, 'y1', y1);
    line.setAttributeNS(null, 'x2', x2);
    line.setAttributeNS(null, 'y2', y2);
    line.setAttributeNS(null, 'stroke', stroke);
    line.setAttributeNS(null, 'stroke-linecap', linecap)
    line.setAttributeNS(null, 'stroke-width', strokeWidth);
    svg.appendChild(line);
}

export function drawPoint(svg, x1, y1, stroke = 'black',
strokeWidth = 1,
linecap = 'round') {
    drawLine(svg, x1, y1, x1, y1, stroke, strokeWidth, linecap);
}

export function downloadSVG(svgElement, filename) {
    var svgData = new XMLSerializer().serializeToString(svgElement);
    var blob = new Blob([svgData], { type: "image/svg+xml" });
    var url = URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.href = url;
    a.download = filename || "output.svg";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
