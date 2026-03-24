'use strict';

var kind = require('../kind.cjs');

const injectionKind = kind.createFlowKind("injection");
function createInjection(properties) {
    return injectionKind.setTo({}, properties);
}

exports.createInjection = createInjection;
exports.injectionKind = injectionKind;
