'use strict';

var wrapValue = require('../../../../common/wrapValue.cjs');
var unwrap = require('../../../../common/unwrap.cjs');

function concat(...args) {
    if (args.length === 1) {
        const [text] = args;
        return (input) => concat(input, text);
    }
    const [input, ...textsRest] = args;
    return wrapValue.wrapValue(unwrap.unwrap(input)
        .concat(...textsRest.map(unwrap.unwrap)));
}

exports.concat = concat;
