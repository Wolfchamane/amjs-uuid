/* istanbul ignore file */
const { equal } = require('assert');
const uuid = require('../../index');

let tests = 0;
const EXPECTED = 3;

(() =>
{
    global.window = undefined;
    equal(typeof uuid() === 'string', true, '@amjs/uuid works for NodeJS');
    tests++;
})();

(() =>
{
    global.window = { performance : { now : undefined } };
    equal(typeof uuid() === 'string', true, '@amjs/uuid works for browser w/out performance feature');
    tests++;
})();

(() =>
{
    global.window   = {
        performance : {
            now     : () => Math.random()
        }
    };
    equal(typeof uuid() === 'string', true, '@amjs/uuid works for browser');
    global.window = undefined;
    tests++;
})();

console.log(`Total tests: %d/%d`, tests, EXPECTED);
