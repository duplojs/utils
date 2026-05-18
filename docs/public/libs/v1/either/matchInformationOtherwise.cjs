'use strict';

var kind = require('./kind.cjs');
var unwrap = require('../common/unwrap.cjs');

function matchInformationOtherwise(...args) {
    if (args.length === 2) {
        const [matcher, otherwise] = args;
        return (input) => matchInformationOtherwise(input, matcher, otherwise);
    }
    const [input, matcher, otherwise] = args;
    if (!kind.informationKind.has(input)) {
        return otherwise(input);
    }
    const callback = matcher[kind.informationKind.getValue(input)];
    if (callback === undefined) {
        return otherwise(input);
    }
    return callback(unwrap.unwrap(input));
}

exports.matchInformationOtherwise = matchInformationOtherwise;
