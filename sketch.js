export class Sketch {
    constructor(config) {
        this.config = config;
        this.points = [];
        this.lines = [];
    }

    removeDuplicateLines() {
        let jsonObject = this.lines.map(JSON.stringify);
        let uniqueSet = new Set(jsonObject);
        let uniqueArray = Array.from(uniqueSet).map(JSON.parse)
        this.lines = uniqueArray;
    }
}