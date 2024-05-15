
import { drawLine } from "./renderer.js";

export class Sketch {
    constructor(config) {
        this.config = config;
        this.points = [];
        this.lines = [];
    }

    draw(svg) {
        this.removeDuplicateLines();
        this.drawLines(svg);
        this.drawPoints(svg);
    }

    removeDuplicateLines() {
        let jsonObject = this.lines.map(JSON.stringify);
        let uniqueSet = new Set(jsonObject);
        let uniqueArray = Array.from(uniqueSet).map(JSON.parse)
        this.lines = uniqueArray;
    }

    drawLines(svg) {
        if (this.config.showLines) {
            for (let line of this.lines) {
                drawLine(svg, line.a.x, line.a.y, line.b.x, line.b.y, this.config.fg)
            }
        }
    }

    drawPoints(svg) {
        if (this.config.showPoints) {
            for (let point of this.points) {
                drawPoint(svg, point.x, point.y, this.config.fg)
            }
        }
    }
}