/**
 * @file 
 */

import { createSVG, drawLine, drawPoint } from "./renderer.js";
import { Config } from "./config.js"

/** Class representing a sketch. */
export class Sketch {
    /**
     * A helper class for storing attributes of a sketch, including config options.
     * 
     * @param {Config} config - The config object.
     * @param {Array.<Line>} [lines=[]] - An array of lines.
     * @param {Array.<Vector>} [points=[]] - An array of points.
     */
    constructor(config, points = [], lines = []) {

        if (!(config instanceof Config)) {
            config = new Config();
        }

        this.config = config;
        this.points = points;
        this.lines = lines;
        this.svg = createSVG(this.config);
    }

    /**
     * Adds the [Lines]{@link Line} and points of the {@link Sketch} to an SVG document,
     * after first removing duplicate lines.
     * @param {*} svg - The SVG object reference.
     */
    draw() {
        this.removeDuplicateLines();
        this.drawLines(this.svg);
        this.drawPoints(this.svg);
    }

    /**
     * Removes duplicate [Lines]{@link Line} from the sketch.
     */
    removeDuplicateLines() {
        let jsonObject = this.lines.map(JSON.stringify);
        let uniqueSet = new Set(jsonObject);
        let uniqueArray = Array.from(uniqueSet).map(JSON.parse)
        this.lines = uniqueArray;
    }

    /**
     * Adds the [Lines]{@link Line} of the sketch to an SVG document.
     * @param {*} svg 
     */
    drawLines(svg) {
        if (this.config.showLines) {
            for (let line of this.lines) {
                drawLine(svg,
                    line.a.x,
                    line.a.y,
                    line.b.x,
                    line.b.y,
                    {
                    stroke: this.config.foregroundColour,
                    strokeWidth: this.config.strokeWidth,
                    linecap: this.config.linecap
                })
            }
        }
    }

    /**
     * Adds the points of the sketch to an SVG document.
     * @param {*} svg 
     */
    drawPoints(svg) {
        if (this.config.showPoints) {
            for (let point of this.points) {
                drawPoint(svg, point.x, point.y, this.config.foregroundColour, this.config.strokeWidth)
            }
        }
    }
}