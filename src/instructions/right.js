const nextOrientations = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N'
};

module.exports = function (position) {
    return {
        ...position,
        orientation: nextOrientations[position.orientation]
    };
};
