const { describe, expect, test } = require('@jest/globals');
const { stringRepresentation, stringProperties } = require('./string');

describe('strings', () => {
    test('check string literal types', () => {
        console.log = jest.fn();
        stringRepresentation()
        expect(console.log.mock.calls[0].join(" ")).toBe("Hello World is of type string");
        expect(console.log.mock.calls[1].join(" ")).toBe("Hello World is of type string");
    });

    test('check string properties', () => {
        console.log = jest.fn();
        stringProperties()
        expect(console.log.mock.calls[0].join(" ")).toBe("first character of string Hello World:  H");
        expect(console.log.mock.calls[1].join(" ")).toBe("last character of string Hello World:  d");
        expect(console.log.mock.calls[2].join(" ")).toBe("length of string Hello World:  11");
    });
});