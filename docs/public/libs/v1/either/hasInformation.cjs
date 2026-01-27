'use strict';

var kind = require('./kind.cjs');

function hasInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => hasInformation(input, information);
    }
    const [input, information] = args;
    return kind.informationKind.has(input)
        && kind.informationKind.getValue(input) === information;
}

exports.hasInformation = hasInformation;
