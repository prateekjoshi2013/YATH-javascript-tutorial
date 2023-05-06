const { describe, expect, test } = require('@jest/globals');
const checkLogicalOperators = require("./boolean")
describe('numeric operators', () => {
    test('check logical operators', () => {
        console.log = jest.fn()
        checkLogicalOperators()
        expect(console.log.mock.calls[0]).toEqual([false, true, true]);
        expect(console.log.mock.calls[1]).toEqual([true, true, true, true]);
    });
});