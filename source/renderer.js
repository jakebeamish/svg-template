import { SVG_NAMESPACE } from "./constants.js"

/**
 * Creates an SVG element according to the config, and appends it to the document body.
 * @param { Config } config 
 * @returns svg
 */
export function createSVG(config) {
    const svg = document.createElementNS(config.ns, 'svg')
    svg.setAttributeNS(config.ns, 'id', config.title)
    svg.setAttributeNS(config.ns, 'width', config.width)
    svg.setAttributeNS(config.ns, 'height', config.height)
    svg.setAttributeNS(null, 'style', `background-color:${config.backgroundColour}`)
    svg.setAttributeNS(null, 'viewBox', `0 0 ${config.width} ${config.height}`)
    document.body.appendChild(svg);
    return svg;
}

/**
 * Appends a line to an SVG element.
 * @param {Object} svg - A reference to the SVG element.
 * @param {number} x1 - The x coordinate of the startpoint.
 * @param {number} y1 - The y coordinate of the startpoint.
 * @param {number} x2 - The x coordinate of the endpoint.
 * @param {number} y2 - The y coordinate of the endpoint.
 * @param {string} [stroke='black'] - The colour of the line.
 * @param {number} [strokeWidth=1] - The line thickness.
 * @param {string} [linecap='round'] - The linecap can be 'square', 'round' or '..' 
 */
export function drawLine(svg, x1, y1, x2, y2,
    {
        stroke = 'black',
        strokeWidth = 1,
        linecap = 'square'
    }) {
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

/**
 * Appends a point to an SVG element.
 * @param {Object} svg - A reference to the SVG element.
 * @param {number} x1 - The x coordinate of the point.
 * @param {number} y1 - The y coordinate of the point.
 * @param {number} [stroke='black'] - The colour of the point. 
 * @param {number} [strokeWidth=1] - The line thickness.
 * @param {string} [linecap='round'] - The linecap can be 'square', 'round' or '..' 
 */
export function drawPoint(svg, x1, y1, stroke = 'black',
    strokeWidth = 1,
    linecap = 'round') {
    drawLine(svg, x1, y1, x1, y1, stroke, strokeWidth, linecap);
}

/**
 * 
 * @param {svg} svgElement - The SVG element to download.
 * @param {string} filename - The filename to use.
 */
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
