'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const failKind = kind.createEitherKind("fail");
/**
 * @deprecated use failKind
 */
const eitherFailKind = failKind;
/**
 * {@include either/fail/index.md}
 */
function fail() {
    return failKind.setTo(create.left("fail", undefined));
}

exports.eitherFailKind = eitherFailKind;
exports.fail = fail;
exports.failKind = failKind;
