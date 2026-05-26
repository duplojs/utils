'use strict';

var kind = require('./kind.cjs');
var coalescing = require('../array/coalescing.cjs');

function hasInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => hasInformation(input, information);
    }
    const [input, information] = args;
    const formattedInformation = coalescing.coalescing(information);
    return kind.informationKind.has(input)
        && formattedInformation.includes(kind.informationKind.getValue(input));
}

exports.hasInformation = hasInformation;
