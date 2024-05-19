import { config } from './main.js';
import { filename } from './utils.js';
import { downloadSVG } from './renderer.js';

export function initializeEventHandlers(svg, filename) {
    document.addEventListener('keydown', (event) => {
        if (event.code === 'KeyS') {
            console.log(`Downloading ${filename(config)}`);
            downloadSVG(svg, filename(config));
        }
    });
}