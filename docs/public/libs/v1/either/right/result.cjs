'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const resultKind = kind.createEitherKind("result");
/**
 * {@include either/result/index.md}
 */
function result(information, value = undefined) {
    return resultKind.setTo(create.right(information, value));
}

exports.result = result;
exports.resultKind = resultKind;
