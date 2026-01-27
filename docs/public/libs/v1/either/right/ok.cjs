'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const okKind = kind.createEitherKind("ok");
/**
 * @deprecated use okKind
 */
const eitherOkKind = okKind;
/**
 * {@include either/ok/index.md}
 */
function ok() {
    return okKind.setTo(create.right("ok", undefined));
}

exports.eitherOkKind = eitherOkKind;
exports.ok = ok;
exports.okKind = okKind;
