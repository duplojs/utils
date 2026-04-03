'use strict';

var kind = require('../kind.cjs');

const queueKind = kind.createFlowKind("queue");
function createQueue(properties) {
    return queueKind.setTo({}, properties);
}

exports.createQueue = createQueue;
exports.queueKind = queueKind;
