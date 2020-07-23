const assert = require('assert');
const gridMapper = require('../grid-mapper.js')


console.log(gridMapper.mapGrid("50 20"))
describe ('when second value is 20', function () {
    it('top should equal 20', function () {
        result = gridMapper.mapGrid("20").area.top;
        console.log(result)
        assert(result);
    });
})


