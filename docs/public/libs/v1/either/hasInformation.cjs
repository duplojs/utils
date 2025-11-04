'use strict';

var kind = require('./kind.cjs');

function hasInformation(input, information) {
    return kind.eitherInformationKind.has(input)
        && kind.eitherInformationKind.getValue(input) === information;
}

exports.hasInformation = hasInformation;
