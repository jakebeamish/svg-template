export const createSketch = ({
    width = 100,
    height = 100,
    backgroundColor = 'grey',
    namespace = "http://www.w3.org/2000/svg",
    elements = []
}={}) => {
    const sketch = {
        width, height, backgroundColor, elements, namespace
    }

    const createSVGElement = (type, attributes = {}) => {
        const element = document.createElementNS(sketch.namespace, type);
        for (let [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }

        return element;
    }

    sketch.generateSVG = () => {
        const svg = createSVGElement('svg', {
            width: sketch.width,
            height: sketch.height,
            viewBox: `0 0 ${sketch.width} ${sketch.height}`,
            style: `background-color: ${sketch.backgroundColor}`
        })

        document.body.appendChild(svg)
        return svg;
    }

    // sketch.addElements = () => {
    //     const 
    // }

    return sketch;
}