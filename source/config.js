import { SVG_NAMESPACE } from "./constants.js";


export class Config {
/**
 * 
 * @param { object } options - The configuration options for the Config object.
 * @param { number } [options.width=100]
 * @param { number } [options.height=100]
 */
    constructor({
        title = 'Untitled',
        width = 100,
        height = 100,
        backgroundColour = 'white',
        foregroundColour = 'black'
    } = {}) {
        this.ns = SVG_NAMESPACE;
        this.title = typeof title === 'string' ? title : 'Untitled';
        this.width = typeof width === 'number' ? width : 100;
        this.height = typeof height === 'number' ? height : 100;
        this.backgroundColour = typeof backgroundColour === 'string' ? backgroundColour : 'white';
        this.foregroundColour = typeof foregroundColour === 'string' ? foregroundColour : 'black';
    }
}