/* istanbul ignore file */
const { equal } = require('assert');
const uuid = require('../../index');

(function()
{
    global.window = null;
    equal(typeof uuid() === 'string', true, '@amjs/uuid works for NodeJS');
})();

(function()
{
    global.window   = {
        performance : {
            now     : () => Math.random()
        }
    };
    equal(typeof uuid() === 'string', true, '@amjs/uuid works for browser');
})();
