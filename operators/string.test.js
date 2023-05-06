const { describe, expect, test } = require('@jest/globals');
const checkStringConcatenation = require("./string")
describe('numeric operators', () => {
    test('check string operators', () => {
        console.log = jest.fn()
        checkStringConcatenation()
        expect(console.log.mock.calls[0][0]).toEqual(true);
    });
});