exports.mapGirdCoordinates = function(input) {
    const coordinate = input.trim()
        .split(' ')
        .map(number => parseInt(number, 10));

    return {
        x: coordinate[0],
        y: coordinate[1]
    };
}

