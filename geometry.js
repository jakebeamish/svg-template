export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}

export class Line {
    constructor(a, b) {
        this.a = a;
        this.b = b
    }
}

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
