const forward = require('../src/instructions/forward.js')

test('When orientation input is N expect Position North', () => {
    const orientation = 'N';
    let left = 25;
    let right = 50;

    const result = forward(orientation, left, right);

    expect(result).toBe('N');
});

test('When orientation input is S expect Position South', () => {
    const orientation = 'S';
    let left = 0;
    let right = 0;

    const result = forward(orientation, left, right)

    expect(result).toBe('S');
});


test('When orientation input is W expect Position West', () => {
    const orientation = 'W';
    let left = 0;
    let right = 0;

    const result = forward(orientation, left, right)

    expect(result).toBe('W');
});


test('When orientation input is E expect Position East', () => {
    const orientation = 'E';
    let left = 0;
    let right = 0;

    const result = forward(orientation, left, right)

    expect(result).toBe('E');
});
