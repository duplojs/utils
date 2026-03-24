'use strict';

var kind = require('../kind.cjs');

const deferKind = kind.createFlowKind("defer");
function createDefer(value) {
    return deferKind.setTo({}, value);
}

exports.createDefer = createDefer;
exports.deferKind = deferKind;
