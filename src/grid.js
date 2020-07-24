exports.mapGirdCoordinates = function(firstLineInput) {
    const coordinate = firstLineInput.trim()
        .split(' ')
        .map(number => parseInt(number, 10));

    return {
        x: coordinate[0],
        y: coordinate[1]
    };
}

