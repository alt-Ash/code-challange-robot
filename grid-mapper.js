function mapGirdCoordinates(firstLineInput) {
    const coordinate = firstLineInput.trim()
        .split(' ')
        .map(number => parseInt(number, 10));

    return {
        x: coordinate[0],
        y: coordinate[1]
    };
}

function mapGridPosition(secondLineInput) {
    const position = secondLineInput.trim().split(' ');

    return {
        x: parseInt(position[0], 10),
        y: parseInt(position[1], 10),
        orientation: position[2]
    };
}

function mapInstructions(thirdLineInput) {
    return thirdLineInput.trim().split('');
}

exports.mapGrid = function (input) {
    const grid = input.split('\n');

    const gridMap = mapGirdCoordinates(grid[0]);
    const area = {
        top: gridMap.y,
        right: gridMap.x,
        bottom: 0,
        left: 0
    };

    const robots = [];
    for (let i = 1; i < grid.length; i += 2) {
        robots.push({
            position: mapGridPosition(grid[i]),
            instructions: mapInstructions(grid[i + 1])
        });
    }

    return {
        area,
        robots
    };
};
