const assert = require('assert');
const forward = require('../instructions/forward.js')


describe ('move North', function () {
    it('should be N', function () {
        const orientation = 'N';
        let left = 0;
        let right = 0;
        const result = forward(orientation, left, right)
        assert(result);
    });
})

describe ('move South', function () {
    it('should be S', function () {
        const orientation = 'S';
        let left = 0;
        let right = 0;

        const result = forward(orientation, left, right)
        assert(result);
    });
})

describe ('move East', function () {
    it('should be E', function () {
        const orientation = 'E';
        let left = 0;
        let right = 0;

        const result = forward(orientation, left, right)
        assert(result);
    });
})

describe ('move West', function () {
    it('should be W', function () {
        const orientation = 'W';
        let left = 0;
        let right = 0;

        const result = forward(orientation, left, right)
        assert(result);
    });
})

describe ('Move Right', function () {
    it('should be 25', function () {
        const orientation = 'N';
        let left = 0;
        let right = 25;

        const result = forward(orientation, left, right)
        assert(result);
    });
})

describe ('Move Left', function () {
    it('should be 25', function () {
        const orientation = 'N';
        let left = 25;
        let right = 0;

        const result = forward(orientation, left, right)
        assert(result);
    });
})

describe ('Move out of Bounds', function () {
    it('should be lost', function () {
        const orientation = 'N';
        let left = -25;
        let right = 0;

        const result = forward(orientation, left, right)
        assert(result);
    });
})





