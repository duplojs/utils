'use strict';

var kind = require('./kind.cjs');
var is = require('./left/is.cjs');
var create = require('./right/create.cjs');
var unwrap = require('../common/unwrap.cjs');
var is$1 = require('./right/is.cjs');
var create$1 = require('./left/create.cjs');

function keepAsRightSelection(...args) {
    if (args.length === 1) {
        const [selector] = args;
        return (input) => keepAsRightSelection(input, selector);
    }
    const [input, selector] = args;
    if (!kind.informationKind.has(input)) {
        return input;
    }
    const information = kind.informationKind.getValue(input);
    if (selector[information] === true) {
        if (is.isLeft(input)) {
            return create.right(information, unwrap.unwrap(input));
        }
        return input;
    }
    if (is$1.isRight(input)) {
        return create$1.left(information, unwrap.unwrap(input));
    }
    return input;
}

exports.keepAsRightSelection = keepAsRightSelection;
