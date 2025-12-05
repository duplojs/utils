'use strict';

var success = require('./success.cjs');
var is$1 = require('./is.cjs');
var is = require('../left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');

/* eslint-disable @typescript-eslint/max-params */
function rightPipe(input, ...pipes) {
    if (is.isLeft(input)) {
        return input;
    }
    let acc = is$1.isRight(input)
        ? unwrap.unwrap(input)
        : input;
    for (const pipe of pipes) {
        acc = pipe(is$1.isRight(acc)
            ? unwrap.unwrap(acc)
            : acc);
        if (is.isLeft(acc)) {
            return acc;
        }
    }
    return is$1.isRight(acc)
        ? acc
        : success.success(acc);
}

exports.rightPipe = rightPipe;
