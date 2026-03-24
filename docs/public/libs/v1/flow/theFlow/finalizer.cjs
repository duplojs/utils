'use strict';

var kind = require('../kind.cjs');

const finalizerKind = kind.createFlowKind("finalizer");
function createFinalizer(value) {
    return finalizerKind.setTo({}, value);
}

exports.createFinalizer = createFinalizer;
exports.finalizerKind = finalizerKind;
