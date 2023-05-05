const helloWorld = require('./hello');
const { describe, expect, test } = require('@jest/globals');

describe('hello-javascript module', () => {
    test('hello javascript test', () => {
        console.log = jest.fn();
        helloWorld()
        expect(console.log.mock.calls[0][0]).toBe('Hello Javascript');
    });
    test('single line comment test', () => {
        const functionSourceCode = helloWorld.toString();
        comment = "this is my single line comment"
        const pattern = new RegExp(`\/\/\s*(.*)\\s*`,'g');
        let matches = [];
        let match;
        while ((match = pattern.exec(functionSourceCode))) {
            if (match.index === pattern.lastIndex) {
                pattern.lastIndex++;
            }
            matches.push(match[1].trim());
        }

        expect(matches).toContain(comment)
    });
    test('multiline comment test', () => {
        const multilineComment='/* This is my multiline comment */'
        const functionSourceCode = helloWorld.toString();
        const commentRegex = /\/\*([\s\S]*?)\*\//g;
        const matches = functionSourceCode.match(commentRegex);
        const comment = matches.join(' '); 
        const words = comment.split(/\s+/); 
        expect(words.join(' ')).toBe(multilineComment)
    });
});