'use strict';

var base = require('./base.cjs');

function hasInformation(input, information) {
    return base.eitherInformationKind.has(input)
        && base.eitherInformationKind.getValue(input) === information;
}

exports.hasInformation = hasInformation;
