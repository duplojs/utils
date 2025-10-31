'use strict';

var kind = require('../common/kind.cjs');
var wrapValue = require('../common/wrapValue.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');

const patternResultKind = kind.createKind("pattern-result");
function result(value) {
    return patternResultKind.setTo(wrapValue.wrapValue(value));
}
const isResult = patternResultKind.has;

exports.isResult = isResult;
exports.result = result;
