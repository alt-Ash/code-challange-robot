/**
 * North movements require position changes by increasing the y axis coordinate
 * South movements requires position change by decreasing the y axis coordinate
 * East movements requires position change by increasing the x axis coordinate
 * West movements requires position change by decreasing the x axis coordinate
 */

function move(position) {
    switch (position.orientation) {
        case 'N':
            return { ...position, y: position.y + 1 };
        case 'S':
            return { ...position, y: position.y - 1 };
        case 'E':
            return { ...position, x: position.x + 1 };
        case 'W':
            return { ...position, x: position.x - 1 };
        default:
            return position;
    }
}

function isPositionOutsideArea(area, position) {
    return area.top < position.y ||
        area.bottom > position.y ||
        area.right < position.x ||
        area.left > position.x;
}

function arePositionsEqual(firstPosition, secondPosition) {
    return firstPosition.x === secondPosition.x && firstPosition.y === secondPosition.y;
}

module.exports = function (position, area, robotScents) {
    const newPosition = move(position);

    if (!isPositionOutsideArea(area, newPosition)) return newPosition;

    const protectedByScent = robotScents.some(scent => arePositionsEqual(position, scent));
    return !protectedByScent ? {
        ...position,
        lost: true
    } : position;
};
