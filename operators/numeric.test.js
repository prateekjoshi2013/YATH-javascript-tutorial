const { describe, expect, test } = require('@jest/globals');
const checkNumericOperators = require("./numeric")
describe('numeric operators', () => {
    test('check numeric operators', () => {
        console.log = jest.fn()
        checkNumericOperators()
        expect(console.log.mock.calls[0].join(''))
        .toEqual('difference between 5 and 2: 3');
        expect(console.log.mock.calls[1].join(''))
        .toEqual('sum of 5 and 2: 7');
        expect(console.log.mock.calls[2].join(''))
        .toEqual('product of 5 and 2: 10');
        expect(console.log.mock.calls[3].join(''))
        .toEqual('division of 5 divided by  2: 2.5');
        expect(console.log.mock.calls[4].join(''))
        .toEqual('division of 5 divided by  2: Infinity');
        expect(console.log.mock.calls[5].join(''))
        .toEqual('remainder of 5 divided by 2: 1');
        expect(console.log.mock.calls[6].join(''))
        .toEqual(" 5 squared is: 25");
    });
});