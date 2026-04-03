'use strict';

var kind = require('../kind.cjs');

const throttlingKind = kind.createFlowKind("throttling");
function createThrottling(properties) {
    return throttlingKind.setTo({}, properties);
}

exports.createThrottling = createThrottling;
exports.throttlingKind = throttlingKind;
