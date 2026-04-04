'use strict';

var kind = require('../kind.cjs');

const debounceKind = kind.createFlowKind("debounce");
function createDebounce(properties) {
    return debounceKind.setTo({}, properties);
}

exports.createDebounce = createDebounce;
exports.debounceKind = debounceKind;
