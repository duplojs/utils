'use strict';

var kind = require('../kind.cjs');

const exitKind = kind.createFlowKind("exit");
function createExit(value = undefined) {
    return exitKind.setTo({}, { value });
}

exports.createExit = createExit;
exports.exitKind = exitKind;
