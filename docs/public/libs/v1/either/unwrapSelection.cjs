'use strict';

var kind = require('./kind.cjs');
var unwrap = require('../common/unwrap.cjs');

function unwrapSelection(...args) {
    if (args.length === 1) {
        const [selector] = args;
        return (input) => unwrapSelection(input, selector);
    }
    const [input, selector] = args;
    if (!kind.informationKind.has(input)) {
        return input;
    }
    return selector[kind.informationKind.getValue(input)] === true
        ? unwrap.unwrap(input)
        : input;
}

exports.unwrapSelection = unwrapSelection;
