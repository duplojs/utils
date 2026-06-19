'use strict';

var unwrap = require('../../../common/unwrap.cjs');

function matchWithString(...args) {
    if (args.length === 1) {
        const [matcher] = args;
        return (input) => matcher[unwrap.unwrap(input)](input);
    }
    const [input, matcher] = args;
    return matcher[unwrap.unwrap(input)](input);
}

exports.matchWithString = matchWithString;
