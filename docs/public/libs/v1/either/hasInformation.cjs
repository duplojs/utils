'use strict';

var kind = require('./kind.cjs');

function hasInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => hasInformation(input, information);
    }
    const [input, information] = args;
    return kind.eitherInformationKind.has(input)
        && kind.eitherInformationKind.getValue(input) === information;
}

exports.hasInformation = hasInformation;
