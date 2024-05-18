/**
 * @class
 */
export class Vector {
    /**
     * 
     * @param {number} x - The x component of the vector.
     * @param {number} y - The y component of the vector.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}

/**
 * @class
 */
export class Line {
    /**
     *
     * @param {Vector} a - The startpoint of the line.
     * @param {Vector} b - The endpoint of the line.
     */
    constructor(a, b) {
        this.a = a;
        this.b = b
    }
}

/**
 * 
 * @param {Line} line1 
 * @param {Line} line2 
 * @returns {(boolean|Array)} - False if lines don't intersect, otherwise returns the intersection point [x,y]
 */
export function intersectionLineLine(line1, line2) {
    const x1 = line1.a.x;
    const y1 = line1.a.y;
    const x2 = line1.b.x;
    const y2 = line1.b.y;

    const x3 = line2.a.x;
    const y3 = line2.a.y;
    const x4 = line2.b.x;
    const y4 = line2.b.y;

    const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

    // Check if lines are parallel
    if (denominator === 0) {
        return false;
    }

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

    // Check if intersection point lies within the line segments
    if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
        const x = x1 + ua * (x2 - x1);
        const y = y1 + ua * (y2 - y1);
        return [x, y];
    } else {
        return false;
    }
}
