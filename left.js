const nextOrientations = {
    'N': 'W',
    'W': 'S',
    'S': 'E',
    'E': 'N'
};

module.exports = function (position) {
    return {
        position,
        orientation: nextOrientations[position.orientation]
    };
};
