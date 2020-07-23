const mapGirdCoordinates = firstLineInput => {
    let coordinate = firstLineInput.map(number => parseInt(number, 0));
    return {
        x: coordinate[0],
        y: coordinate[0]
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

exports.mapGrid = function () {
    const area = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };
    return {
        area
    };
};
