const gridMapper = require('../src/grid-mapper.js')

test('test robot top grid position matches second input vales', () => {
    let result = gridMapper.mapGrid("500 50").area.top;
    expect(result).toBe(50);
});

test('test robot right grid position matches first input vales', () => {
    let result = gridMapper.mapGrid("500 50").area.right;
    expect(result).toBe(500);
});

test('test robot default grid position matches input', () => {
    let result = gridMapper.mapGrid("500 50").area;
    expect(result).toEqual({"bottom": 0, "left": 0, "right": 500, "top": 50});
});

test('test robot left grid position is not impacted by input', () => {
    let result = gridMapper.mapGrid("500 50").area.left;
    expect(result).toBe(0);
});

test('test robot bottom grid position is not impacted by input', () => {
    let result = gridMapper.mapGrid("500 50").area.bottom;
    expect(result).toBe(0);
});


