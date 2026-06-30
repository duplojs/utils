'use strict';

var kind = require('./kind.cjs');
var hasInformation = require('./hasInformation.cjs');
var is = require('./left/is.cjs');
var create = require('./right/create.cjs');
var unwrap = require('../common/unwrap.cjs');
var is$1 = require('./right/is.cjs');
var create$1 = require('./left/create.cjs');

function keepAsRightByInformation(...args) {
    if (args.length === 1) {
        const [information] = args;
        return (input) => keepAsRightByInformation(input, information);
    }
    const [input, information] = args;
    if (hasInformation.hasInformation(input, information)) {
        if (is.isLeft(input)) {
            return create.right(kind.informationKind.getValue(input), unwrap.unwrap(input));
        }
        return input;
    }
    if (is$1.isRight(input)) {
        return create$1.left(kind.informationKind.getValue(input), unwrap.unwrap(input));
    }
    return input;
}

exports.keepAsRightByInformation = keepAsRightByInformation;
