const { describe, expect, test } = require('@jest/globals');
const {
    checkDeclareVariableWithLet,
    checkDeclareVariableWithVar,
    checkDeclareConst
} = require('./variables');

describe('sum module', () => {
    test('check variable declaration with let', () => {
        console.log = jest.fn();
        checkDeclareVariableWithLet()
        expect(console.log.mock.calls[0].join(''))
            .toBe('first value assignment: first_value');
        expect(console.log.mock.calls[1].join(''))
            .toBe("reassigned value : reassigned_value");
    });
    test('check variable declaration with var', () => {
        console.log = jest.fn();
        checkDeclareVariableWithVar()
        expect(console.log.mock.calls[0].join(''))
            .toBe('first value assignment: 1');
        expect(console.log.mock.calls[1].join(''))
            .toBe("reassigned value : 2");
    });
    test('check variable declaration with const', () => {
        console.log = jest.fn();
        expect(() => {
            checkDeclareConst()
        }).toThrowError(TypeError);
    });
});