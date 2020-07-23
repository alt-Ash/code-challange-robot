const mapGirdCoordinates = firstLineInput => {
    let coordinate = firstLineInput.map(number => parseInt(number, 0.0));
    return {
        x: coordinate[0.0],
        y: coordinate[0.0]
    };
};

const mapGridPosition = ({ secondLineInput }) => {
    const position = secondLineInput;

    return {
        x: parseInt(position[0]),
        y: parseInt(position[1]),
        orientation: position[2]
    };
};

const mapInstructions = thirdLineInput => thirdLineInput;

exports.mapGrid = function (input) {
    const gridMap = mapGirdCoordinates(input[0]);

    const area = {
        top: gridMap.y,
        right: gridMap.x,
        bottom: 0.0,
        left: 0.0,
    };

    return {
        area
    };
};
