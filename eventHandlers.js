import { downloadSVG } from './renderer.js';

export function initializeEventHandlers(svg, filename) {
    document.addEventListener('keydown', (event) => {
        if (event.code === 'KeyS') {
            downloadSVG(svg, filename());
        }
    });
}