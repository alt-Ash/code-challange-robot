const forward = require('../instructions/forward.js')

test('Position North', () => {
    const orientation = 'N';
    let left = 0;
    let right = 0;
    const result = forward(orientation, left, right)

    expect(result).toBe('N');
});

test('Position South', () => {
    const orientation = 'S';
    let left = 0;
    let right = 0;
    const result = forward(orientation, left, right)

    expect(result).toBe('S');
});


test('Position West', () => {
    const orientation = 'W';
    let left = 0;
    let right = 0;
    const result = forward(orientation, left, right)

    expect(result).toBe('W');
});


test('Position East', () => {
    const orientation = 'E';
    let left = 0;
    let right = 0;
    const result = forward(orientation, left, right)

    expect(result).toBe('E');
});





