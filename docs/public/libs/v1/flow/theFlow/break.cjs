'use strict';

var kind = require('../kind.cjs');

const breakKind = kind.createFlowKind("break");
function createBreak(value = undefined) {
    return breakKind.setTo({}, { value });
}

exports.breakKind = breakKind;
exports.createBreak = createBreak;
