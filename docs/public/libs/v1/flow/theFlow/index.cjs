'use strict';

var kind = require('../kind.cjs');

const theFLowKind = kind.createFlowKind("the-flow");
/**
 * {@include flow/create/index.md}
 */
function create(theFunction) {
    return theFLowKind.setTo({}, { run: theFunction });
}

exports.create = create;
exports.theFLowKind = theFLowKind;
