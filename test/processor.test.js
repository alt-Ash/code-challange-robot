const processor = require('../src/processor')
const gridMapper = require('../src/grid-mapper.js');

test('Process moves', () => {
    const input = '5 3\n 1 1 E\n RFRFRFRF\n 3 2 N\n FRRFLLFFRRFLL\n 0 3 W\n LLFFFLFLFL'
    const state = gridMapper.mapGrid(input)

    const result = processor.process(state)
    expect(result).toEqual({"area": {"bottom": 0, "left": 0, "right": 5, "top": 3}, "robotScents": [{"lost": true, "orientation": "N", "x": 3, "y": 3}], "robots": [{"instructions": ["R", "F", "R", "F", "R", "F", "R", "F"], "position": {"orientation": "E", "x": 1, "y": 1}}, {"instructions": ["F", "R", "R", "F", "L", "L", "F", "F", "R", "R", "F", "L", "L"], "position": {"lost": true, "orientation": "N", "x": 3, "y": 3}}, {"instructions": ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"], "position": {"orientation": "S", "x": 2, "y": 3}}]});
});

test('Robot get instructions', () => {
    const input = '5 3\n 1 1 E\n RFRFRFRF\n 3 2 N\n FRRFLLFFRRFLL\n 0 3 W\n LLFFFLFLFL'

    const state = gridMapper.mapGrid(input)

    const result = processor.process(state)
    expect(result.robots[1]).toStrictEqual({position: { x: 3, y: 3, orientation: 'N', lost: true }, instructions: ['F', 'R', 'R', 'F','L', 'L', 'F', 'F','R', 'R', 'F', 'L','L']} );
});

test('Robot is Lost', () => {
    const input = '5 3\n 1 1 E\n RFRFRFRF\n 3 2 N\n FRRFLLFFRRFLL\n 0 3 W\n LLFFFLFLFL'

    const state = gridMapper.mapGrid(input)
    const process = processor.process(state)
    const result = process.robots[1].position.lost

    expect(result).toBe( true);
});

test('Robot is can turn Right', () => {
    const input = '5 3\n 1 1 E\n R'

    const state = gridMapper.mapGrid(input)
    const process = processor.process(state)
    const result = process.robots[0].position.orientation

    expect(result).toBe( 'S');
});

test('Robot is can turn Left', () => {
    const input = '5 3\n 1 1 S\n L'

    const state = gridMapper.mapGrid(input)
    const process = processor.process(state)
    const result = process.robots[0].position.orientation

    expect(result).toBe( 'E');
});



