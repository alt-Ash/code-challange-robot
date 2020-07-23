const report = require('../src/report')
const gridMapper = require('../src/grid-mapper.js');
const input = '60 60\n 45 75 E\n FRLFFLRLFF\n 20 10 N\n FRFFRFL\n 15 25 W\n LFFFLFRFL'

test('report return valid input', () => {
    const state = gridMapper.mapGrid(input)

    const result = report.report(state)
    expect(result).toBe("45 75 E\n20 10 N\n15 25 W");
});

test('report return valid input', () => {
    const state = gridMapper.mapGrid(input)

    const result = report.report(state)
    expect(result).toBe("45 75 E\n20 10 N\n15 25 W");
});
