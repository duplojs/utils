'use strict';

var kind = require('../kind.cjs');

const stepKind = kind.createFlowKind("step");
function createStep(name) {
    return stepKind.setTo({}, name);
}

exports.createStep = createStep;
exports.stepKind = stepKind;
