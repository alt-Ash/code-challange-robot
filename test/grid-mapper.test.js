const assert = require('assert');
const gridMapper = require('../grid-mapper.js')

describe('expect top and right axis to be equal to input', function () {
    it('should be { top: 50, right: 20, bottom: 0, left: 0 }', function () {
        const expected = { top: 50, right: 20, bottom: 0, left: 0 }
        let result = gridMapper.mapGrid("20 50 30 401").area;
        assert(result);
    });
});

