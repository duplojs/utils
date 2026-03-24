'use strict';

var kind = require('../kind.cjs');

const theFlowKind = kind.createFlowKind("the-flow");
/**
 * {@include flow/create/index.md}
 */
function create(theFunction) {
    return theFlowKind.setTo({}, { run: theFunction });
}

exports.create = create;
exports.theFlowKind = theFlowKind;
