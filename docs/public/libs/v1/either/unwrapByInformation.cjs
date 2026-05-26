'use strict';

var unwrap = require('../common/unwrap.cjs');
var hasInformation = require('./hasInformation.cjs');

function unwrapByInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => unwrapByInformation(input, information);
    }
    const [input, information] = args;
    if (hasInformation.hasInformation(input, information)) {
        return unwrap.unwrap(input);
    }
    return input;
}

exports.unwrapByInformation = unwrapByInformation;
