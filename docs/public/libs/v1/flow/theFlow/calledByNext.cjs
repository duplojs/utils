'use strict';

var kind = require('../kind.cjs');

const calledByNextKind = kind.createFlowKind("called-by-next");
function createCalledByNext(value) {
    return calledByNextKind.setTo({}, value);
}

exports.calledByNextKind = calledByNextKind;
exports.createCalledByNext = createCalledByNext;
