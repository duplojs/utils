'use strict';

var kind = require('./kind.cjs');
var unwrap = require('../common/unwrap.cjs');

function matchInformation(...args) {
    if (args.length === 1) {
        const [matcher] = args;
        return (input) => matchInformation(input, matcher);
    }
    const [input, matcher] = args;
    if (!kind.informationKind.has(input)) {
        return input;
    }
    return matcher[kind.informationKind.getValue(input)](unwrap.unwrap(input));
}

exports.matchInformation = matchInformation;
