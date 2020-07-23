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

function mapInstructions(thirdLineInput) {
    return thirdLineInput;
}

