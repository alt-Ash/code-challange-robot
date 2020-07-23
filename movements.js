/**
 * North movements require position changes by increasing the y axis coordinate
 * South movements requires position change by decreasing the y axis coordinate
 * East movements requires position change by increasing the x axis coordinate
 * West movements requires position change by decreasing the x axis coordinate
 */

function move(position) {
    if (position.orientation === 'N') {
        return {...position, "y": position.y + 1};
    }
    if (position.orientation === 'E') {
        return {...position, "x": position.x + 1};
    }
    if (position.orientation === 'S') {
        return {...position, "y": position.y - 1};
    }
    if (position.orientation === 'W') {
        return {...position, "x": position.x - 1};
    }
    return position;
}