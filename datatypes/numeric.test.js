const { describe, expect, test } = require('@jest/globals');
const { checkNumericTypes } = require('./numeric');

describe('numeric', () => {
    test('check numeric types', () => {
        console.log = jest.fn();
        checkNumericTypes()
        expect(console.log.mock.calls[0].join(" ")).toBe('9007199254740991 is of type bigint');
        expect(console.log.mock.calls[1].join(" ")).toBe('6 is of type number');
        expect(console.log.mock.calls[2].join(" ")).toBe('-2.4 is of type number');
        expect(console.log.mock.calls[3].join(" ")).toBe('0 is of type bigint');
        expect(console.log.mock.calls[4].join(" ")).toBe('16.984025 is of type number');
    });
});