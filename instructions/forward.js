/**
 * North movements require position changes by increasing the y axis coordinate
 * South movements requires position change by decreasing the y axis coordinate
 * East movements requires position change by increasing the x axis coordinate
 * West movements requires position change by decreasing the x axis coordinate
 */

function move(position) {
    if (position.orientation === 'N') {
        return {...position, y: position.y + 1};
    }
    if (position.orientation === 'E') {
        return {...position, x: position.x + 1};
    }
    if (position.orientation === 'S') {
        return {...position, y: position.y - 1};
    }
    if (position.orientation === 'W') {
        return {...position, x: position.x - 1};
    }
    return position;
}

function isPositionOutsideArea(area, position) {
    return (
        position.x < area.left ||
        position.x > area.right ||
        position.y < area.bottom ||
        position.y > area.top
    );
}

function arePositionsEqual(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

module.exports = function (position, area, robotScents) {
    const newPosition = move(position);
    if (isPositionOutsideArea(area, newPosition)) {
        const protectedByScent = robotScents.some(scent => arePositionsEqual(position, scent));
        if (protectedByScent) {
            return position;
        } else {
            return {
                ...position,
                lost: true
            };
        }
    } else {
        return newPosition;
    }
};
